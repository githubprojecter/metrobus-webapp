// pages/api/supervisor/live.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getPusher } from "@/lib/pusher";
import { getAuth } from "firebase-admin/auth";
import { PrismaClient } from "@/lib/generated/prisma";
import { liveSet } from "@/lib/liveStore";

const prisma = new PrismaClient();

type Point = {
  latitud: number;
  longitud: number;
  timestamp?: number;
};
type BatchBody = { batch: Point[] };

function isPoint(x: any): x is Point {
  return x && typeof x.latitud === "number" && typeof x.longitud === "number";
}

function setCors(res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // -------- 1) AUTH: Firebase ID token --------
    const authz = (req.headers.authorization || (req.headers as any).Authorization) as string | undefined;
    if (!authz?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Falta Authorization Bearer" });
    }
    const idToken = authz.slice("Bearer ".length).trim();

    // Fuerza verificación "fresca" (evita tokens sin claims recientes)
    const decoded = await getAuth().verifyIdToken(idToken, true);
    const idFirebase = decoded.uid;

    // -------- 2) AUTZ por BD: rol Supervisor en UserRole --------
    const userRole = await prisma.userRole.findUnique({
      where: { idFirebase },
      select: { role: true },
    });
    if (!userRole) {
      return res.status(403).json({ error: "No autorizado: usuario no registrado en UserRole." });
    }
    if (userRole.role !== "Supervisor") {
      return res.status(403).json({ error: "No autorizado: se requiere rol Supervisor." });
    }

    // -------- 3) Parseo y publicación a Pusher --------
    const pusher = getPusher();
    const body = req.body ?? {};

    const publishOne = async (p: Point) => {
      if (!isPoint(p)) throw new Error("Payload inválido (latitud/longitud)");
      const payload = {
        idFirebase,
        latitud: p.latitud,
        longitud: p.longitud,
        timestamp: p.timestamp ?? Date.now(),
      };
      // 1) Pusher: mantenemos realtime en el backend
      await pusher.trigger("supervisor-location", "update", payload);

      // 2) Cache en memoria para el mapa (consumirá vía API)
      liveSet(idFirebase, { latitud: payload.latitud, longitud: payload.longitud, timestamp: payload.timestamp });
    };

    if (Array.isArray((body as BatchBody).batch)) {
      const batch = (body as BatchBody).batch.filter(isPoint);
      if (!batch.length) return res.status(400).json({ error: "Batch vacío o inválido" });
      for (const p of batch) await publishOne(p);
      return res.status(200).json({ ok: true, count: batch.length });
    }

    await publishOne(body as Point);
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    const msg = err?.message || String(err);
    if (msg.toLowerCase().includes("token") || msg.toLowerCase().includes("auth")) {
      return res.status(401).json({ error: "Token inválido o expirado. Vuelve a iniciar sesión o refresca el token." });
    }
    console.error("[/api/supervisor/live] error:", err);
    return res.status(500).json({ error: "Error interno" });
  }
}

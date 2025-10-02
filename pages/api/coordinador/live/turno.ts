// pages/api/coordinador/live/turno.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "firebase-admin/auth";
import { PrismaClient } from "@/lib/generated/prisma";
import { liveGetMany, isFresh } from "@/lib/liveStore";

// Helpers fecha CDMX
const TZ = "America/Mexico_City";
function ymdLocal(d = new Date()) {
  const f = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
  return f.format(d); // YYYY-MM-DD
}
// Ajuste T4 (18–02) cruza medianoche: si la hora local < 2:00, la fecha efectiva es la de ayer
function effectiveYMDForT(turno: "T1"|"T2"|"T3"|"T4"|"T5", now = new Date()) {
  if (turno !== "T4") return ymdLocal(now);
  const hh = Number(new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", hour12: false }).format(now));
  if (hh < 2) {
    const x = new Date(now); x.setUTCDate(x.getUTCDate() - 1);
    return ymdLocal(x);
  }
  return ymdLocal(now);
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // Auth Coordinador/Supervisor; aquí solo exigimos login
    const authz = (req.headers.authorization || (req.headers as any).Authorization) as string | undefined;
    if (!authz?.startsWith("Bearer ")) return res.status(401).json({ error: "Falta Authorization Bearer" });
    const idToken = authz.slice("Bearer ".length).trim();
    await getAuth().verifyIdToken(idToken, true);

    const turno = (req.query.turno as string) || "T1"; // si quieres forzarlo al actual, puedes derivarlo
    if (!["T1","T2","T3","T4","T5"].includes(turno)) return res.status(400).json({ error: "turno inválido" });

    const fecha = effectiveYMDForT(turno as any);
    // Supervisores en turno (fecha+turno)
    const prog = await prisma.turnoProgramado.findMany({
      where: { turno: turno as any, fecha: { gte: new Date(`${fecha}T00:00:00.000Z`), lt: new Date(`${fecha}T23:59:59.999Z`) } },
      select: { supervisorId: true },
    });
    const supIds = Array.from(new Set(prog.map(p => p.supervisorId)));
    if (supIds.length === 0) return res.json({ turno, fecha, list: [] });

    // Trae supervisores con su idFirebase
    const supervisores = await prisma.supervisor.findMany({
      where: { id: { in: supIds } },
      select: {
        id: true, codigo: true,
        user: { select: { idFirebase: true, nombre: true, apellidoPaterno: true, apellidoMaterno: true, telefono: true } },
      },
    });

    const byIdFirebase = supervisores
      .map(s => ({ id: s.id, codigo: s.codigo ?? null, telefono: s.user?.telefono ?? null, idFirebase: s.user?.idFirebase ?? null,
                   nombre: [s.user?.nombre, s.user?.apellidoPaterno, s.user?.apellidoMaterno].filter(Boolean).join(" ") }))
      .filter(s => !!s.idFirebase) as Array<{ id:number; codigo:string|null; telefono:string|null; idFirebase:string; nombre:string }>;

    const idsFirebase = byIdFirebase.map(s => s.idFirebase);
    const live = liveGetMany(idsFirebase); // ← del store en memoria

    // Merge catálogo + live
    const merged = byIdFirebase.map(s => {
      const v = live.find(x => x.idFirebase === s.idFirebase);
      return {
        ...s,
        latitud: v?.latitud ?? null,
        longitud: v?.longitud ?? null,
        timestamp: v?.timestamp ?? null,
        fresh: v?.timestamp ? isFresh(v.timestamp) : false,
      };
    });

    return res.json({ turno, fecha, list: merged });
  } catch (err: any) {
    console.error("[/api/coordinador/live/turno] error:", err);
    return res.status(500).json({ error: "Error interno" });
  }
}

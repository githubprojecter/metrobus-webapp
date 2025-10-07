// pages/api/supervisor/live.ts
import type {NextApiResponse } from "next";
import { getPusher } from "@/lib/pusher";
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';


export default requireRole(['Supervisor'])(
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  try{
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res
          .status(405)
          .json({ error: `Método ${req.method} no permitido` });
      }
      const pusher = getPusher();
      const body = req.body ?? {};
      // console.log(body)
      const payload = {
        idFirebase: req.uid,
        latitud: body.latitud,
        longitud: body.longitud,
        accuracy: body.accuracy,
        timestamp: body.timestamp ?? Date.now(),
      }
      
      // console.log(payload)

      await pusher.trigger("supervisor-location", "update", payload)
      return res.status(200).json({ ok: true });
  } catch (err: any) {
    const msg = err?.message || String(err);
    if (msg.toLowerCase().includes("token") || msg.toLowerCase().includes("auth")) {
      return res.status(401).json({ error: "Token inválido o expirado. Vuelve a iniciar sesión o refresca el token." });
    }
    console.error("[/api/supervisor/live] error:", err);
    return res.status(500).json({ error: "Error interno" });
  }}
);


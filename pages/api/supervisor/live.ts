// pages/api/supervisor/live.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { requireRole } from "@/lib/requireRole";
import { getIO } from "@/lib/socketServer"; // tu instancia de socket.io

export default requireRole(["Supervisor"])(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }
  const { latitud, longitud, timestamp } = req.body || {};
  if (typeof latitud !== "number" || typeof longitud !== "number") {
    return res.status(400).json({ error: "Coordenadas inválidas" });
  }
  const io = getIO();
  
  if (io) {
    const idFirebase = (req as any).user?.uid ?? (req as any).user?.idFirebase;
    io.to('coordinators').emit('coordinator:locations', {
      idFirebase,
      latitud,
      longitud,
      timestamp: timestamp ?? Date.now(),
    });
  } else {
    // Opcional: log para detectar si falta inicializar el socket
    console.warn('[SOCKET] io no inicializado: no se emitió coordinator:locations');
  }
  res.status(200).json({ ok: true });
});

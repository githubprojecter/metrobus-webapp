// pages/api/coordinador/supervisores/presente.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurnoCompat, anchorDateForTurno, type Turno5 } from '@/lib/turnos';

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end();
      return;
    }

    const { latitud, longitud, turno, callId, turnoRaw } = req.body as {
      latitud?: number;
      longitud?: number;
      turno?: string;
      callId?: number;
      turnoRaw?: string;
    };

    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
      res.status(400).json({ error: 'latitud/longitud requeridas' });
      return;
    }

    // 🔹 Ahora parseamos el turno con compatibilidad
    let t: Turno5;
    try {
      t = parseTurnoCompat(turno ?? turnoRaw ?? '');
    } catch (e: any) {
      return res.status(400).json({ error: e?.message ?? 'turno inválido' });
    }

    // Fecha efectiva (maneja madrugada de T4)
    const effDate = anchorDateForTurno(new Date(), t);

    // Supervisor actual
    const sup = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId! },
      select: { id: true },
    });
    if (!sup) {
      res.status(404).json({ error: 'Supervisor no encontrado' });
      return;
    }

    // Resolver call: por callId o por turnoRaw
    let call: { id: number } | null = null;
    if (callId) {
      call = await prisma.reportenseCall.findUnique({
        where: { id: Number(callId) },
        select: { id: true },
      });
    } else if (typeof turnoRaw === 'string' && turnoRaw.trim()) {
      call = await prisma.reportenseCall.findFirst({
        where: { turno: t, createdAt: { gte: effDate } },
        select: { id: true },
        orderBy: { createdAt: 'desc' },
      });
    }

    // Registrar presente
    await prisma.presente.create({
      data: {
        supervisorId: sup.id,
        callId: call?.id ?? null,
        latitud,
        longitud,
        timestamp: new Date(),
      },
    });

    res.status(200).json({ success: true, callId: call?.id ?? null });
  } catch (err: any) {
    console.error('[SUPERVISOR PRESENTE]', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

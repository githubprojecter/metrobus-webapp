// pages/api/coordinador/supervisores/presente.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end();
      return;
    }

    const { latitud, longitud, turno } = req.body as {
      latitud?: number;
      longitud?: number;
      turno: 'MATUTINO' | 'VESPERTINO' | 'NOCTURNO';
    };

    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
      res.status(400).json({ error: 'coordenadas inválidas' });
      return;
    }

    const sup = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId! },
    });
    if (!sup) {
      res.status(404).json({ error: 'Supervisor no encontrado' });
      return;
    }

    // Buscar llamado más reciente del turno actual (últimas 6 horas)
    const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
    const call = await prisma.reportenseCall.findFirst({
      where: { turno, createdAt: { gte: sixHoursAgo } },
      orderBy: { createdAt: 'desc' },
    });

    // Registrar presente (si hay call vigente se asocia; si no, callId = null)
    await prisma.presente.create({
      data: {
        supervisorId: sup.id,
        callId: call?.id ?? null,
        latitud,
        longitud,
      },
    });

    // Guardar SOLO un punto en historial (no en tiempo real)
    await prisma.ubicacionSupervisor.create({
      data: {
        supervisorId: sup.id,
        latitud,
        longitud,
        timestamp: new Date(),
      },
    });

    res.status(200).json({ success: true, callId: call?.id ?? null });
    return;
  } catch (err: any) {
    console.error('[SUPERVISOR PRESENTE]', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
    return;
  }
});

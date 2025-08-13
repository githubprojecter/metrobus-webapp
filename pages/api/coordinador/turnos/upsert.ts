// pages/api/coordinador/supervisores/upsert.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end();
      return;
    }

    const { fecha, turno, supervisorIds } = req.body as {
      fecha?: string;
      turno?: 'MATUTINO' | 'VESPERTINO' | 'NOCTURNO';
      supervisorIds?: number[];
    };

    if (!fecha || !turno || !Array.isArray(supervisorIds)) {
      res.status(400).json({ error: 'payload inválido' });
      return;
    }

    const day = new Date(`${fecha}T00:00:00.000Z`);

    // 1) Borra asignaciones del día/turno
    await prisma.turnoProgramado.deleteMany({
      where: { fecha: day, turno },
    });

    // 2) Crea nuevas asignaciones (si hay)
    if (supervisorIds.length > 0) {
      await prisma.turnoProgramado.createMany({
        data: supervisorIds.map((id) => ({
          fecha: day,
          turno,
          supervisorId: id,
          coordinadorId: req.userRoleId!,
        })),
        skipDuplicates: true,
      });
    }

    res.status(200).json({ success: true, count: supervisorIds.length });
    return;
  } catch (err: any) {
    console.error('[PROGRAMAR-TURNO]', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
    return;
  }
});

// pages/api/coordinador/turnos/upsert.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurno5, ymdToLocalMidnight } from '@/lib/turnos';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow','POST');
    res.status(405).end();
    return;
  }

  const { fecha, turno, supervisorIds } = req.body as {
    fecha: string; turno: string; supervisorIds: number[];
  };
  if (!fecha || !turno || !Array.isArray(supervisorIds)) {
    res.status(400).json({ error: 'payload inválido' });
    return;
  }

  let t: ReturnType<typeof parseTurno5>;
  try {
    t = parseTurno5(turno);
  } catch {
    res.status(400).json({ error: 'turno inválido (T1..T5)' });
    return;
  }

  const day = ymdToLocalMidnight(fecha);

  const coord = await prisma.coordinador.findUnique({
    where: { userRoleId: req.userRoleId! },
    select: { id: true },
  });
  if (!coord) {
    res.status(400).json({ error: 'Coordinador no encontrado para este usuario' });
    return;
  }

  // Limpia turno del día y vuelve a crear los seleccionados
  await prisma.turnoProgramado.deleteMany({ where: { fecha: day, turno: t } });

  if (supervisorIds.length) {
    // (opcional) filtra ids válidos
    const validSupIds = (await prisma.supervisor.findMany({
      where: { id: { in: supervisorIds } },
      select: { id: true },
    })).map(s => s.id);

    if (validSupIds.length) {
      await prisma.turnoProgramado.createMany({
        data: validSupIds.map(id => ({
          fecha: day,
          turno: t,
          supervisorId: id,
          coordinadorId: coord.id, // 👈 usar Coordinador.id
        })),
        skipDuplicates: true,
      });
    }
  }

  res.status(200).json({ success: true, count: supervisorIds.length });
});

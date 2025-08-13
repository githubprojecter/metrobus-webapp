// pages/api/coordinador/turnos/toggle.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurno5, ymdToLocalMidnight } from '@/lib/turnos';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') { 
    res.setHeader('Allow','POST'); res.status(405).end(); return;
  }

  const { fecha, turno, supervisorId, assigned } = req.body as {
    fecha?: string; turno?: string; supervisorId?: number; assigned?: boolean;
  };

  if (!fecha || !turno || !supervisorId || typeof assigned !== 'boolean') {
    res.status(400).json({ error: 'fecha, turno, supervisorId y assigned son requeridos' }); return;
  }

    const t = parseTurno5(turno);
  // let t: ReturnType<typeof parseTurno5>;
  // try {
  //   t = parseTurno5(turno);
  // } catch {
  //   res.status(400).json({ error: 'turno inválido (T1..T5)' });
  //   return;
  // }

  const day = ymdToLocalMidnight(fecha);

  // // 👇 OBLIGATORIO: obtener Coordinador por userRoleId y usar su id
  // const coord = await prisma.coordinador.findUnique({
  //   where: { userRoleId: req.userRoleId! },
  //   select: { id: true },
  // });
  // if (!coord) {
  //   res.status(400).json({ error: 'Coordinador no encontrado para este usuario' });
  //   return;
  // }

  // // (opcional) valida supervisor existente para evitar FK
  // const sup = await prisma.supervisor.findUnique({ where: { id: supervisorId }, select: { id: true } });
  // if (!sup) {
  //   res.status(400).json({ error: `Supervisor ${supervisorId} no existe` });
  //   return;
  // }

    if (assigned) {
    const exist = await prisma.turnoProgramado.findFirst({
      where: { fecha: day, turno: t as any, supervisorId }
    });
    if (!exist) {
      await prisma.turnoProgramado.create({
        data: { fecha: day, turno: t as any, supervisorId, coordinadorId: req.userRoleId! }
      });
    }
  } else {
    await prisma.turnoProgramado.deleteMany({ where: { fecha: day, turno: t as any, supervisorId } });
  }

  // if (assigned) {
  //   await prisma.turnoProgramado.createMany({
  //     data: [{ fecha: day, turno: t, supervisorId, coordinadorId: coord.id }],
  //     skipDuplicates: true, // respalda @@unique([fecha,turno,supervisorId])
  //   });
  // } else {
  //   await prisma.turnoProgramado.deleteMany({
  //     where: { fecha: day, turno: t, supervisorId }
  //   });
  // }

  res.status(200).json({ ok: true });
});

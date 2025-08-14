// pages/api/coordinador/turnos/list.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurno5, ymdToLocalMidnight, addDaysLocal } from '@/lib/turnos';

// export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', 'GET'); res.status(405).end(); return;
//   }

//   const { fecha, turno } = req.query as { fecha?: string; turno?: string };
//   if (!fecha || !turno) { res.status(400).json({ error: 'fecha y turno son requeridos' }); return; }

//   const t = parseTurno5(turno);
//   // let t: any;
//   // try { t = parseTurno5(turno); } catch {
//   //   res.status(400).json({ error: 'turno inválido (T1..T5)' });
//   //   return;
//   // }

//   const day = ymdToLocalMidnight(fecha);
//   const rows = await prisma.turnoProgramado.findMany({
//     where: { fecha: day, turno: t as any},
//     include: { supervisor: { include: { user: true } } },
//     orderBy: { supervisorId: 'asc' }
//   });

//   // console.log(rows)

//   const items = rows.map(r => ({
//     id: r.id,
//     supervisorId: r.supervisorId,
//     nombre: [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno].filter(Boolean).join(' ') || `Supervisor #${r.supervisorId}`,
//     idFirebase: r.supervisor.user?.idFirebase ?? '',
//   }));

//   res.setHeader('Cache-Control', 'no-store');
//   res.status(200).json(items);
// });

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); res.status(405).end(); return; }

  const { fecha, turno } = req.query as { fecha?: string; turno?: string };
  if (!fecha || !turno) { res.status(400).json({ error: 'fecha y turno son requeridos' }); return; }

  const t = parseTurno5(turno);
  const start = ymdToLocalMidnight(fecha);           // 00:00 CDMX → UTC
  const end   = ymdToLocalMidnight(addDaysLocal(fecha, 1)); // 00:00 CDMX del día sig. → UTC

  const rows = await prisma.turnoProgramado.findMany({
    where: {
      turno: t as any,
      fecha: { gte: start, lt: end },   // ← clave del fix
    },
    include: { supervisor: { include: { user: true } } },
    orderBy: { supervisorId: 'asc' }
  });

  const items = rows.map(r => ({
    id: r.id,
    supervisorId: r.supervisorId,
    nombre: [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno].filter(Boolean).join(' ') || `Supervisor #${r.supervisorId}`,
    idFirebase: r.supervisor.user?.idFirebase ?? '',
  }));

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(items);
});
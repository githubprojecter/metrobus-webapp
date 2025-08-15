// pages/api/coordinador/turnos/list.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurno5, ymdToLocalMidnight, addDaysLocal, ymdLocal } from '@/lib/turnos';

function localHourMX(date = new Date()): number {
  return Number(new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    hour: '2-digit', hour12: false
  }).format(date));
}

function dayRangeLocal(fechaYMD: string) {
  const start = ymdToLocalMidnight(fechaYMD);                        // 00:00 CDMX → UTC
  const end = ymdToLocalMidnight(addDaysLocal(fechaYMD, 1));         // 00:00 CDMX del día sig. → UTC
  return { start, end };
}

function dayRangeUTC(fechaYMD: string) {
  const start = new Date(`${fechaYMD}T00:00:00.000Z`);               // 00:00 UTC exacta
  // sumar 1 día en UTC
  const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
  return { start, end };
}

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); res.status(405).end(); return; }

  const { fecha, turno } = req.query as { fecha?: string; turno?: string };
  if (!fecha || !turno) { res.status(400).json({ error: 'fecha y turno son requeridos' }); return; }

  const t = parseTurno5(turno);

  // 0) Tu comportamiento original: igualdad exacta con medianoche CDMX→UTC
  const eqLocal = ymdToLocalMidnight(fecha);
  let rows = await prisma.turnoProgramado.findMany({
    where: { turno: t as any, fecha: eqLocal },
    include: { supervisor: { include: { user: true } } },
    orderBy: { supervisorId: 'asc' }
  });

  // 1) Fallback: ventana por rango usando medianoche CDMX
  if (!rows.length) {
    const { start, end } = dayRangeLocal(fecha);
    rows = await prisma.turnoProgramado.findMany({
      where: { turno: t as any, fecha: { gte: start, lt: end } },
      include: { supervisor: { include: { user: true } } },
      orderBy: { supervisorId: 'asc' }
    });
  }

  // 2) Fallback: ventana por rango usando medianoche UTC
  if (!rows.length) {
    const { start, end } = dayRangeUTC(fecha);
    rows = await prisma.turnoProgramado.findMany({
      where: { turno: t as any, fecha: { gte: start, lt: end } },
      include: { supervisor: { include: { user: true } } },
      orderBy: { supervisorId: 'asc' }
    });
  }

  // 3) Fallback T4 de madrugada: usar día anterior (medianoche UTC)
  const isEarlyForT4 = t === 'T4' && localHourMX() < 2 && fecha === ymdLocal();
  if (!rows.length && isEarlyForT4) {
    const prev = addDaysLocal(fecha, -1);
    const { start, end } = dayRangeUTC(prev);
    rows = await prisma.turnoProgramado.findMany({
      where: { turno: t as any, fecha: { gte: start, lt: end } },
      include: { supervisor: { include: { user: true } } },
      orderBy: { supervisorId: 'asc' }
    });
  }

  const items = rows.map(r => ({
    id: r.id,
    supervisorId: r.supervisorId, // ← numérico
    nombre: [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno]
      .filter(Boolean).join(' ') || `Supervisor #${r.supervisorId}`,
    idFirebase: r.supervisor.user?.idFirebase ?? '',
  }));

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(items);
});

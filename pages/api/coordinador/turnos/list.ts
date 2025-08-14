// pages/api/coordinador/turnos/list.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { parseTurno5, ymdToLocalMidnight, addDaysLocal, ymdLocal } from '@/lib/turnos';

function localHourMX(date = new Date()): number {
  return Number(new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City', hour: '2-digit', hour12: false
  }).format(date));
}

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); res.status(405).end(); return; }

  const { fecha, turno } = req.query as { fecha?: string; turno?: string };
  if (!fecha || !turno) { res.status(400).json({ error: 'fecha y turno son requeridos' }); return; }

  const t = parseTurno5(turno);
  const fechaLocalMidnight = ymdToLocalMidnight(fecha);                // 00:00 CDMX → UTC ~ 06:00Z
  const fechaUtcMidnight   = new Date(`${fecha}T00:00:00.000Z`);       // 00:00 UTC exacta

  // 1) Comportamiento actual (se conserva)
  let rows = await prisma.turnoProgramado.findMany({
    where: { turno: t as any, fecha: fechaLocalMidnight },
    include: { supervisor: { include: { user: true } } },
    orderBy: { supervisorId: 'asc' }
  });

  // 2) Fallback: si no hubo coincidencia con 00:00 CDMX→UTC, intenta 00:00 UTC
  if (!rows.length) {
    rows = await prisma.turnoProgramado.findMany({
      where: { turno: t as any, fecha: fechaUtcMidnight },
      include: { supervisor: { include: { user: true } } },
      orderBy: { supervisorId: 'asc' }
    });
  }

  // 3) Fallback T4 de madrugada: usa día anterior (medianoche UTC)
  const isEarlyForT4 = t === 'T4' && localHourMX() < 2 && fecha === ymdLocal();
  if (!rows.length && isEarlyForT4) {
    const prev = addDaysLocal(fecha, -1);
    const prevUtcMidnight = new Date(`${prev}T00:00:00.000Z`);
    rows = await prisma.turnoProgramado.findMany({
      where: { turno: t as any, fecha: prevUtcMidnight },
      include: { supervisor: { include: { user: true } } },
      orderBy: { supervisorId: 'asc' }
    });
  }

  const items = rows.map(r => ({
    id: r.id,
    supervisorId: r.supervisorId,
    nombre: [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno]
      .filter(Boolean).join(' ') || `Supervisor #${r.supervisorId}`,
    idFirebase: r.supervisor.user?.idFirebase ?? '',
  }));

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(items);
});

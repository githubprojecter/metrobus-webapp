// metrobus-webapp/pages/api/supervisor/turno/en-curso.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import {
  isNowInTurno,
  // currentTurno5,
  activeTurnos,
  anchorDateForTurno,
  type Turno5,
} from '@/lib/turnos';

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  // console.log('[TURNOS/EN-CURSO] Authorization header:', req.headers.authorization);

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end();
    return;
  }

  // 1) Supervisor desde el userRoleId (inyectado por requireRole)
  const sup = await prisma.supervisor.findUnique({
    where: { userRoleId: req.userRoleId! },
    select: { id: true },
  });
  if (!sup) {
    res.status(404).json({ inTurno: false, turno: null, effDate: null });
    return;
  }
  console.log(sup)

  // console.log('[TURNOS/EN-CURSO] userRoleId detectado:', req.userRoleId);

  // 2) ¿qué turno está activo *ahora*?
  const now = new Date();
  const activos = activeTurnos(now); // Turno5[] // 'T1'..'T5' | null

  console.log(now)
  console.log(activos)

  if (!activos.length) {
    const eff = anchorDateForTurno(now, 'T4'); // solo para fecha
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
      inTurno: false,
      turno: null,
      effDate: eff.toISOString().slice(0, 10),
    });
    return;
  }

  // probar cada turno activo hasta encontrar uno programado
  let encontrado: { turno: Turno5; effDate: Date } | null = null;

  for (const t of activos) {
    const effDay = anchorDateForTurno(now, t);
    const asg = await prisma.turnoProgramado.findFirst({
      where: { supervisorId: sup.id, fecha: effDay, turno: t as any },
      select: { id: true },
    });
    if (asg) {
      encontrado = { turno: t, effDate: effDay };
      break;
    }
  }   

// responder según el resultado
res.setHeader('Cache-Control', 'no-store');
if (encontrado) {
  res.status(200).json({
    inTurno: true,
    turno: encontrado.turno,
    effDate: encontrado.effDate.toISOString().slice(0, 10),
  });
} else {
  // no tiene ninguno de los turnos activos programado hoy
  // (usa el 1º activo solo para devolver effDate y turno informativos)
  const t0 = activos[0];
  const eff0 = anchorDateForTurno(now, t0);
  res.status(200).json({
    inTurno: false,
    turno: t0,
    effDate: eff0.toISOString().slice(0, 10),
  });
}
});

// metrobus-webapp/pages/api/coordinador/turnos/en-turno.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import {
  activeTurnos,
  anchorDateForTurno,
  parseTurno5,
  type Turno5,
} from '@/lib/turnos';

type SupervisorInfo = { idFirebase: string; nombre: string; telefono?: string };

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow','GET');
    res.status(405).end();
    return;
  }

  // 1) Turnos a consultar
  const qTurno = (req.query.turno as string | undefined) || '';
  const qTurnos = (req.query.turnos as string | undefined) || '';
  let turnos: Turno5[] = [];

  if (qTurnos) {
    turnos = qTurnos.split(',').map(s => s.trim()).filter(Boolean).map(parseTurno5);
  } else if (qTurno) {
    turnos = [parseTurno5(qTurno)];
  } else {
    turnos = activeTurnos(new Date()); // todos los activos ahora
  }

  if (turnos.length === 0) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json([] as SupervisorInfo[]);
    return;
  }

  // 2) OR de (fecha, turno) para cada turno activo
  const now = new Date();
  const ors = turnos.map(t => ({
    turno: t as any,
    fecha: anchorDateForTurno(now, t),
  }));

  // 3) Traer ids de supervisor asignados
  const asignados = await prisma.turnoProgramado.findMany({
    where: { OR: ors },
    select: { supervisorId: true },
  });
  const supIds = Array.from(new Set(asignados.map(a => a.supervisorId)));
  if (supIds.length === 0) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json([] as SupervisorInfo[]);
    return;
  }

  // 4) Resolver userRoleId por supervisor
  const supervisores = await prisma.supervisor.findMany({
    where: { id: { in: supIds } },
    select: { id: true, userRoleId: true },
  });
  const userRoleIds = Array.from(new Set(supervisores.map(s => s.userRoleId)));

  // 5) Datos de UserRole (idFirebase, nombre, telefono)
  const roles = await prisma.userRole.findMany({
    where: { id: { in: userRoleIds } },
    select: { id: true, idFirebase: true, nombre: true, telefono: true },
  });
  const roleById = new Map(roles.map(r => [r.id, r]));

  // 6) Armar respuesta única por supervisor
  const result: SupervisorInfo[] = [];
  for (const s of supervisores) {
    const r = roleById.get(s.userRoleId);
    if (!r?.idFirebase) continue;
    result.push({
      idFirebase: r.idFirebase,
      nombre: r.nombre ?? 'Supervisor',
      telefono: r.telefono ?? undefined,
    });
  }

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(result);
});

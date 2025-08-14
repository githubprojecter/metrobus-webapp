// pages/api/reportes/jornada.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { ymdLocal, ymdToLocalMidnight, addDaysLocal, MX_TZ } from '@/lib/turnos';

type JornadaDTO = {
  operadores: { id: number; unidad: string; km: number }[];
  incidentes: { status: string; count: number }[];
  mantenimiento: string;
};

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<JornadaDTO>
): Promise<void> => {
  console.log('[JORNADA] petición de userRoleId:', req.userRoleId, 'query:', req.query);

  if (req.method !== 'GET') {
    res.setHeader('Allow','GET');
    res.status(405).end();
    return;
  }
  const period = req.query.period as string;
  const now = new Date();
  let start: Date;
  switch (period) {
    case 'day': {
      const ymd = ymdLocal(now, MX_TZ);
      start = ymdToLocalMidnight(ymd);
      break;
    }
    case 'week': {
      const ymd = addDaysLocal(ymdLocal(now, MX_TZ), -7);
      start = ymdToLocalMidnight(ymd);
      break;
    }
    case 'month': {
      const base = new Date(`${ymdLocal(now, MX_TZ)}T00:00:00.000Z`);
      base.setUTCMonth(base.getUTCMonth() - 1);
      const ymd = ymdLocal(base, MX_TZ);
      start = ymdToLocalMidnight(ymd);
      break;
    }
    default:
      start = new Date(0);
  }

  // 1) Operadores en turno y km
  const registros = await prisma.registroSalidaUnidad.findMany({
    where: { fechaSalida: { gte: start } },
    include: { operador: { select: { id: true, unidadAsignada: true } } },
  });
  const opMap: Record<number, { id: number; unidad: string; km: number }> = {};
  registros.forEach(({ operador, kmInicial, kmFinal }) => {
    const id = operador.id;
    if (!opMap[id]) opMap[id] = { id, unidad: operador.unidadAsignada ?? '', km: 0 };
    if (kmInicial != null && kmFinal != null) {
      opMap[id].km += Math.max(0, kmFinal - kmInicial);
    }
  });

  // 2) Incidentes
  const group = await prisma.botonPanico.groupBy({
    by: ['atendido'],
    where: { timestamp: { gte: start } },
    _count: { _all: true },
  });

  const mapStatus = (atendido: boolean) =>
    atendido ? 'Finalizado' : 'Alertado';

  res.status(200).json({
    operadores: Object.values(opMap),
    incidentes: group.map(g => ({ status: mapStatus(g.atendido), count: g._count._all })),
    mantenimiento: 'OK',
  });
});

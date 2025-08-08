// pages/api/reportes/jornada.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

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
    case 'day':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'week':
      start = new Date(now);
      start.setDate(now.getDate() - 7);
      break;
    case 'month':
      start = new Date(now);
      start.setMonth(now.getMonth() - 1);
      break;
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
    const km = (kmFinal ?? kmInicial) - kmInicial;
    if (!opMap[operador.id]) {
      opMap[operador.id] = {
        id: operador.id,
        unidad: operador.unidadAsignada ?? '–',
        km,
      };
    } else {
      opMap[operador.id].km += km;
    }
  });

  // 2) Incidentes por estatus
  const group = await prisma.botonPanico.groupBy({
    by: ['atendido'],
    where: { timestamp: { gte: start } },
    _count: { _all: true },
  });
  const incidentes = group.map(g => ({
    status: g.atendido ? 'Finalizado' : 'Alertado',
    count: g._count._all,
  }));

  res.status(200).json({
    operadores: Object.values(opMap),
    incidentes,
    mantenimiento: 'Aquí van las fichas de mantenimiento',
  });
});

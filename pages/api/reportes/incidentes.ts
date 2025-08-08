// pages/api/reportes/incidentes.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type IncDTO = { status: string; count: number };

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<IncDTO[]>
): Promise<void> => {
  console.log('[INCIDENTES] petición de userRoleId:', req.userRoleId, 'query:', req.query);

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

  const group = await prisma.botonPanico.groupBy({
    by: ['atendido'],
    where: { timestamp: { gte: start } },
    _count: { _all: true },
  });

  const mapStatus = (atendido: boolean) =>
    atendido ? 'Finalizado' : 'Alertado';

  const result: IncDTO[] = group.map(g => ({
    status: mapStatus(g.atendido),
    count: g._count._all,
  }));

  res.status(200).json(result);
});

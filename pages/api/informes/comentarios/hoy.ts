// pages/api/informes/comentarios/hoy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

export default requireRole(['Coordinador','Dirección','Supervisor'])(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Limites del día en CDMX
  const tz = 'America/Mexico_City';
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);
  // 00:00 y 23:59:59 del día en CDMX (aproximación simple; si usas zonedTimeToUtc mejor)
  start.setHours(0,0,0,0);
  end.setHours(23,59,59,999);

  const rows = await prisma.comentario.findMany({
    where: { createdAt: { gte: start, lte: end } },
    orderBy: { id: 'desc' },
    include: {
      fotos: true,
      supervisor: { include: { user: true } },
    },
    take: 100, // ajusta si quieres
  });

  res.status(200).json(rows);
});

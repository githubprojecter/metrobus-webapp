// pages/api/informes/comentarios/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

export default requireRole(['Coordinador','Dirección','Supervisor'])(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { nombre, codigo, from, to, take } = req.query as Record<string, string | undefined>;
  console.log(req.query)

  const where: any = {};
  const andFilters: any[] = [];

  // --- Nombre (1..n palabras). Además hacemos OR con codigo contains(nombre)
  if (nombre && nombre.trim()) {
    const parts = nombre.trim().split(/\s+/).filter(Boolean);

    andFilters.push({
      OR: [
        {
          supervisor: {
            user: {
              AND: parts.map((p) => ({
                OR: [
                  { nombre:          { contains: p } },
                  { apellidoPaterno: { contains: p } },
                  { apellidoMaterno: { contains: p } },
                ],
              })),
            },
          },
        },
        // si "nombre" realmente es un código, esto lo pesca
        { supervisor: { codigo: { contains: nombre.trim() } } },
      ],
    });
  }

  // --- Código (único)
  if (codigo && codigo.trim()) {
    andFilters.push({ supervisor: { codigo: codigo.trim() } });
  }

  // --- Rango
  if (from || to) {
    where.createdAt = {};
    if (from) where.createdAt.gte = new Date(from);
    if (to)   where.createdAt.lte = new Date(to);
  }

  if (andFilters.length) where.AND = andFilters;

  const rows = await prisma.comentario.findMany({
    where,
    orderBy: { id: 'desc' },
    take: Number(take ?? 200),
    include: {
      fotos: true,
      supervisor: { include: { user: true } },
    },
  });

  return res.status(200).json(rows);
});

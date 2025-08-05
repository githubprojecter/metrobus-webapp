// pages/api/panico.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Role } from '@/pages/generated/prisma';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const uid = (req as any).uid as string;
  const userWithOperador = await prisma.userRole.findUnique({
    where: { idFirebase: uid },
    include: { operador: true },
  });

  if (!userWithOperador?.operador) {
    return res.status(404).json({ error: 'Operador no encontrado' });
  }

  const nuevo = await prisma.botonPanico.create({
    data: {
      operadorId: userWithOperador.operador.id,
      motivo: req.body.motivo ?? null,
    },
  });
  return res.status(201).json(nuevo);
};

export default requireRole([ 'Operador' ] as Role[])(handler);

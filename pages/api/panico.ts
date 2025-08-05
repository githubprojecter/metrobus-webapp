// pages/api/panico.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

const handler = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;           // ← ya no devolvemos el res
  }

  const uid = req.uid;
  const record = await prisma.userRole.findUnique({
    where: { idFirebase: uid },
    include: { operador: true },
  });

  if (!record?.operador) {
    res.status(404).json({ error: 'Operador no encontrado' });
    return;           // ← idem
  }

  const { motivo } = req.body as { motivo?: string };

  const nuevo = await prisma.botonPanico.create({
    data: {
      operadorId: record.operador.id,
      motivo: motivo ?? null,
    },
  });

  res.status(201).json(nuevo);  // ← no devolvemos el resultado
  // y la función termina retornando void
};

export default requireRole(['Operador'])(handler);

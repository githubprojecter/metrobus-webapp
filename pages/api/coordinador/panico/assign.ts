// pages/api/coordinador/panico/assign.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow','POST');
    res.status(405).end();
    return;
  }
  const { panicoId, supervisorId } = req.body as { panicoId: number; supervisorId: number };
  // Crear asignación
  await prisma.incidenteAsignado.create({
    data: { incidenteId: panicoId, supervisorId },
  });
  res.status(200).json({ message: 'Supervisor asignado' });
});

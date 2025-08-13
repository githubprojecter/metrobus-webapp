import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  const { fecha, turno } = req.query as { fecha?: string; turno?: string };
  if (!fecha || !turno) return res.status(400).json({ error: 'fecha y turno requeridos' });

  const start = new Date(`${fecha}T00:00:00.000Z`);
  const rows = await prisma.turnoProgramado.findMany({
    where: { fecha: start, turno: turno as any },
    include: { supervisor: { include: { user: true } } },
  });
  res.status(200).json(rows);
});

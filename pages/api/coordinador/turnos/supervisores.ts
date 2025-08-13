import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (_req: NextApiRequestWithUser, res: NextApiResponse) => {
  const rows = await prisma.supervisor.findMany({
    include: { user: true }
  });
  const out = rows.map(r => ({
    id: r.id,
    nombre: [r.user?.nombre, r.user?.apellidoPaterno, r.user?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor',
    idFirebase: r.user?.idFirebase ?? '',
    telefono: r.user?.telefono ?? null,
  }));
  res.status(200).json(out);
});

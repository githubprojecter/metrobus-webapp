// pages/api/coordinador/turnos/supervisores.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET'); res.status(405).end(); return;
  }

  const sup = await prisma.supervisor.findMany({
    select:{
      id:true,
      user: {
        select: {
          idFirebase: true,
          nombre: true,
          apellidoPaterno: true,
          apellidoMaterno: true,
          telefono: true
        }
      },
    },
    orderBy: { id: 'asc' }
  });

  // console.log(sup)
  const items = sup.map(s => ({
    id: s.id,
    nombre: [s.user?.nombre, s.user?.apellidoPaterno, s.user?.apellidoMaterno].filter(Boolean).join(' ') || `Supervisor #${s.id}`,
    idFirebase: s.user.idFirebase,
    telefono: s.user?.telefono ?? null
  }));
  
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(items);
});

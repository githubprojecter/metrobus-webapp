// pages/api/coordinador/supervisores/locations.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type SupLoc = { id: number; nombre: string; latitud: number; longitud: number };

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<SupLoc[]>
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow','GET');
    res.status(405).end();
    return;
  }
  // Tomamos última ubicación de cada supervisor
  const locs = await prisma.ubicacionSupervisor.findMany({
    orderBy: { timestamp: 'desc' },
    distinct: ['supervisorId'],
    include: {
     supervisor: {
       select: {
         id: true,
         user: {
           select: {
             idFirebase: true
           }
         }
       }
     }
   },
  });
  // Si quieres traer nombre de Firebase, conviene cachearlo; aquí lo omitimos y usamos id
  const result = locs.map(l => ({
    id: l.supervisorId,
    nombre: `Supervisor ${l.supervisorId}`,
    latitud: l.latitud,
    longitud: l.longitud,
  }));
  res.status(200).json(result);
});

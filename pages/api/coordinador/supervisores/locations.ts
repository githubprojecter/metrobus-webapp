// pages/api/coordinador/supervisores/locations.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type SupLoc = { id: number; nombre: string; latitud: number; longitud: number };

export default requireRole(['Supervisor','Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<SupLoc[] | { success: boolean }>
): Promise<void> => {
  const { method, role, userRoleId } = req;

  // 1) POST /api/coordinador/supervisores/locations
  if (method === 'POST') {
    if (role !== 'Supervisor') {
      res.status(403).json({ success: false });
      return;
    }

    const { latitud, longitud } = req.body as {
      latitud: number;
      longitud: number;
    };
    if (latitud == null || longitud == null) {
      res.status(400).json({ success: false });
      return;
    }

    // Crea la ubicación del supervisor
    await prisma.ubicacionSupervisor.create({
      data: {
        supervisorId: userRoleId,
        latitud,
        longitud,
      },
    });

    res.status(201).json({ success: true });
    return;
  }

  // 2) GET  /api/coordinador/supervisores/locations
  if (method === 'GET') {
    if (role !== 'Coordinador') {
      res.status(403).json([]);
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
              select: { nombre: true, apellidoPaterno: true, apellidoMaterno: true },
            },
          },
        },
      },
    });

    const result: SupLoc[] = locs.map((l) => ({
      id: l.supervisorId,
      nombre: `${l.supervisor.user.nombre} ${l.supervisor.user.apellidoPaterno}`,
      latitud: l.latitud,
      longitud: l.longitud,
    }));

    res.status(200).json(result);
    return;
  }

  // 3) Otros métodos no permitidos
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end();
});

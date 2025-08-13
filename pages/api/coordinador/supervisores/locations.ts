// pages/api/coordinador/supervisores/locations.ts

import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';


type SupLoc = { id: number; nombre: string; latitud: number; longitud: number, assignedIncidentId: number | null; };

export default requireRole(['Supervisor','Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<SupLoc[] | { success: boolean; error?: string }>
): Promise<void> => {
  const { method, role, userRoleId } = req;

  // 1) POST /api/coordinador/supervisores/locations
  if (method === 'POST') {
    if (role !== 'Supervisor') {
      res.status(403).json({ success: false, error: 'Solo para supervisores' });
      return;
    }

    const { latitud, longitud } = req.body as {
      latitud?: number;
      longitud?: number;
    };

    if (latitud == null || longitud == null) {
      res.status(400).json({ success: false, error: 'Faltan latitud o longitud' });
      return;
    }

    try {
      // 1.1) Busca el registro de Supervisor para este userRoleId
      const sup = await prisma.supervisor.findUnique({
        where: { userRoleId },
      });
      if (!sup) {
        res.status(404).json({ success: false, error: 'Supervisor no encontrado' });
        return;
      }

      // 1.2) Crea la ubicación usando sup.id
      const ubic = await prisma.ubicacionSupervisor.create({
        data: {
          supervisorId: sup.id,
          latitud,
          longitud,
        },
      });
      console.log('[LOC POST] creado en BD:', ubic);

      // 1.3) Emite evento en Pusher para canal privado de este supervisor
  

      res.status(201).json({ success: true });
    } catch (err: any) {
      console.error('[LOC POST] error:', err);
      res.status(500).json({ success: false, error: err.message });
    }
    return;
  }

  // 2) GET  /api/coordinador/supervisores/locations
  if (method === 'GET') {
    if (role !== 'Coordinador') {
      res.status(403).json([]);
      return;
    }

    const locs = await prisma.ubicacionSupervisor.findMany({
      orderBy: { timestamp: 'desc' },
      distinct: ['supervisorId'],
      include: {
        supervisor: {
          select: {
            id: true,
            user: {
              select: { nombre: true, apellidoPaterno: true },
            },
          },
        },
      },
    });

    const result = await Promise.all(locs.map(async (l) => {
        // Busco si tiene asignación activa
        const asig = await prisma.incidenteAsignado.findFirst({
          where: {
            supervisorId: l.supervisorId,
            // incidente no atendido
            panic: { atendido: false },
          },
          select: { id: true },
          orderBy: { fechaAsignacion: 'desc' },
        });

      return {
        id: l.supervisorId,
        nombre: `${l.supervisor.user.nombre} ${l.supervisor.user.apellidoPaterno}`,
        latitud: l.latitud,
        longitud: l.longitud,
        assignedIncidentId: asig?.id ?? null,    // ← nuevo campo
      };
    }));

    res.status(200).json(result);
  }

  // 3) Otros métodos
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end();
});

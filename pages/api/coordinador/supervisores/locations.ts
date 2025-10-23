// pages/api/coordinador/supervisores/locations.ts

import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type SupLoc = {
  id: number;                 // supervisorId
  nombre: string;
  latitud: number;
  longitud: number;
  timestamp: string | Date;
  assignedIncidentId: number | null;
};

type PostBodySupervisor = {
  latitud?: number;
  longitud?: number;
  timestamp?: number;         // opcional (ms epoch)
};

type PostBodyCoordinador = {
  supervisorId?: number;      // requerido si postea Coordinador
  latitud?: number;
  longitud?: number;
  timestamp?: number;         // opcional (ms epoch)
};

export default requireRole(['Supervisor','Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<SupLoc[] | { success: boolean; error?: string }>
): Promise<void> => {
  const { method, role, userRoleId } = req;

  // =========================
  // POST /api/coordinador/supervisores/locations
  // Guarda ubicación:
  // - Si role === 'Supervisor' usa userRoleId para resolver su supervisorId
  // - Si role === 'Coordinador' requiere supervisorId en body
  // =========================
  if (method === 'POST') {
    const { latitud, longitud, timestamp } = req.body as PostBodySupervisor & PostBodyCoordinador;

    if (latitud == null || longitud == null) {
      res.status(400).json({ success: false, error: 'Faltan latitud o longitud' });
      return;
    }

    try {
      let supervisorId: number | null = null;

      if (role === 'Supervisor') {
        const sup = await prisma.supervisor.findUnique({ where: { userRoleId } });
        if (!sup) {
          res.status(404).json({ success: false, error: 'Supervisor no encontrado' });
          return;
        }
        supervisorId = sup.id;
      } else if (role === 'Coordinador') {
        const { supervisorId: supIdFromBody } = req.body as PostBodyCoordinador;
        if (!supIdFromBody) {
          res.status(400).json({ success: false, error: 'supervisorId es requerido (Coordinador)' });
          return;
        }
        const exists = await prisma.supervisor.findUnique({ where: { id: supIdFromBody } });
        if (!exists) {
          res.status(404).json({ success: false, error: 'Supervisor no existe' });
          return;
        }
        supervisorId = supIdFromBody;
      }

      // crea registro histórico (con timestamp si vino desde evento pusher)
      const ubic = await prisma.ubicacionSupervisor.create({
        data: {
          supervisorId: supervisorId!,
          latitud,
          longitud,
          // Prisma usa Date; si llega timestamp (ms), conviértelo, si no now()
          timestamp: typeof timestamp === 'number' ? new Date(timestamp) : new Date(),
        },
      });

      // (Opcional) emitir evento pusher si lo necesitas — lo dejé fuera para no duplicar tu flujo.

      res.status(201).json({ success: true });
      return;
    } catch (err: any) {
      console.error('[LOC POST] error:', err);
      res.status(500).json({ success: false, error: err.message });
      return;
    }
  }

  // =========================
  // GET /api/coordinador/supervisores/locations
  // Devuelve ÚLTIMA ubicación por supervisor (1 por c/u)
  // =========================
  if (method === 'GET') {
    if (role !== 'Coordinador') {
      res.status(403).json([]);
      return;
    }

    try {
      // 1) Para cada supervisorId, obtenemos el MAX(timestamp)
      const groups = await prisma.ubicacionSupervisor.groupBy({
        by: ['supervisorId'],
        _max: { timestamp: true },
      });

      if (!groups.length) {
        res.status(200).json([]);
        return;
      }

      // 2) Traemos esos registros (supervisorId, timestamp=max) en un solo query
      const latestRows = await prisma.ubicacionSupervisor.findMany({
        where: {
          OR: groups.map(g => ({
            supervisorId: g.supervisorId,
            timestamp: g._max.timestamp ?? undefined,
          })),
        },
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

      // 3) Enriquecer con assignedIncidentId
      //    (Si te preocupa performance, podemos refactorizar a un LEFT JOIN raw, pero por ahora mantenemos claridad)
      const result: SupLoc[] = [];
      for (const l of latestRows) {
        const asig = await prisma.incidenteAsignado.findFirst({
          where: {
            supervisorId: l.supervisorId,
            panic: { atendido: false },
          },
          select: { id: true },
          orderBy: { fechaAsignacion: 'desc' },
        });

        result.push({
          id: l.supervisorId,
          nombre: `${l.supervisor.user.nombre} ${l.supervisor.user.apellidoPaterno}`,
          latitud: l.latitud,
          longitud: l.longitud,
          timestamp: l.timestamp,
          assignedIncidentId: asig?.id ?? null,
        });
      }

      res.status(200).json(result);
      return;
    } catch (err: any) {
      console.error('[LOC GET] error:', err);
      res.status(500).json([]);
      return;
    }
  }

  // Otros métodos
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end();
});

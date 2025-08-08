// pages/api/report/active.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
    // Solo GET
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res
        .status(405)
        .json({ error: `Método ${req.method} no permitido` });
    }

    // 1) Resolvemos el ID real de Supervisor
    const supervisorRecord = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId },
    });
    if (!supervisorRecord) {
      return res
        .status(403)
        .json({ error: 'Supervisor no registrado para este usuario' });
    }

    try {
      // 2) Buscamos el reporte “En progreso” para ese supervisor.id
      const report = await prisma.reporteIncidente.findFirst({
        where: {
          supervisorId: supervisorRecord.id,
          estado: 'En progreso',
        },
        include: {
          incidenteAsignado: {
            select: {
              id: true,
              latitud: true,
              longitud: true,
              panic: {
                select: {
                  motivo: true,
                  timestamp: true,
                  operador: {
                    select: {
                      unidadAsignada: true,
                      rutaAsignada: true,
                      user: {
                        select: {
                          nombre: true,
                          apellidoPaterno: true,
                          apellidoMaterno: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!report) {
        return res.status(404).json({ error: 'No hay reporte activo' });
      }

      // 3) Devolvemos el reporte completo
      return res.status(200).json(report);
    } catch (error: any) {
      console.error('[API /report/active]', error);
      return res
        .status(500)
        .json({ error: 'Error al obtener reporte activo' });
    }
  }
);

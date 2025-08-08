// pages/api/report/start.ts

import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(
  async (
    req: NextApiRequestWithUser,
    res: NextApiResponse
  ): Promise<void> => {
    // 1) Sólo POST
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res
        .status(405)
        .json({ error: `Método ${req.method} no permitido` });
    }

    // 2) Leemos el incidenteAsignadoId del body
    const { incidenteAsignadoId } = req.body as {
      incidenteAsignadoId?: number;
    };
    if (!incidenteAsignadoId) {
      return res
        .status(400)
        .json({ error: 'Falta el campo incidenteAsignadoId en el body' });
    }

    try {
      // 3) Buscamos el registro de Supervisor asociado al userRoleId
      const supervisorRecord = await prisma.supervisor.findUnique({
        where: { userRoleId: req.userRoleId },
      });
      if (!supervisorRecord) {
        return res
          .status(403)
          .json({ error: 'Supervisor no registrado para este usuario' });
      }

      // 4) Creamos el reporte usando el id real de Supervisor
      const reporte = await prisma.reporteIncidente.create({
        data: {
          supervisorId: supervisorRecord.id,
          incidenteAsignadoId,
          estado: 'En progreso',
          descripcion: '',
          ambulancia: false,
          policia: false,
          heridos: false,
        },
      });

      return res.status(201).json({ success: true, reporte });
    } catch (error: any) {
      console.error('[START REPORT]', error);
      return res
        .status(500)
        .json({ error: 'Error al iniciar el reporte' });
    }
  }
);

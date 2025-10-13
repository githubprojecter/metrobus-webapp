// pages/api/report/start.ts (tu versión con los nombres correctos)
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  const { incidenteAsignadoId } = (req.body || {}) as { incidenteAsignadoId?: number };

  if (!incidenteAsignadoId || Number.isNaN(Number(incidenteAsignadoId))) {
    return res.status(400).json({ error: 'Falta o es inválido incidenteAsignadoId' });
  }

  try {
    const supervisor = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId },
      select: { id: true },
    });
    if (!supervisor) return res.status(403).json({ error: 'Supervisor no registrado para este usuario' });

    const asignacion = await prisma.incidenteAsignado.findUnique({
      where: { id: Number(incidenteAsignadoId) },      // 👈 IncidenteAsignado.id
      select: { id: true, supervisorId: true },
    });
    if (!asignacion) return res.status(404).json({ error: 'No existe la asignación indicada' });
    if (asignacion.supervisorId !== supervisor.id) {
      return res.status(403).json({ error: 'La asignación no pertenece a este supervisor' });
    }

    const existente = await prisma.reporteIncidente.findFirst({
      where: { incidenteAsignadoId: asignacion.id },
      orderBy: { id: 'desc' },
    });
    if (existente) return res.status(200).json({ ok: true, reporte: existente });

    const reporte = await prisma.reporteIncidente.create({
      data: {
        incidenteAsignadoId: asignacion.id,
        supervisorId: supervisor.id,
      },
    });

    return res.status(201).json({ ok: true, reporte });
  } catch (error: any) {
    console.error('[report/start] error', error);
    return res.status(500).json({ error: 'Error al iniciar el reporte' });
  }
});

// pages/api/reportes/asignados.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  // Supervisor del usuario actual
  const sup = await prisma.supervisor.findUnique({
    where: { userRoleId: req.userRoleId },
    include: { user: true },
  });
  if (!sup) return res.status(403).json({ error: 'Supervisor no encontrado' });

  // Todas las asignaciones con botón de pánico NO atendido
  const asign = await prisma.incidenteAsignado.findMany({
    where: { supervisorId: sup.id, panic: { atendido: false } },
    orderBy: { fechaAsignacion: 'desc' },
    include: {
      reporte: true,
      panic: {
        include: {
          operador: { include: { user: true } },
        },
      },
    },
  });

  const items = asign.map(a => ({
    idIncidente: a.id,                      // IncidenteAsignado.id
    asignadoId: a.supervisorId,             // supervisorId (legacy)
    titulo: a.reporte ? `#${a.id}` : 'Nueva incidencia',
    descripcion: 'Se te ha asignado asistir al siguiente operador',
    operadorNombre: [
      a.panic.operador.user.nombre,
      a.panic.operador.user.apellidoPaterno,
      a.panic.operador.user.apellidoMaterno,
    ].filter(Boolean).join(' '),
    latitud: a.latitud,
    longitud: a.longitud,
    reporteId: a.reporte?.id ?? null,
    timestamp: a.panic.timestamp.toISOString(),
    unidad: a.panic.operador.unidadAsignada,
    status: a.reporte ? 'En reporte' : 'Asignado',
  }));

  return res.status(200).json({ ok: true, items });
});

// pages/api/incidentes/asignado.ts
import type { NextApiResponse } from 'next'
import type { NextApiRequestWithUser } from '@/lib/requireRole'
import { requireRole } from '@/lib/requireRole'
import prisma from '@/lib/prisma'

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  // 0) Obtener el registro de Supervisor vinculado a este userRoleId
  const sup = await prisma.supervisor.findUnique({
    where: { userRoleId: req.userRoleId }
  })
  if (!sup) {
    res.status(403).json({ error: 'Supervisor no encontrado para este usuario' })
    return
  }

  // 1) Buscamos la última asignación de este supervisor (usando sup.id),
  //    e incluimos 'reporte' para diferenciar estado
  const asign = await prisma.incidenteAsignado.findFirst({
    where: { supervisorId: sup.id },
    orderBy: { fechaAsignacion: 'desc' },
    include: { reporte: true },
  })

  if (!asign) {
    res.status(404).json({ error: 'Sin asignaciones' })
    return
  }

  // 2) Traemos la alerta original para datos de operador y detalles
  const panic = await prisma.botonPanico.findUnique({
    where: { id: asign.panicId },
    include: {
      operador: {
        include: {
          user: true,
        },
      },
    },
  })

  if (!panic) {
    res.status(404).json({ error: 'Alerta no encontrada' })
    return
  }

  // 3) Armamos el DTO con lat/lng, operador, unidad y un status
  res.status(200).json({
    id: asign.id,
    lat: asign.latitud,
    lng: asign.longitud,
    motivo: panic.motivo,
    timestamp: panic.timestamp.toISOString(),
    operador: `${panic.operador.user.nombre} ${panic.operador.user.apellidoPaterno} ${panic.operador.user.apellidoMaterno}`,
    unidad: panic.operador.unidadAsignada,
    status: asign.reporte ? 'En reporte' : 'Asignado',
  })
})

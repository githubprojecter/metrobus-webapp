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

  // 1) Buscamos la última asignación de este supervisor,
  //    solo si panic.atendido === false
  const asign = await prisma.incidenteAsignado.findFirst({
    where: {
      supervisorId: sup.id,
      panic: { atendido: false },            // ← filtramos aquí
    },
    orderBy: { fechaAsignacion: 'desc' },
    include: {
      reporte: true,
      panic: {
        include: {
          operador: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  })

  if (!asign) {
    // No hay asignaciones pendientes → 404 para que el front muestre "No tienes incidentes asignados"
    res.status(404).json({ error: 'Sin asignaciones' })
    return
  }

  // 2) Armamos el DTO con los datos que espera el front
  const { panic } = asign
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

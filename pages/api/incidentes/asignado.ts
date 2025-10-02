// pages/api/incidentes/asignado.ts
import type { NextApiResponse } from 'next'
import type { NextApiRequestWithUser } from '@/lib/requireRole'
import { requireRole } from '@/lib/requireRole'
import prisma from '@/lib/prisma'

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {

  // const authHeader = req.headers.authorization || ''
  // const masked = authHeader ? (authHeader.slice(0, 16) + '…') : '(sin Authorization)'
  // console.log('[asignado] Authorization header:', masked)
  // console.log('[asignado] user ctx ->', {
  //   uid: req.uid,
  //   role: req.role,
  //   userRoleId: req.userRoleId,
  // })

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
      panic: { atendido: false },
    },
    orderBy: { fechaAsignacion: 'desc' },
    include: {
      reporte: true,
      panic: {
        include: {
          operador: {
            include: { user: true },
          },
        },
      },
    },
  })

  if (!asign) {
    res.status(404).json({ ok:false, incidente: null, error: 'Aun no te han asignado algo' })
    return
  }
  // console.log(asign)

  // 2) Armamos el DTO LEGACY actual…
  const { panic } = asign
  const incidente = {
    idIncidente: asign.id,
    asignadoId: asign.supervisorId,
    titulo: 'Nueva incidencia',
    descripcion: 'Se te ha asignado asistir al siguiente operador',
    operadorNombre: `${panic.operador.user.nombre} ${panic.operador.user.apellidoPaterno} ${panic.operador.user.apellidoMaterno}`,
    latitud: asign.latitud,
    longitud: asign.longitud,
    reporteId: asign.reporte,
    timestamp: panic.timestamp.toISOString(),
    operador: `${panic.operador.user.nombre} ${panic.operador.user.apellidoPaterno} ${panic.operador.user.apellidoMaterno}`,
    unidad: panic.operador.unidadAsignada,
    status: asign.reporte ? 'En reporte' : 'Asignado',

  }
  // Respuesta normal (no se altera el comportamiento existente)
  res.status(200).json({ok:true, incidente})
})

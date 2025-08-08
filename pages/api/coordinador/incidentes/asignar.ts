// pages/api/coordinador/incidentes/asignar.ts
import type { NextApiResponse } from 'next'
import type { NextApiRequestWithUser } from '@/lib/requireRole'
import { requireRole } from '@/lib/requireRole'
import prisma from '@/lib/prisma'

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end()
    return
  }

  const { panicId, supervisorId } = req.body as {
    panicId?: number
    supervisorId?: number
  }

  if (!panicId || !supervisorId) {
    res.status(400).json({ error: 'Falta panicId o supervisorId' })
    return
  }

  // 1) Verificar que el supervisor no tenga ya una asignación sin reporte
  const existente = await prisma.incidenteAsignado.findFirst({
    where: {
      supervisorId,
      reporte: null,         // aún no ha iniciado reporte => activo
    },
  })
  if (existente) {
    res.status(400).json({ error: 'El supervisor ya tiene una asignación activa' })
    return
  }

  // 2) Recuperar la alerta para extraer lat/lng
  const panic = await prisma.botonPanico.findUnique({
    where: { id: panicId },
  })
  if (!panic) {
    res.status(404).json({ error: 'Alerta de pánico no encontrada' })
    return
  }

  // 3) Crear la asignación usando las coordenadas de la alerta
  try {
    const nuevo = await prisma.incidenteAsignado.create({
      data: {
        supervisorId,
        panicId,
        latitud: panic.latitud ?? 0,
        longitud: panic.longitud ?? 0,
      },
    })
    res.status(201).json({ success: true, incidentId: nuevo.id });
  } catch (err: any) {
    console.error('[ASIGNAR] error:', err)
    res.status(500).json({ error: err.message })
  }
})

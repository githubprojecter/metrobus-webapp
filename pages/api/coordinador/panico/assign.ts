// pages/api/coordinador/panico/assign.ts
import type { NextApiResponse } from 'next'
import type { NextApiRequestWithUser } from '@/lib/requireRole'
import { requireRole } from '@/lib/requireRole'
import prisma from '@/lib/prisma'

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    // Allow espera un array de métodos
    res.setHeader('Allow', ['POST'])
    res.status(405).end()
    return
  }

  const { panicoId, supervisorId } = req.body as {
    panicoId: number
    supervisorId: number
  }

  if (!panicoId || !supervisorId) {
    res.status(400).json({ error: 'Falta panicoId o supervisorId' })
    return
  }

  // 1) Obtenemos la alerta de pánico para extraer sus coordenadas
  const panic = await prisma.botonPanico.findUnique({
    where: { id: panicoId }
  })
  if (!panic) {
    res.status(404).json({ error: 'Alerta de pánico no encontrada' })
    return
  }

  // 2) Creamos la asignación usando el campo correcto `panicId`
  try {
    await prisma.incidenteAsignado.create({
      data: {
        supervisorId,
        panicId: panicoId,           // aquí mappeamos panicoId → panicId
        latitud: panic.latitud ?? 0,
        longitud: panic.longitud ?? 0,
      },
    })
    res.status(200).json({ message: 'Supervisor asignado' })
  } catch (err: any) {
    console.error('[ASSIGN PANICO] error:', err)
    res.status(500).json({ error: err.message })
  }
})

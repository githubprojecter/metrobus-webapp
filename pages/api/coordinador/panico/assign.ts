// pages/api/coordinador/panico/assign.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  const { panicoId, supervisorId } = req.body as { panicoId?: number; supervisorId?: number; };
  if (!panicoId || !supervisorId) {
    return res.status(400).json({ error: 'panicoId y supervisorId son requeridos' });
  }

  // 1) Verifica pánico abierto
  const panic = await prisma.botonPanico.findUnique({
    where: { id: panicoId },
    select: { id: true, atendido: true, latitud: true, longitud: true },
  });
  if (!panic) return res.status(404).json({ error: 'Pánico no encontrado' });
  if (panic.atendido) return res.status(409).json({ error: 'El pánico ya está marcado como atendido' });

  // 2) Upsert transaccional para evitar duplicados por carrera
  const updated = await prisma.$transaction(async (tx) => {
    const current = await tx.incidenteAsignado.findFirst({
      where: { panicId: panicoId },
      orderBy: { fechaAsignacion: 'desc' },
    });

    if (current) {
      return tx.incidenteAsignado.update({
        where: { id: current.id },
        data: {
          supervisorId,
          fechaAsignacion: new Date(),
          latitud: panic.latitud ?? current.latitud,
          longitud: panic.longitud ?? current.longitud,
        },
      });
    }

    return tx.incidenteAsignado.create({
      data: {
        panicId: panicoId,
        supervisorId,
        fechaAsignacion: new Date(),
        latitud: panic.latitud ?? 0,
        longitud: panic.longitud ?? 0,
      },
    });
  });

  return res.status(200).json({ ok: true, asignacion: updated });
}

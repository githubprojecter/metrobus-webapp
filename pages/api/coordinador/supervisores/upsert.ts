// pages/api/coordinador/supervisores/upsert.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type PostBody = {
  supervisorId?: number;   // requerido si role === 'Coordinador'
  latitud?: number;
  longitud?: number;
  timestamp?: number;      // opcional (ms epoch); si no viene, se usa new Date()
};

export default requireRole(['Supervisor','Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<{ success: boolean; error?: string }>
) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, error: 'Método no permitido' });
    return;
  }

  const { role, userRoleId } = req;
  const { supervisorId: supervisorIdFromBody, latitud, longitud, timestamp } = (req.body || {}) as PostBody;

  if (latitud == null || longitud == null) {
    res.status(400).json({ success: false, error: 'Faltan latitud o longitud' });
    return;
  }

  try {
    let supervisorId: number | null = null;

    if (role === 'Supervisor') {
      const sup = await prisma.supervisor.findUnique({ where: { userRoleId } });
      if (!sup) {
        res.status(404).json({ success: false, error: 'Supervisor no encontrado para este usuario' });
        return;
      }
      supervisorId = sup.id;
    } else {
      // role === 'Coordinador'
      if (!supervisorIdFromBody) {
        res.status(400).json({ success: false, error: 'supervisorId es requerido (Coordinador)' });
        return;
      }
      const exists = await prisma.supervisor.findUnique({ where: { id: supervisorIdFromBody } });
      if (!exists) {
        res.status(404).json({ success: false, error: 'Supervisor no existe' });
        return;
      }
      supervisorId = supervisorIdFromBody;
    }

    await prisma.ubicacionSupervisor.create({
      data: {
        supervisorId: supervisorId!,
        latitud,
        longitud,
        timestamp: typeof timestamp === 'number' ? new Date(timestamp) : new Date(),
      },
    });

    res.status(201).json({ success: true });
  } catch (err: any) {
    console.error('[supervisores/upsert] error:', err);
    res.status(500).json({ success: false, error: err?.message || 'Error interno' });
  }
});

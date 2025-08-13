import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  const callId = Number(req.query.callId);
  if (!callId) return res.status(400).json({ error:'callId requerido' });

  const call = await prisma.reportenseCall.findUnique({ where:{ id: callId } });
  if (!call) return res.status(404).json({ error:'Llamado no encontrado' });

  const prs = await prisma.presente.findMany({
    where: { callId },
    include: { supervisor: { include: { user: true } } },
    orderBy: { timestamp: 'asc' }
  });

  const items = prs.map(p => {
    const nombre = [p.supervisor.user?.nombre, p.supervisor.user?.apellidoPaterno, p.supervisor.user?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor';
    const diffMin = Math.round((+p.timestamp - +call.createdAt) / 60000);
    const retardo = diffMin <= 15 ? 'VERDE' : diffMin <= 30 ? 'AMARILLO' : 'ROJO';
    return {
      idFirebase: p.supervisor.user?.idFirebase ?? '',
      nombre,
      telefono: p.supervisor.user?.telefono ?? null,
      timestamp: p.timestamp.toISOString(),
      retardo,
    };
  });

  res.status(200).json(items);
});

// pages/api/reportes/list.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador', 'Dirección', 'Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  const status = String(req.query.status ?? 'activo').toLowerCase(); // activo | finalizado
  const limit  = Math.min(parseInt(String(req.query.limit ?? '50'), 10) || 50, 100);
  const offset = parseInt(String(req.query.offset ?? '0'), 10) || 0;

  // Activo = cualquier cosa diferente de "Finalizado"
  const where =
    status === 'finalizado'
      ? { estado: 'Finalizado' as const }
      : { NOT: { estado: 'Finalizado' as const } };

  const rows = await prisma.reporteIncidente.findMany({
    where,
    orderBy: { id: 'desc' },
    take: limit,
    skip: offset,
    include: {
      supervisor: { include: { user: true } },        // nombre, apellidos, profilePhotoUrl
      comentarios: {
        orderBy: { createdAt: 'desc' },
        take: 1,
        include: { fotos: { orderBy: { createdAt: 'asc' }, take: 1 } },
      },
      incidenteAsignado: true,                         // navegar con incidenteAsignadoId
    },
  });

  const items = rows.map((r) => {
    const c = r.comentarios[0];
    const portadaUrl = c?.fotos?.[0]?.url ?? null;
    const comentarioTexto = c?.texto ?? 'Sin comentarios';
    const comentarioFecha = c?.createdAt ?? r.fecha;

    const u = r.supervisor.user;
    const supervisorNombre = [u?.nombre, u?.apellidoPaterno, u?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor';
    const supervisorFoto   = u?.profilePhotoUrl ?? null;

    return {
      reporteId: r.id,
      incidenteAsignadoId: r.incidenteAsignadoId,
      estado: r.estado ?? 'Trabajando',
      portadaUrl,
      comentarioTexto,
      comentarioFecha,
      supervisorNombre,
      supervisorFoto,
    };
  });

  console.log(items)

  return res.status(200).json({ ok: true, items });
});

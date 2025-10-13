// pages/api/report/comments.ts
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

  const reporteId = Number(req.query.reporteId);
  if (!reporteId || Number.isNaN(reporteId)) {
    return res.status(400).json({ error: 'reporteId inválido' });
  }

  const reporte = await prisma.reporteIncidente.findUnique({
    where: { id: reporteId },
    include: {
      supervisor: { include: { user: true } },
      comentarios: {
        orderBy: { createdAt: 'asc' },
        include: { fotos: { orderBy: { createdAt: 'asc' } } },
      },
    },
  });

  if (!reporte) {
    return res.status(404).json({ error: 'Reporte no encontrado' });
  }

  const u = reporte.supervisor.user;
  const supervisor = {
    nombre: [u?.nombre, u?.apellidoPaterno, u?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor',
    foto: u?.profilePhotoUrl ?? null,
  };

  // Compat con el front actual
  return res.status(200).json({
    ok: true,
    reporte: { id: reporte.id, estado: reporte.estado ?? 'Trabajando', supervisor },
    comentarios: reporte.comentarios.map(c => ({
      id: c.id,
      texto: c.texto,
      createdAt: c.createdAt,
      fotos: c.fotos.map(f => ({ id: f.id, url: f.url, createdAt: f.createdAt })),
    })),
  });
});

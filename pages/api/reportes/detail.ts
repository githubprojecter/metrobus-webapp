// pages/api/reportes/detail.ts
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
    return res.status(400).json({ error: 'Falta o es inválido reporteId' });
  }

  // Reporte + comentarios con fotos
  const rep = await prisma.reporteIncidente.findUnique({
    where: { id: reporteId },
    include: {
      supervisor: { include: { user: true } }, // nombre y foto
      comentarios: {
        orderBy: { createdAt: 'desc' },
        include: {
          fotos: { orderBy: { createdAt: 'desc' } }, // ComentarioIncidenteFoto[]
          supervisor: { include: { user: true } },   // por si luego quieres autor del comentario
        },
      },
      incidenteAsignado: true,
      fotos: { orderBy: { createdAt: 'desc' } },     // FotoIncidente[] (evidencias sueltas)
    },
  });

  if (!rep) return res.status(404).json({ error: 'Reporte no encontrado' });

  const u = rep.supervisor?.user;
  const supervisor = {
    nombre: [u?.nombre, u?.apellidoPaterno, u?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor',
    foto: u?.profilePhotoUrl ?? null,
  };

  // Comentarios (payload ligero)
  const comentarios = (rep.comentarios ?? []).map((c) => ({
    id: c.id,
    texto: c.texto ?? '',
    createdAt: c.createdAt,
    fotos: (c.fotos ?? []).map((f) => ({ id: f.id, url: f.url, createdAt: f.createdAt })),
    // opcional: autor
    autor: c.supervisor?.user
      ? {
          nombre: [c.supervisor.user.nombre, c.supervisor.user.apellidoPaterno, c.supervisor.user.apellidoMaterno]
            .filter(Boolean).join(' '),
          foto: c.supervisor.user.profilePhotoUrl ?? null,
        }
      : null,
  }));

  // Aplanar fotos de comentarios + unir con evidencias (FotoIncidente[])
  const fotosDeComentarios = comentarios.flatMap((c) => c.fotos);
  const fotosSueltas = (rep.fotos ?? []).map((f) => ({ id: f.id, url: f.url, createdAt: f.createdAt }));

  // Deduplicar por URL y ordenar desc por fecha
  const byUrl = new Map<string, { id: number | string; url: string; createdAt?: Date }>();
  for (const f of [...fotosDeComentarios, ...fotosSueltas]) {
    if (!byUrl.has(f.url)) byUrl.set(f.url, f);
  }
  const fotosGaleria = Array.from(byUrl.values()).sort(
    (a, b) => +new Date(b.createdAt ?? 0) - +new Date(a.createdAt ?? 0)
  );

  return res.status(200).json({
    ok: true,
    reporte: {
      id: rep.id,
      estado: rep.estado ?? 'Trabajando',
      incidenteAsignadoId: rep.incidenteAsignadoId,
      supervisor,
    },
    comentarios,
    fotosGaleria, // <- la galería completa para el modal
  });
});

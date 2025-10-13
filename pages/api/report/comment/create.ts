// pages/api/report/comment/create.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  const { reporteId, texto, fotos } = req.body || {};
  if (!reporteId || !texto?.trim()) {
    return res.status(400).json({ error: 'Faltan campos: reporteId y texto son obligatorios' });
  }

  // supervisorId desde el usuario autenticado
  const supervisor = await prisma.supervisor.findUnique({
    where: { userRoleId: req.userRoleId },
    select: { id: true },
  });
  if (!supervisor) {
    return res.status(403).json({ error: 'Supervisor no registrado para este usuario' });
  }

  try {
    const comentario = await prisma.comentarioIncidente.create({
      data: {
        reporteId: Number(reporteId),
        supervisorId: supervisor.id,
        texto: String(texto),
      },
    });

    if (Array.isArray(fotos) && fotos.length) {
      await prisma.comentarioIncidenteFoto.createMany({
        data: fotos.map((url: string) => ({
          comentarioIncidenteId: comentario.id,
          url,
        })),
      });
    }

    // incluir fotos en la respuesta
    const full = await prisma.comentarioIncidente.findUnique({
      where: { id: comentario.id },
      include: { fotos: true, supervisor: { include: { user: true } } },
    });

    return res.status(201).json({ ok: true, comentario: full });
  } catch (e) {
    console.error('[report/comment/create]', e);
    return res.status(500).json({ error: 'No se pudo crear el comentario' });
  }
});

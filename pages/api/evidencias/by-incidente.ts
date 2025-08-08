// pages/api/evidencias/by-incidente.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
) => {
  // Solo GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res
      .status(405)
      .json({ error: `Método ${req.method} no permitido` });
  }

  const reporteId = Number(req.query.id);
  if (!reporteId) {
    return res
      .status(400)
      .json({ error: 'Falta el ID del reporte' });
  }

  try {
    const fotos = await prisma.fotoIncidente.findMany({
      where: { reporteId },
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json(fotos);
  } catch (err) {
    console.error('[by-incidente]', err);
    return res
      .status(500)
      .json({ error: 'Error al obtener fotos' });
  }
});

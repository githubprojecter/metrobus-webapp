// pages/api/supervisor/comentarios/index.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole'; // mismo middleware que usas
import prisma from '@/lib/prisma';

type Body = {
  texto: string;
  incidenteId?: number | null;   // opcional: si quieres ligar a una incidencia concreta
  fotos?: string[];              // URLs ya subidas
  ubicacionLat?: number | null;
  ubicacionLng?: number | null;
};

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const supervisor = await prisma.supervisor.findFirst({
      where: { userRoleId: req.userRoleId! },
      select: { id: true },
    });
    if (!supervisor) return res.status(403).json({ error: 'Supervisor no encontrado' });

    const { texto, fotos, ubicacionLat, ubicacionLng } = req.body as Body;
    if (!texto || !texto.trim()) return res.status(400).json({ error: 'texto requerido' });
    const safeUrls = (fotos ?? []).filter((u) => /^https?:\/\//i.test(u));
    const created = await prisma.comentario.create({
      data: {
        supervisorId: supervisor.id,
        texto: texto.trim(),
        ubicacionLat: ubicacionLat ?? null,
        ubicacionLng: ubicacionLng ?? null,
        fotos: { create: safeUrls.map((url) => ({ url })) },
      },
      include: { fotos: true },
    });

    return res.status(201).json(created);
  }

  if (req.method === 'GET') {
    // Lista de mis comentarios (paginable)
    const supervisor = await prisma.supervisor.findFirst({
      where: { userRoleId: req.userRoleId! },
      select: { id: true },
    });
    if (!supervisor) return res.status(403).json({ error: 'Supervisor no encontrado' });

    const take = Number(req.query.take ?? 20);
    const cursor = req.query.cursor ? { id: Number(req.query.cursor) } : undefined;

    const rows = await prisma.comentario.findMany({
      where: { supervisorId: supervisor.id },
      orderBy: { id: 'desc' },
      take,
      ...(cursor ? { skip: 1, cursor } : {}),
      include: { fotos: true }, // 👈 sin "incidente"
    });

    return res.status(200).json(rows);
  }

  return res.status(405).json({ error: 'Method not allowed' });
});

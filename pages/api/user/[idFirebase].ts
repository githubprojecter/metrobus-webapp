// Consulta el rol del usuario desde la base de datos
import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idFirebase } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await prisma.userRole.findUnique({
        where: { idFirebase: String(idFirebase) },
      });

      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      res.json({ role: user.role });
    } catch (e) {
      res.status(500).json({ error: 'Error al consultar el rol' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}

// pages/api/user/[idFirebase].ts
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idFirebase } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await prisma.userRole.findUnique({
        where: { idFirebase: String(idFirebase) },
      });

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      return res.json({ role: user.role });
    } catch (error) {
      console.error('Error al consultar el rol:', error);
      return res.status(500).json({ error: 'Error al consultar el rol' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
}

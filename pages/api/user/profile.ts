// pages/api/user/profile.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

export default requireRole([
  'Operador',
  'Supervisor',
  'Coordinador',
  'Dirección',
  'Patio',
])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return; // ← salimos sin retornar res
  }

  const { uid, role } = req;
  const userRec = await prisma.userRole.findUnique({
    where: { idFirebase: uid },
    include: {
      operador: role === 'Operador'
        ? { select: { unidadAsignada: true, rutaAsignada: true } }
        : false,
    },
  });

  if (!userRec) {
    res.status(404).json({ error: 'Usuario no encontrado' });
    return;
  }

  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    profilePhotoUrl,
    telefono,
    correo,
  } = userRec;

  res.status(200).json({
    role,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    profilePhotoUrl,
    telefono,
    correo,
    unidadAsignada: userRec.operador?.unidadAsignada ?? null,
    rutaAsignada: userRec.operador?.rutaAsignada ?? null,
  });
  // no return con res
});

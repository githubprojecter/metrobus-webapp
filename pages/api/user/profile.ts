// pages/api/user/profile.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { adminAuth } from '@/lib/firebaseAdmin';

export default requireRole(['Operador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const uid = req.uid;

  // 1) Traer datos de Firebase Auth (email, nombre, teléfono)
  const firebaseUser = await adminAuth.getUser(uid);
  const correo     = firebaseUser.email || null;
  const telefono   = firebaseUser.phoneNumber || null;
  const displayName= firebaseUser.displayName || null;
  // opcional: separar nombre y apellidos
  const [nombre, ...apellidosArr] = displayName?.split(' ') ?? ['',''];
  const apellidos = apellidosArr.join(' ');

  // 2) Traer la unidad asignada en Prisma
  const userRec = await prisma.userRole.findUnique({
    where: { idFirebase: uid },
    include: { operador: true },
  });

  if (!userRec?.operador) {
    res.status(404).json({ error: 'Operador no encontrado' });
    return;
  }

  const unidad = userRec.operador.unidadAsignada;

  // 3) Responder perfil
  res.status(200).json({
    nombre,
    apellidos,
    telefono,
    correo,
    unidad,
  });
});

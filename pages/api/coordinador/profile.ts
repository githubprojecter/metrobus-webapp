// pages/api/coordinador/profile.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import { adminAuth } from '@/lib/firebaseAdmin';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow','GET');
    res.status(405).end('Method Not Allowed');
    return;
  }
  const uid = req.uid;
  const fbUser = await adminAuth.getUser(uid);
  const [nombre, ...apellidosArr] = (fbUser.displayName||'').split(' ');
  const apellidos = apellidosArr.join(' ');
  res.status(200).json({
    nombre,
    apellidos,
    correo: fbUser.email || null,
    telefono: fbUser.phoneNumber || null,
  });
});

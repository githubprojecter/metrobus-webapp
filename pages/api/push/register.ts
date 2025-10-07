// pages/api/push/register.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';

// Acepta cualquier rol autenticado; si quieres, limita a Coordinador
export default requireRole(['Operador','Supervisor','Coordinador','Patio'])(async (
  req: NextApiRequestWithUser, res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST'){
        res.setHeader('Allow','POST');
        res.status(405).end();
        return;
  } 

  const { uid } = req;
  const { token, platform } = req.body as { token?: string; platform?: string };
  if (!token) return res.status(400).json({ error: 'Falta token' });

  // Busca UserRole por idFirebase
  const userRole = await prisma.userRole.findUnique({
    where: { idFirebase: uid },
    select: { id: true },
  });
  if (!userRole) return res.status(404).json({ error: 'UserRole no encontrado' });

  // Asegura unicidad por token (ideal: índice único en DeviceToken.token)
  // Si necesitas permitir múltiples dispositivos por usuario, guarda varios registros.
  const existing = await prisma.deviceToken.findUnique({ where: { token } });

  if (!existing) {
    await prisma.deviceToken.create({
      data: {
        token, // si tu modelo la tiene; si no, quítalo
        userRoleId: userRole.id,
      },
    });
  } else {
    // Re-asocia token al user actual (por si migró de cuenta/rol)
    await prisma.deviceToken.update({
      where: { token },
      data: { userRoleId: userRole.id },
    });
  }

  return res.status(200).json({ ok: true });
});

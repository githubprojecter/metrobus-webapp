// pages/api/user/device-token.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole([
  'Operador',
  'Supervisor',
  'Coordinador',
  'Dirección',
  'Patio'
])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end();
    return;
  }

  const { token } = req.body as { token?: string };
  if (!token) {
    res.status(400).json({ error: 'Falta token de dispositivo' });
    return;
  }

  await prisma.deviceToken.upsert({
    where: { token },
    update: { userRoleId: req.userRoleId },
    create: { token, userRoleId: req.userRoleId },
  });

  res.status(200).json({ success: true });
  return;
});

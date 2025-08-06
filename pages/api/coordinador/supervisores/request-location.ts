// pages/api/coordinador/supervisores/request-location.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import { notifyRoleFCM } from '@/lib/notifications';
// Aquí podrías disparar un WebSocket o guardar un registro para que las apps de Supervisor reaccionen

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow','POST');
    res.status(405).end();
    return;
  }
  await notifyRoleFCM(
  'Supervisor',
  'Comparte tu ubicación',
  'El coordinador ha solicitado tu ubicación.',
  {}
);
  // TODO: notificar a supervisores via WebSocket o FCM
  res.status(200).json({ message: 'Supervisores notificados para compartir ubicación' });
});

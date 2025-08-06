// lib/notifications.ts
import type { Role } from '@/lib/generated/prisma';
import prisma from './prisma';
import { fcm } from './firebaseAdmin';

export async function notifyRoleFCM(
  role: Role,
  title: string,
  body: string,
  data: Record<string, string> = {}
): Promise<void> {
  // 1) Recupera los tokens de los dispositivos para ese role
  const rows = await prisma.deviceToken.findMany({
    where: { userRole: { role } },
    select: { token: true },
  });
  const tokens = rows.map((r) => r.token);
  if (tokens.length === 0) return;

  // 2) Envía uno a uno con fcm.send()
  let successCount = 0;
  let failureCount = 0;

  for (const token of tokens) {
    try {
      await fcm.send({
        token,
        notification: { title, body },
        data,
        android: { priority: 'high' },
        apns: { headers: { 'apns-priority': '10' } },
      });
      successCount++;
    } catch (err) {
      console.error('Error enviando FCM a', token, err);
      failureCount++;
    }
  }

  console.log(`Notificaciones enviadas: ${successCount}, fallidas: ${failureCount}`);
}

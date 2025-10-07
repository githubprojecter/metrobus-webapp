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
  const rows = await prisma.deviceToken.findMany({
    where: { userRole: { role } },
    select: { token: true },
  });
  const tokens = rows.map((r) => r.token);
  if (tokens.length === 0) return;

  // ── Envío simple 1x1 (tu flujo actual) ─────────────────────
  let successCount = 0;
  let failureCount = 0;

  for (const token of tokens) {
    try {
      await fcm.send({
        token,
        notification: { title, body },
        // ⬇️ datos útiles para deep-link o navegación
        data: {
          click_action: 'FLUTTER_NOTIFICATION_CLICK', // Android
          screen: 'PanicDetail',                      // o el nombre que uses
          ...data,                                    // ej: panicId/lat/lng
        },
        android: {
          priority: 'high',
          notification: { clickAction: 'FLUTTER_NOTIFICATION_CLICK', channelId: 'default' },
        },
        apns: {
          headers: { 'apns-priority': '10' },
          payload: { aps: { sound: 'default' } },
        },
      });
      successCount++;
    } catch (err: any) {
      console.error('Error enviando FCM a', token, err?.code || err?.message || err);
      failureCount++;
      // (Opcional) si quieres limpiar tokens inválidos:
      // if (String(err?.code || '').includes('registration-token-not-registered')) {
      //   await prisma.deviceToken.deleteMany({ where: { token } });
      // }
    }
  }

  console.log(`Notificaciones enviadas: ${successCount}, fallidas: ${failureCount}`);
}

/**
 * Envía una notificación FCM a todos los dispositivos de un userRoleId.
 * No rompe si no hay tokens; loguea éxitos y fallos.
 */
export async function notifyUserFCM(
  userRoleId: number,
  title: string,
  body: string,
  data: Record<string, string> = {}
): Promise<void> {
  // Recupera tokens del usuario
  const rows = await prisma.deviceToken.findMany({
    where: { userRoleId },
    select: { token: true },
  });

  const tokens = rows.map(r => r.token);
  if (tokens.length === 0) {
    console.log(`[notifyUserFCM] sin tokens para userRoleId=${userRoleId}`);
    return;
  }

  let successCount = 0;
  let failureCount = 0;

  for (const token of tokens) {
    try {
      await fcm.send({
        token,
        notification: { title, body },
        data, // debe ser string:string
        android: {
          priority: 'high',
          notification: {
            channelId: 'default',
            sound: 'default',
          },
        },
        apns: {
          headers: { 'apns-priority': '10' },
          payload: { aps: { sound: 'default' } },
        },
      });
      successCount++;
    } catch (err: any) {
      console.error('Error enviando FCM a', token, err?.code || err?.message || err);
      failureCount++;
      // Opcional: si quieres depurar tokens inválidos, aquí podrías eliminarlos.
    }
  }

  console.log(`[notifyUserFCM] Enviadas: ${successCount}, Fallidas: ${failureCount}, userRoleId=${userRoleId}`);
}

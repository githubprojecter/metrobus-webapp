// // lib/notifications.ts
// import type { Role } from '@/lib/generated/prisma';
// import prisma from './prisma';
// import { fcm } from './firebaseAdmin';

// const MAX_PER_BATCH = 500;

// type DataBag = Record<string, string>;

// export async function notifyRoleFCM(
//   role: Role,
//   title: string,
//   body: string,
//    data: DataBag = {}
// ): Promise<void> {
//   // 1) Recupera los tokens de los dispositivos para ese role
//   const rows = await prisma.deviceToken.findMany({
//     where: { userRole: { role } },
//     select: { token: true },
//   });
//   const tokens = rows.map((r) => r.token);
//   if (tokens.length === 0) return;

//   //2) Enviar en lotes (multicast) y limpiar inválidos
//   const chunks: string[][] = [];
//   for (let i = 0; i < tokens.length; i += MAX_PER_BATCH) {
//     chunks.push(tokens.slice(i, i + MAX_PER_BATCH));
//   }

//   // 2) Envía uno a uno con fcm.send()
//   let successCount = 0;
//   let failureCount = 0;

//   for (const token of tokens) {
//     try {
//       await fcm.send({
//         token,
//         notification: { title, body },
//         data,
//         android: { priority: 'high' },
//         apns: { headers: { 'apns-priority': '10' } },
//       });
//       successCount++;
//     } catch (err) {
//       console.error('Error enviando FCM a', token, err);
//       failureCount++;
//     }
//   }

//   console.log(`Notificaciones enviadas: ${successCount}, fallidas: ${failureCount}`);
// }

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

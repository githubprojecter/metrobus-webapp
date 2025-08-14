// pages/api/cron/hourly-presente-reminder.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { DateTime } from 'luxon';
import { google } from 'googleapis';

// Config: FCM v1
const PROJECT_ID = process.env.GCP_PROJECT_ID!;
const FCM_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const CDMX = 'America/Mexico_City';

async function getAccessToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: [FCM_SCOPE],
  });
  const token = await auth.getAccessToken();
  if (!token) throw new Error('No se pudo obtener access token FCM');
  return token;
}

async function sendFCM(token: string, title: string, body: string) {
  const accessToken = await getAccessToken();
  const url = `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        token,
        notification: { title, body },
        data: { type: 'PRESENTE_REMINDER' },
      },
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    console.error('FCM error:', t);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Puedes protegerlo con una clave en header si gustas
  try {
    const now = DateTime.now().setZone(CDMX);
    const hourStartUTC = now.startOf('hour').toUTC();
    const dayStartUTC = now.startOf('day').toUTC();

    // Supervisores "en turno": si tienes asignación T1..T5 por supervisor, filtra aquí por turno actual (opcional)
    const supervisores = await prisma.supervisor.findMany({
      include: {
        user: { select: { nombre: true, apellidoPaterno: true, apellidoMaterno: true } },
        // Ajusta si guardas tokens en otra tabla:
        // deviceTokens: true
      },
    });

    // Para cada supervisor, último "Presente" de hoy
    for (const s of supervisores) {
      const last = await prisma.presente.findFirst({
        where: {
          supervisorId: s.id,
          timestamp: { gte: dayStartUTC.toJSDate(), lte: now.toUTC().toJSDate() },
        },
        orderBy: { timestamp: 'desc' },
      });

      const isPresentThisHour = !!last && DateTime.fromJSDate(last.timestamp, { zone: 'utc' }) >= hourStartUTC;
      if (!isPresentThisHour) {
        const nombre = [s.user?.nombre, s.user?.apellidoPaterno].filter(Boolean).join(' ') || 'Supervisor';
        // ⚠️ Ajusta de dónde tomas el/los tokens:
        const tokens: string[] = (s as any).fcmTokens ?? (s as any).deviceTokens?.map((d: any) => d.token) ?? [];
        for (const t of tokens) {
          await sendFCM(t, 'Recordatorio de “Presente”', 'Por favor, registra tu Presente de esta hora.');
        }
      }
    }

    res.status(200).json({ ok: true, hourStartUTC: hourStartUTC.toISO() });
  } catch (e: any) {
    console.error('[hourly-presente-reminder]', e);
    res.status(500).json({ error: e?.message ?? 'Error' });
  }
}

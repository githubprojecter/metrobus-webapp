// pages/api/coordinador/supervisores/reportense.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { google } from 'googleapis';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end();
      return;
    }

    const { turno } = req.body as { turno?: 'MATUTINO' | 'VESPERTINO' | 'NOCTURNO' };
    if (!turno) {
      res.status(400).json({ error: 'turno requerido' });
      return;
    }

    // 1) Crear "llamado a reportarse"
    const call = await prisma.reportenseCall.create({
      data: { coordinadorId: req.userRoleId!, turno },
    });

    // 2) Calcular día efectivo por turno nocturno (antes de las 04:00 va para el día previo)
    const now = new Date();
    const utcYMD = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const day = new Date(`${utcYMD}T00:00:00.000Z`);
    const hourMx = parseInt(
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Mexico_City',
        hour12: false,
        hour: '2-digit',
      }).format(now),
      10
    );
    const effDay = turno === 'NOCTURNO' && hourMx < 4
      ? new Date(day.getTime() - 24 * 60 * 60 * 1000)
      : day;

    // 3) Supervisores programados para ese día/turno con sus tokens
    const asignados = await prisma.turnoProgramado.findMany({
      where: { fecha: effDay, turno },
      include: {
        supervisor: {
          include: {
            user: {
              select: {
                idFirebase: true,
                nombre: true,
                apellidoPaterno: true,
                apellidoMaterno: true,
                DeviceToken: { select: { token: true } },
              },
            },
          },
        },
      },
    });

    const tokens = asignados.flatMap(
      (a) => a.supervisor.user?.DeviceToken.map((t) => t.token) ?? []
    );

    // 4) Enviar FCM v1 (opcional si no hay tokens)
    if (tokens.length > 0) {
      try {
        const projectId = process.env.FIREBASE_PROJECT_ID!;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
        const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

        // Firma nueva: objeto de opciones
        const jwtClient = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
        });
        await jwtClient.authorize();

        const url = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;

        const sendOne = async (token: string) => {
          const accessToken = await jwtClient.getAccessToken(); // string | null
          const message = {
            message: {
              token,
              notification: {
                title: '¡Reportarse!',
                body: 'Ingresa a la app y presiona "Presente".',
              },
              data: { type: 'reportense', callId: String(call.id), turno },
            },
          };
          await fetch(url, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken ?? ''}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
          });
        };

        // Enviar en paralelo
        await Promise.all(tokens.map(sendOne));
      } catch (e) {
        console.error('[FCM]', e);
        // No rompemos la API si falla FCM; continuamos
      }
    }

    res.status(200).json({
      callId: call.id,
      createdAt: call.createdAt.toISOString(),
    });
    return;
  } catch (err: any) {
    console.error('[REPORTENSE]', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
    return;
  }
});

// pages/api/coordinador/supervisores/reportense.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { google } from 'googleapis';
import { parseTurnoCompat, anchorDateForTurno, type Turno5 } from '@/lib/turnos';

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

    // 0) Validación de turno
    const { turno: turnoRaw } = req.body as { turno?: string };
    if (!turnoRaw) {
      res.status(400).json({ error: 'turno requerido (T1..T5 o rango HH:MM-HH:MM)' });
      return;
    }

    let t5: Turno5;
    try {
      t5 = parseTurnoCompat(turnoRaw); // acepta T1..T5 o '06:00-14:00', etc.
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? 'turno inválido (T1..T5)' });
      return;
    }

    // 1) Coordinador actual
    const coord = await prisma.coordinador.findUnique({
      where: { userRoleId: req.userRoleId! },
      select: { id: true },
    });
    if (!coord) {
      res.status(400).json({ error: 'Coordinador no encontrado' });
      return;
    }

    // 2) Día ancla (maneja madrugada para T4)
    const now = new Date();
    const effDay = anchorDateForTurno(now, t5); // Date en 00:00:00Z del día efectivo

    // 3) Reutilizar o crear ReportenseCall del día ancla (para ese turno)
    let call = await prisma.reportenseCall.findFirst({
      where: { turno: t5 as any, createdAt: { gte: effDay } },
      orderBy: { createdAt: 'desc' },
    });

    if (!call) {
      call = await prisma.reportenseCall.create({
        data: { coordinadorId: coord.id, turno: t5 as any },
      });
    }

    // 4) Supervisores programados para ese día/turno + tokens
    //    OJO: aquí consultamos TurnoProgramado usando la fecha efectiva y el turno t5
    const asignados = await prisma.turnoProgramado.findMany({
      where: { fecha: effDay, turno: t5 as any },
      include: {
        supervisor: {
          include: {
            user: {
              select: {
                idFirebase: true,
                nombre: true,
                apellidoPaterno: true,
                apellidoMaterno: true,
                DeviceToken: { select: { token: true } }, // ajusta si tu relación/nombre difiere
              },
            },
          },
        },
      },
    });

    // Extrae tokens únicos
    const tokensSet = new Set<string>();
    for (const a of asignados) {
      const toks = a.supervisor.user?.DeviceToken?.map(t => t.token) ?? [];
      for (const tk of toks) if (tk) tokensSet.add(tk);
    }
    const tokens = Array.from(tokensSet);

    // 5) Enviar FCM v1 (si hay tokens)
    if (tokens.length > 0) {
      try {
        const projectId = process.env.FIREBASE_PROJECT_ID!;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
        const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

        // JWT para FCM v1
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
              data: {
                type: 'reportense',
                callId: String(call!.id),
                turno: String(t5), // manda T1..T5
              },
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

        // Envía en paralelo (si quieres throttling, puedes hacer lotes de 500)
        await Promise.all(tokens.map(sendOne));
      } catch (e) {
        console.error('[FCM]', e);
        // No rompemos la API si falla FCM; continuamos
      }
    }

    // 6) Respuesta final
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ callId: call.id, createdAt: call.createdAt.toISOString() });
    return;
  } catch (err: any) {
    console.error('[REPORTENSE]', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
    return;
  }
});

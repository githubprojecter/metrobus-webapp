import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { google } from 'googleapis';
import { anchorDateForTurno, type Turno5 } from '@/lib/turnos';

/** Parser compatible: 'T1'..'T5' o rangos '06:00-14:00', '18:00–02:00' */
function parseTurnoCompatLocal(input?: string): Turno5 {
  const raw = String(input || '').trim().toUpperCase();
  if (['T1','T2','T3','T4','T5'].includes(raw)) return raw as Turno5;
  const norm = raw.replace(/\s+/g, '').replace('–', '-');
  const map: Record<string, Turno5> = {
    '06:00-14:00': 'T1',
    '08:00-16:00': 'T2',
    '10:00-18:00': 'T3',
    '18:00-02:00': 'T4',
    '14:00-22:00': 'T5',
  };
  const t = map[norm];
  if (!t) throw new Error('turno inválido (usa T1..T5 o un rango válido)');
  return t;
}

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  console.log('[REPORTENSE] method=', req.method, ' userRoleId=', req.userRoleId);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  try {
    const { turno: turnoRaw } = req.body as { turno?: string };
    if (!turnoRaw) {
      res.status(400).json({ error: 'turno requerido (T1..T5 o rango)' });
      return;
    }

    let t5: Turno5;
    try { t5 = parseTurnoCompatLocal(turnoRaw); }
    catch (e: any) {
      res.status(400).json({ error: e?.message ?? 'turno inválido' });
      return;
    }

    if (!req.userRoleId) {
      console.warn('[REPORTENSE] userRoleId ausente');
      res.status(401).json({ error: 'No autorizado' });
      return;
    }

    const coord = await prisma.coordinador.findUnique({
      where: { userRoleId: req.userRoleId },
      select: { id: true },
    });
    if (!coord) {
      res.status(403).json({ error: 'Permiso denegado (no es Coordinador)' });
      return;
    }

    // Ancla por turno (maneja madrugada de T4)
    const now = new Date();
    const effDay = anchorDateForTurno(now, t5);
    console.log('[REPORTENSE] anchor day=', effDay.toISOString().slice(0,10), ' turno=', t5);

    // Reutilizar call del día ancla si existe; si no, crear
    let call = await prisma.reportenseCall.findFirst({
      where: { turno: t5 as any, createdAt: { gte: effDay } },
      orderBy: { createdAt: 'desc' },
    });

    if (!call) {
      call = await prisma.reportenseCall.create({
        data: { coordinadorId: coord.id, turno: t5 as any },
      });
      console.log('[REPORTENSE] creada call id=', call.id);
    } else {
      console.log('[REPORTENSE] reusada call id=', call.id);
    }

    // Supervisores asignados a ese día/turno + tokens
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
                DeviceToken: { select: { token: true } },
              },
            },
          },
        },
      },
    });

    const tokens = asignados.flatMap(a => a.supervisor.user?.DeviceToken.map(t => t.token) ?? []);
    console.log('[REPORTENSE] asignados=', asignados.length, ' tokens=', tokens.length);

    // Enviar FCM v1 (si hay tokens)
    if (tokens.length > 0) {
      try {
        const projectId = process.env.FIREBASE_PROJECT_ID!;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
        const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

        const jwtClient = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
        });
        await jwtClient.authorize();

        const url = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;

        const sendOne = async (token: string) => {
          const accessToken = await jwtClient.getAccessToken();
          const message = {
            message: {
              token,
              notification: { title: '¡Reportarse!', body: 'Ingresa a la app y presiona "Presente".' },
              data: { type: 'reportense', callId: String(call!.id), turno: t5 },
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

        await Promise.all(tokens.map(sendOne));
        console.log('[REPORTENSE] FCM enviado a', tokens.length, 'dispositivo(s)');
      } catch (e) {
        console.error('[REPORTENSE][FCM] error=', e);
        // No rompemos la API si falla FCM
      }
    }

    res.status(200).json({ callId: call.id, createdAt: call.createdAt.toISOString(), turno: t5, effDate: effDay.toISOString().slice(0,10) });
  } catch (err: any) {
    console.error('[REPORTENSE] error=', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

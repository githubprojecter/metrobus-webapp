import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { anchorDateForTurno, type Turno5 } from '@/lib/turnos';

/** Parser compatible: 'T1'..'T5' o rangos '06:00-14:00', '18:00–02:00' */
function parseTurnoCompatLocal(input?: string): Turno5 {
  const raw = String(input || '').trim().toUpperCase();

  // Caso directo T1..T5
  if (['T1', 'T2', 'T3', 'T4', 'T5'].includes(raw)) return raw as Turno5;

  // Normalizar rangos (acepta '-', '–', espacios)
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

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  console.log('[PRESENTE] method=', req.method, ' userRoleId=', req.userRoleId);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  try {
    const {
      latitud,
      longitud,
      callId: callIdRaw,
      turno: turnoRaw,   // puede venir T# o rango
    } = req.body as {
      latitud?: number;
      longitud?: number;
      callId?: number | string | null;
      turno?: string | null;
    };

    console.log('[PRESENTE] body=', { latitud, longitud, callId: callIdRaw, turno: turnoRaw });

    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
      res.status(400).json({ error: 'latitud/longitud requeridas (number)' });
      return;
    }

    // Supervisor actual desde el userRoleId inyectado
    if (!req.userRoleId) {
      console.warn('[PRESENTE] userRoleId ausente (token inválido?)');
      res.status(401).json({ error: 'No autorizado' });
      return;
    }

    const sup = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId },
      select: { id: true },
    });
    if (!sup) {
      res.status(404).json({ error: 'Supervisor no encontrado' });
      return;
    }

    // Resolver callId:
    //  a) si viene callId explícito, lo buscamos
    //  b) si NO viene, pero sí viene turno, buscamos la call del día ancla para ese turno
    let callId: number | null = null;

    if (callIdRaw != null && String(callIdRaw).trim() !== '') {
      const cid = Number(callIdRaw);
      if (!Number.isFinite(cid)) {
        res.status(400).json({ error: 'callId inválido' });
        return;
      }
      const found = await prisma.reportenseCall.findUnique({ where: { id: cid }, select: { id: true } });
      callId = found?.id ?? null;
      console.log('[PRESENTE] callId por parámetro =>', callId);
    } else if (typeof turnoRaw === 'string' && turnoRaw.trim()) {
      let t5: Turno5;
      try {
        t5 = parseTurnoCompatLocal(turnoRaw);
      } catch (e: any) {
        res.status(400).json({ error: e?.message ?? 'turno inválido' });
        return;
      }
      const anchor = anchorDateForTurno(new Date(), t5);
      const call = await prisma.reportenseCall.findFirst({
        where: { turno: t5 as any, createdAt: { gte: anchor } },
        select: { id: true },
        orderBy: { createdAt: 'desc' },
      });
      callId = call?.id ?? null;
      console.log('[PRESENTE] callId por turno/anchor =>', callId);
    }

    // Registrar presente
    await prisma.presente.create({
      data: {
        supervisorId: sup.id,
        callId,
        latitud,
        longitud,
        timestamp: new Date(),
      },
    });

    console.log('[PRESENTE] registrado OK');
    res.status(200).json({ success: true, callId });
  } catch (err: any) {
    console.error('[PRESENTE] error=', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

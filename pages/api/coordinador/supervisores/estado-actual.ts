// pages/api/coordinador/supervisores/estado-actual.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { DateTime } from 'luxon';

type SupEstado = {
  id: number;
  codigo?: string | null;
  telefono?: string | null;
  turno?: string | null;
  nombreCompleto: string;
  last?: { timestamp: string; latitud: number | null; longitud: number | null } | null;
  isPresentThisHour: boolean;
};

type Resp = {
  nowCDMX: string;
  hourStartUTC: string;
  dayStartUTC: string;
  supervisors: SupEstado[];
};

const CDMX = 'America/Mexico_City';

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<Resp | { error: string }>
) => {
  try {
    const now = DateTime.now().setZone(CDMX);
    const dayStartUTC = now.startOf('day').toUTC();
    const hourStartUTC = now.startOf('hour').toUTC();

    // 👇 NUEVO: lee ids si vienen en query (?ids=1,2,3)
    const idsParam = typeof req.query.ids === 'string' ? req.query.ids : '';
    const ids = idsParam
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => Number.isFinite(n));

    const whereSupervisores = ids.length > 0 ? { id: { in: ids } } : undefined;

    const supervisores = await prisma.supervisor.findMany({
      where: whereSupervisores, // 👈 filtra si mandaste ids
      include: {
        user: { select: { nombre: true, apellidoPaterno: true, apellidoMaterno: true, telefono: true } },
      },
      orderBy: { id: 'asc' },
    });

    const estados = await Promise.all(
      supervisores.map(async (s) => {
        const last = await prisma.presente.findFirst({
          where: {
            supervisorId: s.id,
            timestamp: { gte: dayStartUTC.toJSDate(), lte: now.toUTC().toJSDate() },
          },
          orderBy: { timestamp: 'desc' },
        });

        const isPresentThisHour = !!last && DateTime.fromJSDate(last.timestamp, { zone: 'utc' }) >= hourStartUTC;

        const nombreCompleto = [
          s.user?.nombre ?? '',
          s.user?.apellidoPaterno ?? '',
          s.user?.apellidoMaterno ?? '',
        ].filter(Boolean).join(' ') || 'Supervisor';

        return {
          id: s.id,
          codigo: (s as any).codigo ?? null,
          telefono: s.user?.telefono ?? null,
          turno: (s as any).turno ?? (s as any).turno5 ?? null, // si existe en tu modelo; si no, quedará null
          nombreCompleto,
          last: last ? {
            timestamp: last.timestamp.toISOString(),
            latitud: last.latitud ?? null,
            longitud: last.longitud ?? null,
          } : null,
          isPresentThisHour,
        } as SupEstado;
      })
    );

    res.status(200).json({
      nowCDMX: now.toISO() ?? new Date().toISOString(),                 // 👈 fix TS
      hourStartUTC: hourStartUTC.toISO() ?? new Date().toISOString(),   // 👈 fix TS
      dayStartUTC: dayStartUTC.toISO() ?? new Date().toISOString(),     // 👈 fix TS
      supervisors: estados,
    });
  } catch (err: any) {
    console.error('[estado-actual] error:', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

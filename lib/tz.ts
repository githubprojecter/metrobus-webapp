// lib/tz.ts
import { DateTime } from 'luxon';

export const CDMX_ZONE = 'America/Mexico_City';

// Convierte un rango (YYYY-MM-DD u ISO) interpretado en CDMX → fechas UTC para consultar Prisma
export function rangeCDMXToUTC(fromISO?: string, toISO?: string) {
  const nowCDMX = DateTime.now().setZone(CDMX_ZONE);

  const from = fromISO
    ? DateTime.fromISO(fromISO, { zone: CDMX_ZONE }).startOf('day')
    : nowCDMX.startOf('day');

  const to = toISO
    ? DateTime.fromISO(toISO, { zone: CDMX_ZONE }).endOf('day')
    : nowCDMX.endOf('day');

  const [fromOk, toOk] = to < from
    ? [to.startOf('day'), from.endOf('day')]
    : [from, to];

  return {
    fromUTC: fromOk.toUTC().toJSDate(),
    toUTC: toOk.toUTC().toJSDate(),
  };
}

// Convierte una fecha UTC de la BD → string legible en CDMX
export function toCDMXString(d: Date) {
  return DateTime.fromJSDate(d, { zone: 'utc' })
    .setZone(CDMX_ZONE)
    .toFormat('yyyy-LL-dd HH:mm:ss');
}

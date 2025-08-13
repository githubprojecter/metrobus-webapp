// lib/turnos.ts
export type Turno5 = 'T1' | 'T2' | 'T3' | 'T4' | 'T5';
export const MX_TZ = 'America/Mexico_City';

export const DEF: Record<Turno5, { start: string; end: string; crossesMidnight?: boolean }> = {
  T1: { start: '06:00', end: '14:00' },
  T2: { start: '08:00', end: '16:00' },
  T3: { start: '10:00', end: '18:00' },
  T4: { start: '18:00', end: '02:00', crossesMidnight: true },
  T5: { start: '14:00', end: '22:00' },
};

// formato YYYY-MM-DD en CDMX
export function ymdLocal(d = new Date(), tz = MX_TZ): string {
  const y = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric' }).format(d);
  const m = new Intl.DateTimeFormat('en-CA', { timeZone: tz, month: '2-digit' }).format(d);
  const day = new Intl.DateTimeFormat('en-CA', { timeZone: tz, day: '2-digit' }).format(d);
  return `${y}-${m}-${day}`;
}

export function addDaysLocal(ymd: string, days: number, tz = MX_TZ): string {
  const date = new Date(`${ymd}T00:00:00.000Z`);
  // sumamos days en milisegundos (día calendario, UTC), suficiente para la persistencia YYYY-MM-DD
  date.setUTCDate(date.getUTCDate() + days);
  return ymdLocal(date, tz);
}

function hmToMinutes(hm: string) {
  const [h, m] = hm.split(':').map(Number);
  return h * 60 + m;
}

function nowMinutesInTZ(now = new Date(), tz = MX_TZ) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  }).formatToParts(now);
  const hh = Number(parts.find(p => p.type === 'hour')!.value);
  const mm = Number(parts.find(p => p.type === 'minute')!.value);
  return hh * 60 + mm;
}

export function isNowInTurno(t: Turno5, now = new Date(), tz = MX_TZ): boolean {
  const { start, end, crossesMidnight } = DEF[t];
  const s = hmToMinutes(start);
  const e = hmToMinutes(end);
  const cur = nowMinutesInTZ(now, tz);
  if (!crossesMidnight) return cur >= s && cur < e;
  // cruza medianoche: [start..24h) ∪ [0..end)
  return cur >= s || cur < e;
}

// Fecha “ancla” (YYYY-MM-DD → Date) según turno: para T4 00:00–01:59 pertenece al día anterior.
export function anchorDateForTurno(now = new Date(), t: Turno5, tz = MX_TZ): Date {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const y = parts.find(p => p.type === 'year')!.value;
  const m = parts.find(p => p.type === 'month')!.value;
  const d = parts.find(p => p.type === 'day')!.value;
  const hh = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour12: false, hour: '2-digit' }).format(now);
  const hour = Number(hh);

  const curYmd = `${y}-${m}-${d}`;
  let effYmd = curYmd;
  if (t === 'T4' && hour < 2) {
    // madrugada de T4 pertenece al día previo
    const dt = new Date(`${curYmd}T00:00:00.000Z`);
    dt.setUTCDate(dt.getUTCDate() - 1);
    effYmd = ymdLocal(dt, tz);
  }
  return new Date(`${effYmd}T00:00:00.000Z`);
}

// Fecha efectiva que debe guardarse para un (turno, fechaUI)
export function effectiveFechaFor(t: Turno5, fechaUI: string): string {
  if (t !== 'T4') return fechaUI;
  // Si el usuario selecciona “Hoy/Mañana”, mantenemos la misma regla de ancla cuando esté en 00:00–01:59.
  // Nota: en server preferimos usar anchorDateForTurno(now,t) para robustez; aquí respetamos tu client.
  return fechaUI;
}

export function parseTurno5(x: string): Turno5 {
  const u = (x || '').toUpperCase().trim();
  if (u === 'T1' || u === 'T2' || u === 'T3' || u === 'T4' || u === 'T5') return u as Turno5;
  throw new Error('turno inválido (usa T1..T5)');
}

// ¿qué turnos están activos ahora?
export function activeTurnos(now = new Date(), tz = MX_TZ): Turno5[] {
  return (['T1', 'T2', 'T3', 'T4', 'T5'] as Turno5[]).filter(t => isNowInTurno(t, now, tz));
}

// YYYY-MM-DD a Date UTC (00:00Z)
export function ymdToLocalMidnight(ymd: string): Date {
  return new Date(`${ymd}T00:00:00.000Z`);
}

// --- Compatibilidad de parsing de turno ---
// Acepta: 'T1'..'T5' (case-insensitive) o etiquetas de rango '06:00-14:00', '08:00-16:00', '10:00-18:00', '18:00-02:00', '14:00-22:00'
// También tolera espacios extra y guiones en Unicode.
export function parseTurnoCompat(input: unknown): Turno5 {
  if (!input) throw new Error('turno requerido');
  const raw = String(input).trim().toUpperCase();

  // 1) Directo T1..T5
  if (raw === 'T1' || raw === 'T2' || raw === 'T3' || raw === 'T4' || raw === 'T5') {
    return raw as Turno5;
  }

  // 2) Normalizar etiqueta de horas (remueve espacios)
  const norm = raw
    .replace(/\s+/g, '')      // quita espacios
    .replace(/[–—−]/g, '-')   // guiones raros → '-'
    .replace(/：/g, ':');      // dos puntos fullwidth

  const RANGE_TO_T: Record<string, Turno5> = {
    '06:00-14:00': 'T1',
    '08:00-16:00': 'T2',
    '10:00-18:00': 'T3',
    '18:00-02:00': 'T4',  // cruza medianoche
    '14:00-22:00': 'T5',
  };

  if (norm in RANGE_TO_T) return RANGE_TO_T[norm];

  // (Opcional) Si alguna API vieja te manda 'MATUTINO'/'VESPERTINO'/'NOCTURNO', aquí *no* infiero
  // porque ahora tienes 5 turnos. Si quieres, establece un mapeo explícito:
  // if (norm === 'MATUTINO') return 'T1';
  // if (norm === 'VESPERTINO') return 'T5';
  // if (norm === 'NOCTURNO') return 'T4';

  throw new Error(`turno inválido: "${input}" (usa T1..T5 o rangos HH:MM-HH:MM)`);
}

// Helper: obtiene etiqueta humana para mostrar en UI, sin tocar tu estado interno
export function turnoLabel(t: Turno5): string {
  switch (t) {
    case 'T1': return '06:00–14:00';
    case 'T2': return '08:00–16:00';
    case 'T3': return '10:00–18:00';
    case 'T4': return '18:00–02:00';
    case 'T5': return '14:00–22:00';
  }
}

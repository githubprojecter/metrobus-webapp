// pages/api/coordinador/supervisores/export.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import ExcelJS from 'exceljs';

const MX_OFFSET = '-06:00'; // Ciudad de México (sin DST desde 2022)
const isYMD = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);

// Convierte 'YYYY-MM-DD' interpretado en CDMX → Date UTC (inicio y fin del día)
function ymdStartCDMXToUTC(ymd: string): Date {
  return new Date(`${ymd}T00:00:00.000${MX_OFFSET}`);
}
function ymdEndCDMXToUTC(ymd: string): Date {
  return new Date(`${ymd}T23:59:59.999${MX_OFFSET}`);
}

// Acepta ?from y ?to como ISO o como 'YYYY-MM-DD' (interpretado en CDMX)
function normalizeFromTo(query: any): { from: Date; to: Date; ymdFrom: string; ymdTo: string } {
  const fromRaw = String(query.from || '').trim();
  const toRaw = String(query.to || '').trim();

  if (isYMD(fromRaw) && isYMD(toRaw)) {
    const from = ymdStartCDMXToUTC(fromRaw);
    const to = ymdEndCDMXToUTC(toRaw);
    return { from, to, ymdFrom: fromRaw, ymdTo: toRaw };
  }

  const from = new Date(fromRaw);
  const to = new Date(toRaw);
  if (isNaN(from.getTime()) || isNaN(to.getTime())) {
    throw new Error('Parámetros "from" y "to" inválidos');
  }
  return { from, to, ymdFrom: from.toISOString().slice(0,10), ymdTo: to.toISOString().slice(0,10) };
}

function formatFechaMX(d: Date) {
  // Convierte a componentes en zona horaria CDMX usando Intl
  const tz = 'America/Mexico_City';

  const fmtDay = new Intl.DateTimeFormat('es-MX', { timeZone: tz, day: 'numeric' });
  const fmtMonth = new Intl.DateTimeFormat('es-MX', { timeZone: tz, month: 'long' });
  const fmtYear = new Intl.DateTimeFormat('es-MX', { timeZone: tz, year: 'numeric' });
  const fmtHour = new Intl.DateTimeFormat('es-MX', {
    timeZone: tz, hour: 'numeric', minute: '2-digit', hour12: true
  });

  const day = fmtDay.format(d);
  const month = fmtMonth.format(d);
  const year = fmtYear.format(d);

  // "8:17 p. m." → "8:17 pm"
  const hmRaw = fmtHour.format(d).toLowerCase();
  const hm = hmRaw
    .replace(/\s*p\.\s?m\.\s*/g, ' pm')
    .replace(/\s*a\.\s?m\.\s*/g, ' am')
    .replace(/\s+/g, ' ')
    .trim();

  return `${day} de ${month} del ${year} a las ${hm}`;
}

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
) => {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      res.status(405).json({ error: 'Método no permitido' });
      return;
    }

    const { from, to, ymdFrom, ymdTo } = normalizeFromTo(req.query);

    if (!from || !to) {
      res.status(400).json({ error: 'Parámetros "from" y "to" (ISO o YYYY-MM-DD) son requeridos' });
      return;
    }
    if (from > to) {
      res.status(400).json({ error: '"from" no debe ser mayor que "to"' });
      return;
    }

    // Query a la tabla Presente
    const rows = await prisma.presente.findMany({
      where: { timestamp: { gte: from, lte: to } },
      orderBy: { timestamp: 'asc' },
      include: {
        supervisor: {
          include: {
            user: {
              select: {
                nombre: true,
                apellidoPaterno: true,
                apellidoMaterno: true,
              },
            },
          },
        },
      },
    });

    // Preparar datos para Excel
    const data = rows.map(r => {
      const u = r.supervisor?.user;
      const nombre = [u?.nombre, u?.apellidoPaterno, u?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor';
      const fechaLocal = formatFechaMX(new Date(r.timestamp));
      const lat = r.latitud ?? null;
      const lng = r.longitud ?? null;
      const maps = (lat != null && lng != null) ? `https://maps.google.com/?q=${lat},${lng}` : '';
      return {
        nombre,
        fechaLocal,
        lat,
        lng,
        maps,
      };
    });

    // Crear workbook
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Ubicaciones');

    // Encabezado
    ws.columns = [
      { header: 'Supervisor', key: 'nombre', width: 28 },
      { header: 'Fecha (CDMX)', key: 'fechaLocal', width: 28 },
      { header: 'Latitud', key: 'lat', width: 12 },
      { header: 'Longitud', key: 'lng', width: 12 },
      { header: 'Liga de maps', key: 'maps', width: 40 },
    ];

    ws.addRows(data);

    // Formato de tabla
    ws.addTable({
      name: 'UbicacionesTbl',
      ref: 'A1',
      headerRow: true,
      columns: [
        { name: 'Supervisor', filterButton: true },
        { name: 'Fecha (CDMX)', filterButton: true },
        { name: 'Latitud', filterButton: true },
        { name: 'Longitud', filterButton: true },
        { name: 'Liga de maps', filterButton: false },
      ],
      rows: data.map(r => [r.nombre, r.fechaLocal, r.lat, r.lng, r.maps]),
    });

    // Auto estilo del header
    ws.getRow(1).font = { bold: true };

    const fileName = `ubicaciones_${ymdFrom}_${ymdTo}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

    await wb.xlsx.write(res);
    res.end();
  } catch (err: any) {
    console.error('[EXPORT] error=', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

// pages/api/coordinador/supervisores/export.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import ExcelJS from 'exceljs';

function parseISO(s?: string): Date | null {
  if (!s) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
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

  const day = fmtDay.format(d); // "11"
  const month = fmtMonth.format(d); // "agosto"
  const year = fmtYear.format(d); // "2025"

  // "8:17 p. m." → normalizamos a "8:17 pm"
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

    const from = parseISO(String(req.query.from || ''));
    const to = parseISO(String(req.query.to || ''));

    if (!from || !to) {
      res.status(400).json({ error: 'Parámetros "from" y "to" (ISO) son requeridos' });
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
      { header: 'Nombre del supervisor', key: 'nombre', width: 40 },
      { header: 'Fecha con hora (CDMX)', key: 'fechaLocal', width: 34 },
      { header: 'Latitud', key: 'lat', width: 14 },
      { header: 'Longitud', key: 'lng', width: 14 },
      { header: 'Liga de maps', key: 'maps', width: 42 },
    ];

    // Filas
    ws.addRows(data);

    // Dar formato de tabla (para filtros/estilo)
    ws.addTable({
      name: 'TablaPresente',
      ref: 'A1',
      headerRow: true,
      style: {
        theme: 'TableStyleMedium2',
        showRowStripes: true,
      },
      columns: [
        { name: 'Nombre del supervisor', filterButton: true },
        { name: 'Fecha con hora (CDMX)', filterButton: true },
        { name: 'Latitud', filterButton: true },
        { name: 'Longitud', filterButton: true },
        { name: 'Liga de maps', filterButton: false },
      ],
      rows: data.map(r => [r.nombre, r.fechaLocal, r.lat, r.lng, r.maps]),
    });

    // Auto estilo del header
    ws.getRow(1).font = { bold: true };

    const fileName = `ubicaciones_${from.toISOString().slice(0,10)}_${to.toISOString().slice(0,10)}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

    await wb.xlsx.write(res);
    res.end();
  } catch (err: any) {
    console.error('[EXPORT] error=', err);
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

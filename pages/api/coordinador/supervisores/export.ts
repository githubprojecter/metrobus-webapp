// pages/api/coordinador/supervisores/export.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import ExcelJS from 'exceljs';

export const config = { api: { responseLimit: false } };

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }

  const { from, to } = req.query as { from?: string; to?: string };
  if (!from || !to) return res.status(400).json({ error: 'Parámetros from y to requeridos' });

  const fromDate = new Date(from);
  const toDate = new Date(to);
  const maxRangeMs = 31 * 24 * 60 * 60 * 1000; // ~1 mes
  if ((+toDate - +fromDate) > maxRangeMs) {
    return res.status(400).json({ error: 'El rango no puede exceder un mes' });
  }

  // Exporta TODO el historial de ubicaciones en ese rango (de todos los supervisores)
  const rows = await prisma.ubicacionSupervisor.findMany({
    where: { timestamp: { gte: fromDate, lte: toDate } },
    include: { supervisor: { include: { user: true } } },
    orderBy: { timestamp: 'desc' },
    take: 20000, // ajusta si esperas más datos
  });

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Historial');

  ws.columns = [
    { header: 'Supervisor', key: 'supervisor', width: 32 },
    { header: 'Fecha/Hora', key: 'timestamp', width: 24 },
    { header: 'Latitud', key: 'latitud', width: 14 },
    { header: 'Longitud', key: 'longitud', width: 14 },
  ];

  rows.forEach(r => {
    const supervisor = [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno]
      .filter(Boolean).join(' ') || 'Supervisor';
    ws.addRow({
      supervisor,
      timestamp: r.timestamp.toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
      latitud: r.latitud,
      longitud: r.longitud,
    });
  });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', `attachment; filename="historial_${fromDate.toISOString().slice(0,10)}_${toDate.toISOString().slice(0,10)}.xlsx"`);

  await wb.xlsx.write(res);
  res.end();
});

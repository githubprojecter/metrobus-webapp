// pages/api/report/finalize.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { serverSocket } from '@/lib/socketServer';

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  // 1) Solo POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end();
    return;
  }

  // 2) Leemos el reporteId y los demás campos del body
  const {
    reportId,
    comentarios,
    ambulancia,
    policia,
    heridos,
  } = req.body as {
    reportId: number;
    comentarios: string;
    ambulancia: boolean;
    policia: boolean;
    heridos: boolean;
  };

  if (!reportId) {
    res.status(400).json({ error: 'Falta el campo reportId' });
    return;
  }

  try {
    // 3) Buscamos el reporte por su ID, incluyendo incidenteAsignado→panic
    const reporte = await prisma.reporteIncidente.findUnique({
      where: { id: reportId },
      include: {
        incidenteAsignado: {
          include: { panic: true }
        }
      }
    });

    if (!reporte) {
      res.status(404).json({ error: 'Reporte no encontrado' });
      return;
    }

    // 4) Actualizamos el reporte con los datos enviados
    await prisma.reporteIncidente.update({
      where: { id: reportId },
      data: {
        descripcion: comentarios,
        ambulancia,
        policia,
        heridos,
        estado: 'Finalizado'
      }
    });

    // 5) Marcamos el botón de pánico como atendido
    const panicId = reporte.incidenteAsignado?.panic?.id;
    if (panicId) {
      await prisma.botonPanico.update({
        where: { id: panicId },
        data: { atendido: true }
      });
    }

    // 6) Emitimos evento para detener ubicación en tiempo real
    const operadorId = reporte.incidenteAsignado?.panic?.operadorId;
    if (serverSocket && operadorId) {
      serverSocket.emit('operator:stop', { operadorId });
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('[FINALIZE REPORT]', error);
    res.status(500).json({ error: error.message });
  }
});

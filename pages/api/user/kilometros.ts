// pages/api/user/kilometros.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

type KilometrosDTO = {
  period: 'day' | 'fortnight' | 'month';
  kilometres: number;
};

export default requireRole(['Operador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<KilometrosDTO>
): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  // 1) Validar parámetro
  const period = req.query.period as string;
  if (!['day','fortnight','month'].includes(period)) {
    res.status(400).json({ period: 'day', kilometres: 0 });
    return;
  }

  // 2) Calcular fecha de inicio según el periodo
  const now = new Date();
  let startDate: Date;
  switch (period) {
    case 'day':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'fortnight':
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 15);
      break;
    case 'month':
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 30);
      break;
    default:
      startDate = new Date(0);
  }

  // 3) Obtener el ID del Operador en Prisma
  const userRec = await prisma.userRole.findUnique({
    where: { idFirebase: req.uid },
    include: { operador: true },
  });
  if (!userRec?.operador) {
    res.status(404).json({ period: 'day', kilometres: 0 });
    return;
  }
  const operadorId = userRec.operador.id;

  // 4) Traer registros de salida en ese rango
  const registros = await prisma.registroSalidaUnidad.findMany({
    where: {
      operadorId,
      fechaSalida: { gte: startDate },
    },
    select: {
      kmInicial: true,
      kmFinal: true,
    },
  });

  // 5) Sumar kilómetros recorridos
  const kilometres = registros.reduce((sum, r) => {
    const kmI = r.kmInicial;
    const kmF = r.kmFinal ?? kmI;
    return sum + (kmF - kmI);
  }, 0);

  // 6) Responder
  res.status(200).json({ period: period as any, kilometres });
});

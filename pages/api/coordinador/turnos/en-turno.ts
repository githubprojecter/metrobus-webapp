import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  const turno = (req.query.turno as 'MATUTINO'|'VESPERTINO'|'NOCTURNO') || 'MATUTINO';
  const now = new Date();
  const day = new Date(now.toISOString().slice(0,10)+'T00:00:00.000Z');

  // Para turno nocturno 20-04, si hora < 4am, usar el día anterior
  const hour = parseInt(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mexico_City', hour12:false, hour:'2-digit' }).format(now), 10);
  const effDay = (turno==='NOCTURNO' && hour < 4) ? new Date(day.getTime() - 86400000) : day;

  const rows = await prisma.turnoProgramado.findMany({
    where: { fecha: effDay, turno },
    include: { supervisor: { include: { user: true } } },
  });

  const out = rows.map(r => ({
    idFirebase: r.supervisor.user?.idFirebase ?? '',
    nombre: [r.supervisor.user?.nombre, r.supervisor.user?.apellidoPaterno, r.supervisor.user?.apellidoMaterno].filter(Boolean).join(' ') || 'Supervisor',
    telefono: r.supervisor.user?.telefono ?? null,
  })).filter(x => x.idFirebase);

  res.status(200).json(out);
});

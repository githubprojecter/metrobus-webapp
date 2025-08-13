import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';

export default requireRole(['Coordinador'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') { res.setHeader('Allow','POST'); return res.status(405).end(); }
  const { fecha, turno, supervisorIds } = req.body as { fecha:string; turno:'MATUTINO'|'VESPERTINO'|'NOCTURNO'; supervisorIds:number[] };
  if (!fecha || !turno || !Array.isArray(supervisorIds)) return res.status(400).json({ error: 'payload inválido' });
  const day = new Date(`${fecha}T00:00:00.000Z`);

  // Borra asignaciones existentes del día/turno y crea las nuevas
  await prisma.turnoProgramado.deleteMany({ where: { fecha: day, turno } });
  if (supervisorIds.length) {
    await prisma.turnoProgramado.createMany({
      data: supervisorIds.map(id => ({
        fecha: day, turno, supervisorId: id, coordinadorId: req.userRoleId!
      })),
      skipDuplicates: true,
    });
  }
  res.status(200).json({ success: true, count: supervisorIds.length });
});

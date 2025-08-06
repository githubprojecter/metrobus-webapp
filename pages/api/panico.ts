// pages/api/panico.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';
import { notifyRoleFCM } from '@/lib/notifications';

export default requireRole(['Operador', 'Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  // GET  /api/panico    -> solo Coordinador ve los pánicos sin atender
  // POST /api/panico    -> solo Operador envía un pánico con ubicación

  const { method, role, uid } = req;

  // 1) POST: Operador dispara pánico
  if (method === 'POST') {
    if (role !== 'Operador') {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate body
    const { motivo, latitud, longitud } = req.body as {
      motivo?: string;
      latitud: number;
      longitud: number;
    };

    // Buscar operador
    const userRec = await prisma.userRole.findUnique({
      where: { idFirebase: uid },
      include: { operador: true },
    });
    if (!userRec?.operador) {
      res.status(404).json({ error: 'Operador no encontrado' });
      return;
    }

    // Crear pánico
    const panic = await prisma.botonPanico.create({
      data: {
        operadorId: userRec.operador.id,
        motivo: motivo ?? null,
        latitud,
        longitud,
      },
    });

    await notifyRoleFCM(
      'Coordinador',
      '¡Alerta de pánico!',
      `Operador ${userRec.operador.id} solicita ayuda.`,
      { panicId: panic.id.toString() }
    );

    res.status(201).json(panic);
    return;
  }
  

  // 2) GET: Coordinador consulta pánicos abiertos
  if (method === 'GET') {
    if (role !== 'Coordinador') {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    const panicos = await prisma.botonPanico.findMany({
    where: { atendido: false },
    include: {
      operador: {
        include: {
          // <-- aquí enlazamos Operador → UserRole
          user: {
            select: {
              nombre: true,
              apellidoPaterno: true,
              apellidoMaterno: true,
            }
          }
        }
      }
    },
    orderBy: { timestamp: 'desc' },
  });

    const dto = panicos.map((p) => ({
      id: p.id,
      latitud: p.latitud,
      longitud: p.longitud,
      motivo: p.motivo,
      operador: {
        id: p.operador.id,
        nombre: p.operador.user.nombre,
        apellidoPaterno: p.operador.user.apellidoPaterno,
        apellidoMaterno: p.operador.user.apellidoMaterno,
        unidadAsignada: p.operador.unidadAsignada,
        rutaAsignada: p.operador.rutaAsignada,
      },
    }));

    res.status(200).json(dto);
    return;
  }

  // 3) Cualquier otro método no permitido
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
});

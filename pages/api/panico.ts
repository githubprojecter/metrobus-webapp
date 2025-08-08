// pages/api/panico.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { requireRole } from '@/lib/requireRole';
import { notifyRoleFCM } from '@/lib/notifications';
import axios from 'axios';

export default requireRole(['Operador', 'Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  const { method, role, uid } = req;

  // 1) POST: Operador dispara pánico
  if (method === 'POST') {
    if (role !== 'Operador') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { motivo, latitud, longitud } = req.body as {
      motivo?: string;
      latitud: number;
      longitud: number;
    };

    // Buscar usuario y operador
    const userRec = await prisma.userRole.findUnique({
      where: { idFirebase: uid },
      include: { operador: true },
    });
    if (!userRec?.operador) {
      return res.status(404).json({ error: 'Operador no encontrado' });
    }

    // Crear pánico en BD
    const panic = await prisma.botonPanico.create({
      data: {
        operadorId: userRec.operador.id,
        motivo: motivo ?? null,
        latitud,
        longitud,
      },
    });

    // 1.a) Emitir al servidor de sockets
    try {
      await axios.post(
        `${process.env.SOCKET_SERVER_URL}/emit-panic`,
        {
          id: panic.id,
          latitud: panic.latitud,
          longitud: panic.longitud,
          motivo: panic.motivo,
          atendido: panic.atendido,
          operador: {
            id: userRec.operador.id,
            nombre: userRec.nombre ?? '',
            apellidoPaterno: userRec.apellidoPaterno ?? '',
            unidadAsignada: userRec.operador.unidadAsignada ?? '',
            rutaAsignada: userRec.operador.rutaAsignada ?? '',
          },
        }
      );
    } catch (sockErr) {
      console.error('[emit-panic] Error al notificar Socket.IO:', sockErr);
      // no interrumpe el flujo principal
    }

    // 1.b) Notificar FCM al coordinador
    await notifyRoleFCM(
      'Coordinador',
      '¡Alerta de pánico!',
      `Operador ${userRec.operador.id} solicita ayuda.`,
      { panicId: panic.id.toString() }
    );

    return res.status(201).json(panic);
  }

  // 2) GET: Coordinador consulta pánicos abiertos
  if (method === 'GET') {
    if (role !== 'Coordinador') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const panicos = await prisma.botonPanico.findMany({
      where: { atendido: false },
      include: {
        operador: {
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
      orderBy: { timestamp: 'desc' },
    });

    const dto = panicos.map((p) => ({
      id: p.id,
      latitud: p.latitud,
      longitud: p.longitud,
      motivo: p.motivo,
      atendido: p.atendido,
      operador: {
        id: p.operador.id,
        nombre: p.operador.user.nombre,
        apellidoPaterno: p.operador.user.apellidoPaterno,
        apellidoMaterno: p.operador.user.apellidoMaterno,
        unidadAsignada: p.operador.unidadAsignada,
        rutaAsignada: p.operador.rutaAsignada,
      },
    }));

    return res.status(200).json(dto);
  }

  // 3) Métodos no permitidos
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
});

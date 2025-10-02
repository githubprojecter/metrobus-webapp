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

  // =========================================================
  // 1) POST: Operador dispara pánico  (SE CONSERVA)
  // =========================================================
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

    // Emitir al servidor de sockets (SE CONSERVA)
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

    // Notificar FCM al coordinador (SE CONSERVA)
    await notifyRoleFCM(
      'Coordinador',
      '¡Alerta de pánico!',
      `Operador ${userRec.operador.id} solicita ayuda.`,
      { panicId: panic.id.toString() }
    );

    return res.status(201).json(panic);
  }

  // =========================================================
  // 2) GET: Coordinador consulta pánicos abiertos (AMPLIADO)
  //     → incluye última asignación (assignedSupervisorId + datos)
  // =========================================================
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
        IncidenteAsignado: {
          orderBy: { fechaAsignacion: 'desc' },
          take: 1,
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
        },
      },
      orderBy: { timestamp: 'desc' },
    });

    const dto = panicos.map((p) => {
      const a = p.IncidenteAsignado?.[0];
      return {
        id: p.id,
        latitud: p.latitud,
        longitud: p.longitud,
        motivo: p.motivo,
        atendido: p.atendido,
        timestamp: p.timestamp,
        operador: {
          id: p.operador.id,
          nombre: p.operador.user.nombre,
          apellidoPaterno: p.operador.user.apellidoPaterno,
          apellidoMaterno: p.operador.user.apellidoMaterno,
          unidadAsignada: p.operador.unidadAsignada,
          rutaAsignada: p.operador.rutaAsignada,
        },
        // ← NUEVO
        assignedSupervisorId: a?.supervisorId ?? null,
        assignedSupervisor: a?.supervisor
          ? {
              id: a.supervisor.id,
              codigo: a.supervisor.codigo ?? null,
              nombre: a.supervisor.user?.nombre ?? null,
              apellidoPaterno: a.supervisor.user?.apellidoPaterno ?? null,
              apellidoMaterno: a.supervisor.user?.apellidoMaterno ?? null,
            }
          : null,
      };
    });

    return res.status(200).json(dto);
  }

  // =========================================================
  // 3) PUT: Coordinador re-asigna sin duplicar (NUEVO)
  //     - Actualiza la última IncidenteAsignado del panicId
  //     - Si no existe, la crea
  // =========================================================
  if (method === 'PUT') {
    if (role !== 'Coordinador') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { panicoId, supervisorId } = req.body as {
      panicoId?: number;
      supervisorId?: number;
    };

    if (!panicoId || !supervisorId) {
      return res.status(400).json({ error: 'panicoId y supervisorId son requeridos' });
    }

    // Verifica que el pánico exista y esté abierto
    const panic = await prisma.botonPanico.findUnique({
      where: { id: panicoId },
      select: { id: true, atendido: true, latitud: true, longitud: true },
    });

    if (!panic) return res.status(404).json({ error: 'Pánico no encontrado' });
    if (panic.atendido) {
      return res.status(409).json({ error: 'El pánico ya está marcado como atendido' });
    }

    // Upsert transaccional para evitar duplicados por carrera
    const updated = await prisma.$transaction(async (tx) => {
      const current = await tx.incidenteAsignado.findFirst({
        where: { panicId: panicoId },
        orderBy: { fechaAsignacion: 'desc' },
      });

      if (current) {
        return tx.incidenteAsignado.update({
          where: { id: current.id },
          data: {
            supervisorId,
            fechaAsignacion: new Date(),
            latitud: panic.latitud ?? current.latitud,
            longitud: panic.longitud ?? current.longitud,
          },
        });
      }

      return tx.incidenteAsignado.create({
        data: {
          panicId: panicoId,
          supervisorId,
          fechaAsignacion: new Date(),
          latitud: panic.latitud ?? 0,
          longitud: panic.longitud ?? 0,
        },
      });
    });

    return res.status(200).json({ ok: true, asignacion: updated });
  }

  // =========================================================
  // 4) Métodos no permitidos
  // =========================================================
  res.setHeader('Allow', ['GET', 'POST', 'PUT']);
  res.status(405).end('Method Not Allowed');
});

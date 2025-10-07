// pages/api/panico.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import { getPusher } from "@/lib/pusher";
import { requireRole } from '@/lib/requireRole';
import { notifyRoleFCM, notifyUserFCM } from '@/lib/notifications';

export default requireRole(['Operador', 'Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  const { method, role, uid } = req;
  // console.log(req.uid)

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

    // // Buscar usuario y operador
    const userRec = await prisma.userRole.findUnique({
      where: { idFirebase: uid },
      select: { 
        nombre:true,
        apellidoPaterno: true,
        operador: true },
    });
    if (!userRec?.operador) {
      return res.status(404).json({ error: 'Operador no encontrado' });
    }

    console.log(userRec)

    // Crear pánico en BD
    const panic = await prisma.botonPanico.create({
      data: {
        operadorId: userRec.operador.id,
        motivo: motivo ?? null,
        latitud,
        longitud,
      },
    });

    // console.log(panic)
      const payload = {
        id: panic.id,
        nombre:  `${userRec.nombre} ${userRec.apellidoPaterno}`,
        latitud: latitud,
        longitud: longitud,
        // timestamp: body.timestamp ?? Date.now(),
      }

    const pusher = getPusher() // ← reutilizas tu helper
    await pusher.trigger('public-panic', 'panic:raised', payload)

    // Notificar FCM al coordinador (SE CONSERVA)
    await notifyRoleFCM(
      'Coordinador',
      '¡Alerta de pánico!',
      `Operador ${userRec.operador.id} solicita ayuda.`,
      {
        panicId: String(panic.id),
        lat: String(latitud),
        lng: String(longitud),
        operadorNombre: `${userRec.nombre} ${userRec.apellidoPaterno}`,
      }
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

     // Obtenemos el userRoleId del supervisor asignado
  const supervisor = await prisma.supervisor.findUnique({
    where: { id: updated.supervisorId },
    select: {
      userRoleId: true,
      user: { select: { nombre: true, apellidoPaterno: true } },
    },
  });

  if (supervisor?.userRoleId) {
    const nombreSup = [supervisor.user?.nombre, supervisor.user?.apellidoPaterno]
      .filter(Boolean)
      .join(' ');

    await notifyUserFCM(
      supervisor.userRoleId,
      'Nueva incidencia asignada',
      `Folio ${updated.panicId}${nombreSup ? ` · Supervisor: ${nombreSup}` : ''}`,
      {
        type: 'INCIDENT_ASSIGNED',
        panicId: String(updated.panicId),
        asignacionId: String(updated.id),
      }
    );
  }

    return res.status(200).json({ ok: true, asignacion: updated });
  }

  // =========================================================
  // 4) Métodos no permitidos
  // =========================================================
  res.setHeader('Allow', ['GET', 'POST', 'PUT']);
  res.status(405).end('Method Not Allowed');
});

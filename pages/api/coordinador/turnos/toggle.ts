// pages/api/coordinador/turnos/toggle.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import prisma from '@/lib/prisma';
import type { Turno5 } from '@/lib/turnos';

// Helper: validar turno 'T1'..'T5' y castear a Turno5
function asTurno5(t: any): Turno5 {
  const v = String(t || '').trim().toUpperCase();
  if (v === 'T1' || v === 'T2' || v === 'T3' || v === 'T4' || v === 'T5') return v;
  throw new Error('turno inválido (usa T1..T5)');
}

// (opcional) validar YYYY-MM-DD rápido
function isYYYYMMDD(s: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(s);
}

export default requireRole(['Coordinador'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {
  // ========= LOGS DE ENTRADA =========
  // Nota: en tu requireRole típicamente tienes userRoleId / idFirebase
  console.log('[TOGGLE] method=', req.method);
  console.log('[TOGGLE] authHeader=', (req.headers.authorization ? 'present' : 'missing'));
  console.log('[TOGGLE] userRoleId=', req.userRoleId, ' idFirebase=', (req as any).idFirebase);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  try {
    const { fecha, turno: turnoRaw, supervisorId, assigned } = req.body as {
      fecha?: string;
      turno?: string;
      supervisorId?: number;
      assigned?: boolean;
    };

    console.log('[TOGGLE] body=', { fecha, turno: turnoRaw, supervisorId, assigned });

    // Validaciones de payload
    if (!fecha || !isYYYYMMDD(fecha)) {
      res.status(400).json({ error: 'fecha requerida en formato YYYY-MM-DD' });
      return;
    }
    if (typeof supervisorId !== 'number' || !Number.isFinite(supervisorId)) {
      res.status(400).json({ error: 'supervisorId requerido (number)' });
      return;
    }
    if (typeof assigned !== 'boolean') {
      res.status(400).json({ error: 'assigned requerido (boolean)' });
      return;
    }

    let turno: Turno5;
    try {
      turno = asTurno5(turnoRaw);
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? 'turno inválido' });
      return;
    }

    // Verificación de coordinador existente con el userRoleId inyectado
    if (!req.userRoleId) {
      // Si el token es inválido o expiró, requireRole normalmente responde 401,
      // pero si llegamos aquí sin userRoleId, devolvemos 401 explícito.
      console.warn('[TOGGLE] userRoleId ausente (posible token inválido/expirado)');
      res.status(401).json({ error: 'No autorizado (token inválido o sesión no válida)' });
      return;
    }

    const coord = await prisma.coordinador.findUnique({
      where: { userRoleId: req.userRoleId },
      select: { id: true },
    });

    if (!coord) {
      console.warn('[TOGGLE] Coordinador inexistente para userRoleId=', req.userRoleId);
      res.status(403).json({ error: 'Permiso denegado (no es Coordinador)' });
      return;
    }

    // Verificar que el supervisor exista
    const sup = await prisma.supervisor.findUnique({
      where: { id: supervisorId },
      select: { id: true },
    });
    if (!sup) {
      res.status(404).json({ error: 'Supervisor no encontrado' });
      return;
    }

    // ===== LÓGICA: asignar / desasignar =====
    if (assigned) {
      // Crear si no existe
      // Si tienes un índice único compuesto (fecha, turno, supervisorId) usa upsert con where: unique
      // Aquí hacemos create si no está (findFirst+create) para no depender del nombre del índice.
      const existente = await prisma.turnoProgramado.findFirst({
        where: { fecha: new Date(fecha), turno: turno as any, supervisorId },
        select: { id: true },
      });

      if (!existente) {
        await prisma.turnoProgramado.create({
          data: {
            fecha: new Date(fecha),
            turno: turno as any,
            supervisorId,
            coordinadorId: coord.id, // si tu esquema lo tiene
          },
        });
        console.log('[TOGGLE] creado turnoProgramado');
      } else {
        console.log('[TOGGLE] ya existía, no se duplica');
      }
    } else {
      // Eliminar asignación si existe
      const del = await prisma.turnoProgramado.deleteMany({
        where: { fecha: new Date(fecha), turno: turno as any, supervisorId },
      });
      console.log('[TOGGLE] deleteMany count=', del.count);
    }

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('[TOGGLE] error=', err);
    // Si `requireRole` ya validó token, aquí solemos tener 500s no autenticación;
    // aún así, devolvemos mensaje concreto si viene de Prisma/validación.
    res.status(500).json({ error: err?.message ?? 'Error interno' });
  }
});

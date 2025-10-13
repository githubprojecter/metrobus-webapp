// pages/api/reportes/incidentes.ts
import type { NextApiResponse } from "next";
import type { NextApiRequestWithUser } from "@/lib/requireRole";
import { requireRole } from "@/lib/requireRole";
import prisma from "@/lib/prisma";

const MX_TZ = "America/Mexico_City";

type ReportItemDTO = {
  reporteId: number;
  supervisorNombre: string | null;
  asignadoAt: string | null;
  reporteInicioAt: string | null;
  operadorNombre: string | null;
  panicoAt: string | null;
  fotos: string[];
  comentarios: string | null;
  estado: string | null;
};

export default requireRole(["Coordinador"])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse<ReportItemDTO[]>
) => {
  if (req.method !== "GET") {
    return res.status(405).json([]);
  }

  const { mode, from, to } = req.query as {
    mode?: string;
    from?: string;
    to?: string;
  };

  const isAllFinalizados = mode === "all-finalizados";

  // === Armamos `where` por rama para evitar usar variables sin asignar ===
  let where: any = {};

  if (isAllFinalizados) {
    // Sólo finalizados (sin rango)
    where = { estado: "Finalizado" };
  } else {
    // Calculamos el rango temporal aquí mismo
    const now = new Date();
    let fromDate: Date;
    let toDate: Date;

    if (mode === "day") {
      // Día actual en CDMX
      const y = new Intl.DateTimeFormat("en-CA", { timeZone: MX_TZ, year: "numeric" }).format(now);
      const m = new Intl.DateTimeFormat("en-CA", { timeZone: MX_TZ, month: "2-digit" }).format(now);
      const d = new Intl.DateTimeFormat("en-CA", { timeZone: MX_TZ, day: "2-digit" }).format(now);
      fromDate = new Date(`${y}-${m}-${d}T00:00:00`);
      toDate = new Date();
    } else if (mode === "range" && from && to) {
      fromDate = new Date(from);
      toDate = new Date(to);
    } else {
      // Por defecto: última semana
      toDate = new Date();
      fromDate = new Date(toDate);
      fromDate.setDate(fromDate.getDate() - 7);
      fromDate.setHours(0, 0, 0, 0);
    }

    where = { fecha: { gte: fromDate, lte: toDate } };
  }

  // === Consulta principal ===
  const rows = await prisma.reporteIncidente.findMany({
    where,
    orderBy: { fecha: "desc" },
    include: {
      supervisor: { include: { user: true } },
      incidenteAsignado: {
        include: {
          panic: { include: { operador: { include: { user: true } } } },
        },
      },
      fotos: true,
    },
  });

  const fullName = (u?: {
    nombre?: string | null;
    apellidoPaterno?: string | null;
    apellidoMaterno?: string | null;
  } | null) =>
    u
      ? [u.nombre, u.apellidoPaterno, u.apellidoMaterno]
          .filter(Boolean)
          .join(" ")
          .trim() || null
      : null;

  const data: ReportItemDTO[] = rows.map((r) => {
    const supervisorNombre = fullName(r.supervisor?.user ?? null);

    const asignadoAt =
      r.incidenteAsignado?.fechaAsignacion
        ? new Date(r.incidenteAsignado.fechaAsignacion).toISOString()
        : null;

    const reporteInicioAt = r.fecha ? new Date(r.fecha).toISOString() : null;

    const panicoAt =
      r.incidenteAsignado?.panic?.timestamp
        ? new Date(r.incidenteAsignado.panic.timestamp).toISOString()
        : null;

    const operadorNombre = fullName(r.incidenteAsignado?.panic?.operador?.user ?? null);

    return {
      reporteId: r.id,
      supervisorNombre,
      asignadoAt,
      reporteInicioAt,
      operadorNombre: operadorNombre ?? null,
      panicoAt,
      fotos: (r.fotos ?? []).map((f) => f.url),
      // `descripcion` no existe en tu schema; devolvemos null para mantener el DTO
      comentarios: null,
      estado: r.estado ?? null,
    };
  });

  return res.status(200).json(data);
});

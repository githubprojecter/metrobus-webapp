// /pages/api/admin/users/bulkCreate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { Role } from '@/lib/generated/prisma';


type IncomingRow = {
  idFirebase?: string;
  role?: string; // vendrá como string desde Excel; se normaliza al enum Role
  nombre?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  fotoPerfil?: string;     // <- se mapea a profilePhotoUrl
  telefono?: string;
  correo?: string;
  codigo?: string;         // solo aplica para Supervisor
};

type RowResult = {
  correo?: string;
  ok: boolean;
  id?: number;
  error?: string;
};

function norm(s?: unknown) {
  return (s ?? '').toString().trim();
}

function toRoleEnum(r: string): Role | null {
  const v = norm(r);
  // Aceptamos variantes con/ sin acentos / mayúsculas
  const map: Record<string, Role> = {
    'supervisor': Role.Supervisor,
    'operador': Role.Operador,
    'coordinador': Role.Coordinador,
    'dirección': Role.Dirección,
    'direccion': Role.Dirección,
    'patio': Role.Patio,
  };
  const key = v.toLowerCase();
  return map[key] ?? null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { rows } = req.body as { rows?: IncomingRow[] };
    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(400).json({ error: 'Body inválido: se espera { rows: IncomingRow[] } con al menos 1 elemento.' });
    }

    const results: RowResult[] = [];
    

    for (let i = 0; i < rows.length; i++) {
      const raw = rows[i] ?? {};
      

      const idFirebase = norm(raw.idFirebase);
      const roleRaw = norm(raw.role);
      const roleEnum = toRoleEnum(roleRaw); // tu función existente
      const codigo = norm((raw as any).codigo ?? (raw as any).Codigo ?? (raw as any)['código'] ?? (raw as any)['Código']);

    //   const roleEnum = toRoleEnum(raw.role ?? '');
      const nombre = norm(raw.nombre);
      const apellidoPaterno = norm(raw.apellidoPaterno);
      const apellidoMaterno = norm(raw.apellidoMaterno);
      const profilePhotoUrl = norm(raw.fotoPerfil);
      const telefono = norm(raw.telefono);
      const correo = norm(raw.correo);
    //   const codigo = norm(raw.codigo);

      // Validación mínima (igual que el formulario)
      if (!idFirebase || !roleEnum || !nombre || !correo) {
        results.push({
          correo,
          ok: false,
          error: `Fila ${i + 1}: faltan campos obligatorios (idFirebase, role, nombre, correo).`,
        });
        continue;
      }

      try {
        const out = await prisma.$transaction(async (tx) => {
          // 1) Crear UserRole
          const created = await tx.userRole.create({
            data: {
              idFirebase,
              role: roleEnum,
              nombre: nombre || undefined,
              apellidoPaterno: apellidoPaterno || undefined,
              apellidoMaterno: apellidoMaterno || undefined,
              profilePhotoUrl: profilePhotoUrl || undefined,
              telefono: telefono || undefined,
              correo: correo || undefined,
            },
            select: { id: true },
          });

          // 2) Crear sub-modelo según el rol (igual que harías en create.ts)
          switch (roleEnum) {
            case Role.Supervisor: {
              await tx.supervisor.create({
                data: {
                  userRoleId: created.id,
                  codigo: codigo || null, // opcional
                },
              });
              break;
            }
            case Role.Operador: {
              await tx.operador.create({
                data: {
                  userRoleId: created.id,
                  // Si después agregas columnas en el Excel (unidadAsignada, rutaAsignada),
                  // mapea aquí como opcional.
                },
              });
              break;
            }
            case Role.Coordinador: {
              await tx.coordinador.create({
                data: { userRoleId: created.id },
              });
              break;
            }
            case Role.Patio: {
              await tx.patio.create({
                data: { userRoleId: created.id },
              });
              break;
            }
            case Role.Dirección: {
              // Dirección no tiene sub-modelo en tu schema
              break;
            }
            default:
              break;
          }

          return created.id;
        });

        results.push({ correo, ok: true, id: out });
      } catch (err: any) {
        const msg =
          err?.code === 'P2002'
            ? 'Registro duplicado (idFirebase unique).'
            : err?.message || 'Error desconocido al crear.';
        results.push({ correo, ok: false, error: `Fila ${i + 1}: ${msg}` });
      }
    }

    return res.status(200).json({ results });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Error inesperado' });
  }
}

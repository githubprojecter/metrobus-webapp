import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

type Payload = {
  idFirebase: string,
  role: 'Supervisor' | 'Operador' | 'Coordinador' | 'Dirección' | 'Patio',
  nombre: string,
  apellidoPaterno?: string,
  apellidoMaterno?: string,
  fotoPerfil?: string,  // URL
  telefono?: string,
  correo: string,
  codigo?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    const body = req.body as Payload;
    console.log(body)

  if (!body.idFirebase || !body.role || !body.nombre || !body.correo) {
    return res.status(400).json({ ok:false, error:'Faltan campos obligatorios' });
  }

    // 2) Transacción: UserRole + tabla de rol
    await prisma.$transaction(async (tx) => {
      // Si ya existe UserRole con ese uid, no dupliques
      let ur = await tx.userRole.findUnique({ where: { idFirebase: body.idFirebase } });
      if (!ur) {
        ur = await tx.userRole.create({
          data: {
            idFirebase: body.idFirebase,
            role: body.role,
            nombre: body.nombre,
            apellidoPaterno: body.apellidoPaterno || null,
            apellidoMaterno: body.apellidoMaterno || null,
            profilePhotoUrl: body.fotoPerfil || null,
            telefono: body.telefono || null,
            correo: body.correo
          },
        });
        switch (ur.role) {
            case 'Supervisor': {
                    await tx.supervisor.create({ 
                        data: {
                            userRoleId: ur.id,
                            codigo: body.codigo || null
                        }, 
                    });
            break;
            }
            case 'Coordinador': {
                    await tx.coordinador.create({ 
                        data: {
                            userRoleId: ur.id,
                        }, 
                    });
            
            break;
            }
            case 'Operador': {
                    await tx.operador.create({ 
                        data: {
                            userRoleId: ur.id,
                        }, 
                    });

            break;
            }
            case 'Patio': {
                    await tx.patio.create({ 
                        data: {
                            userRoleId: ur.id,
                        }, 
                    });

            break;
            }
        }
      } else {
        console.log("Ya existe el usuario")
      }
    });

    return res.status(200).json({ ok:true });
  } catch (err: any) {
    console.error('[users/create] error', err?.message || err);
    return res.status(500).json({ ok: false, error: err?.message || 'Internal error' });
  }
}

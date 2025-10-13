// lib/requireRole.ts
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import type { Role } from '@/lib/generated/prisma';
import { adminAuth } from './firebaseAdmin';
import prisma from './prisma';

export interface NextApiRequestWithUser extends NextApiRequest {
  uid: string;
  role: Role;
  userRoleId: number;
}

export function requireRole(allowedRoles: Role[]) {
  return (
    handler: (req: NextApiRequestWithUser, res: NextApiResponse) => Promise<void>
  ): NextApiHandler => {
    const wrapper: NextApiHandler = async (req, res) => {
      // === CORS en TODAS las respuestas ===
      // Ajusta Origin si quieres permitir solo tu dominio/app.
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      // Preflight no lleva Authorization; debe salir 200.
      if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
      }

      // === Autenticación normal para métodos reales ===
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
      }
      const token = authHeader.split('Bearer ')[1];

      try {
        const decoded = await adminAuth.verifyIdToken(token);
        const firebaseUid = decoded.uid;

        const user = await prisma.userRole.findUnique({
          where: { idFirebase: firebaseUid },
        });

        if (!user || !allowedRoles.includes(user.role)) {
          return res.status(403).json({ error: 'Access denied' });
        }

        const reqWithUser = req as NextApiRequestWithUser;
        reqWithUser.uid = firebaseUid;
        reqWithUser.role = user.role;
        reqWithUser.userRoleId = user.id;

        await handler(reqWithUser, res);
      } catch {
        return res.status(401).json({ error: 'Invalid token' });
      }
    };
    return wrapper;
  };
}

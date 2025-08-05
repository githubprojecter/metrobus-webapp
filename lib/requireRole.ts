// lib/requireRole.ts
import type {
  NextApiRequest,
  NextApiResponse,
  NextApiHandler,
} from 'next';
import type { Role } from '@/pages/generated/prisma';
import { adminAuth } from './firebaseAdmin';
import prisma from './prisma';

/**
 * Extiende NextApiRequest para inyectar `uid` y `role`
 */
export interface NextApiRequestWithUser extends NextApiRequest {
  uid: string;
  role: Role;
}

/**
 * requireRole:
 *  - allowedRoles: lista de roles que pueden acceder
 *  - devuelve un wrapper que convierte un handler con NextApiRequestWithUser
 *    en un NextApiHandler estándar.
 */
export function requireRole(allowedRoles: Role[]) {
  return (
    handler: (
      req: NextApiRequestWithUser,
      res: NextApiResponse
    ) => Promise<void>
  ): NextApiHandler => {
    const wrapper: NextApiHandler = async (req, res) => {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith('Bearer ')) {
        return res
          .status(401)
          .json({ error: 'No token provided' });
      }
      const token = authHeader.split('Bearer ')[1];

      try {
        // Verificar JWT con Firebase Admin
        const decoded = await adminAuth.verifyIdToken(token);
        const firebaseUid = decoded.uid;

        // Buscar rol en base de datos
        const user = await prisma.userRole.findUnique({
          where: { idFirebase: firebaseUid },
        });
        if (
          user === null ||
          !allowedRoles.includes(user.role)
        ) {
          return res
            .status(403)
            .json({ error: 'Access denied' });
        }

        // Inyectar en la request extendida
        const reqWithUser = req as NextApiRequestWithUser;
        reqWithUser.uid = firebaseUid;
        reqWithUser.role = user.role;

        // Ejecutar el handler original
        await handler(reqWithUser, res);
      } catch {
        return res
          .status(401)
          .json({ error: 'Invalid token' });
      }
    };
    return wrapper;
  };
}

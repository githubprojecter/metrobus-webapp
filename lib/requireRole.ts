import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from './firebaseAdmin';
import prisma from './prisma';
import type { Role } from '@/pages/generated/prisma';

export function requireRole(allowedRoles: Role[]) {
  return (handler: NextApiHandler): NextApiHandler => {
    return async function (req: NextApiRequest, res: NextApiResponse) {
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

        // Inyectamos UID y rol en req for handler use
        (req as any).uid = firebaseUid;
        (req as any).role = user.role;

        return handler(req, res);
      } catch (e) {
        return res.status(401).json({ error: 'Invalid token' });
      }
    };
  };
}

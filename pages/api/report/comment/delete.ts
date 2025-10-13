import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import { del } from '@vercel/blob';

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  const { url } = req.body || {};
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Falta url' });
  }

  try {
    await del(url); // elimina del Blob storage
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('[report/comment/delete]', e);
    return res.status(500).json({ error: 'No se pudo eliminar la foto' });
  }
});

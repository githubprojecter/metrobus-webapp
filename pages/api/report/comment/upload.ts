// pages/api/report/comment/upload.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import { put } from '@vercel/blob';
import { IncomingForm, File as FormidableFile } from 'formidable';
import prisma from '@/lib/prisma';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

type Files = { files?: FormidableFile | FormidableFile[] };

export default requireRole(['Supervisor'])(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  try {
    // Supervisor actual (para carpeta)
    const sup = await prisma.supervisor.findUnique({
      where: { userRoleId: req.userRoleId },
      select: { id: true },
    });
    if (!sup) return res.status(403).json({ error: 'Supervisor no encontrado' });

    const form = new IncomingForm({ multiples: true, keepExtensions: true });
    const { files } = await new Promise<{ files: Files }>((resolve, reject) => {
      form.parse(req, (err, _fields, files) => (err ? reject(err) : resolve({ files })));
    });

    const toArray = (f?: Files['files']) => (Array.isArray(f) ? f : f ? [f] : []);
    const all = toArray(files.files);
    if (!all.length) return res.status(400).json({ error: 'Envía archivos en "files"' });

    // Fecha dd/mm/AAAA → subcarpetas dd/mm/AAAA
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = String(now.getFullYear());

    const urls: string[] = [];
    for (const f of all) {
      const stream = fs.createReadStream(f.filepath);
      const original = (f.originalFilename || 'image.jpg').replace(/\s+/g, '_');
      const key = `Evidencias/${sup.id}/${dd}/${mm}/${yyyy}/${Date.now()}-${original}`; // ✅ carpeta pedida
      const blob = await put(key, stream, { access: 'public' });
      urls.push(blob.url);
    }

    return res.status(200).json({ ok: true, urls });
  } catch (e) {
    console.error('[report/comment/upload]', e);
    return res.status(500).json({ error: 'upload_failed' });
  }
});

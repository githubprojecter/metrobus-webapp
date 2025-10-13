// pages/api/supervisor/comentarios/blob-upload.ts
import type { NextApiResponse } from 'next';
import { requireRole } from '@/lib/requireRole';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { put } from '@vercel/blob';
import formidable, { File as FormidableFile } from 'formidable';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

function yyyymmddParts(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return { y, m, dd };
}

export default requireRole(['Supervisor'])(
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: `Método ${req.method} no permitido` });
    }

    try {
      const form = formidable({ multiples: true, keepExtensions: true });
      const { files } = await new Promise<{ files: formidable.Files }>((resolve, reject) => {
        form.parse(req, (err, _fields, files) => (err ? reject(err) : resolve({ files })));
      });

      const pick = (x?: FormidableFile | FormidableFile[]) => (x ? (Array.isArray(x) ? x : [x]) : []);
      const all: FormidableFile[] = [
        ...pick(files.files as any),
        ...pick(files.file as any),
      ];

      if (!all.length) {
        return res.status(400).json({ message: 'Envía archivos en form-data con la key "files" o "file"' });
      }

      const { y, m, dd } = yyyymmddParts();
      const urls: string[] = [];

      for (const f of all) {
        const stream = fs.createReadStream(f.filepath);
        const original = f.originalFilename || 'image.jpg';
        const key = `Comentarios/${y}/${m}/${dd}/${Date.now()}-${original}`;
        const blob = await put(key, stream, {
          access: 'public',
          addRandomSuffix: false,
        });
        urls.push(blob.url);
      }

      return res.status(200).json({ ok: true, urls });
    } catch (e) {
      console.error('[comentarios/blob-upload] error', e);
      return res.status(500).json({ message: 'upload_failed' });
    }
  }
);

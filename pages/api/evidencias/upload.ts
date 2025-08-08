// pages/api/evidencias/upload.ts
import type { NextApiResponse } from 'next';
import type { NextApiRequestWithUser } from '@/lib/requireRole';
import { requireRole } from '@/lib/requireRole';
import { put } from '@vercel/blob';
import prisma from '@/lib/prisma';
import { IncomingForm, File as FormidableFile } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Files = {
  files?: FormidableFile | FormidableFile[];
};

export default requireRole(['Supervisor'])(async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
): Promise<void> => {

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  const form = new IncomingForm({ multiples: true, keepExtensions: true });

  form.parse(req, async (err, fields, files: Files) => {
    if (err) {
      console.error('Error al procesar imágenes:', err);
      return res.status(500).json({ message: 'Error al procesar imágenes' });
    }

    const reporteID = Number(fields.reporteID);
    if (!reporteID) {
      return res.status(400).json({ message: 'Falta idIncidente' });
    }

    // 1) Type guard: asegurar que recibimos archivos
    if (!files.files) {
      return res.status(400).json({ message: 'No se recibieron archivos' });
    }

    const archivos = Array.isArray(files.files)
      ? files.files
      : [files.files];

    try {
      const urls: string[] = [];

      for (const archivo of archivos) {
        // 1) Asegurarnos de que filepath existe
        if (!archivo.filepath) continue;

        // 1) Fallback si originalFilename es undefined
        const originalName = archivo.originalFilename ?? `upload-${Date.now()}.jpg`;

        // Subida al blob
        const stream = fs.createReadStream(archivo.filepath);
        const filename = `evidencias/${reporteID}/${Date.now()}-${originalName}`;
        const blob = await put(filename, stream, {
          access: 'public',
        });

        urls.push(blob.url);

        // // 2) Evitar duplicados en BD por URL
        // const existing = await prisma.fotoIncidente.findUnique({
        //   where: { url: blob.url },
        // });
        // if (!existing) {
          await prisma.fotoIncidente.create({
            data: {
              url: blob.url,
              reporteId: reporteID,
            },
          });
        // }
      }

      return res.status(200).json({ urls });
    } catch (error) {
      console.error('Error al subir imágenes:', error);
      return res.status(500).json({ message: 'Error al subir imágenes' });
    }
  });
});

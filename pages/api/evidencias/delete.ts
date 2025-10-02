// pages/api/evidencias/delete.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { del as blobDel } from '@vercel/blob';

// ⬇️ Ajusta aquí si tu modelo NO se llama FotoIncidente
const MODEL = 'fotoIncidente' as const; // 'fotoIncidente' | 'evidencia' | etc.

type Body = {
  id?: number | string;
  url?: string;
  reporteId?: number | string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
      res.setHeader('Allow', 'POST, DELETE');
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    // Admite params por body (POST) o query (DELETE)
    const b = (req.method === 'POST' ? req.body : req.query) as Body;

    const idNum = Number(b.id);
    const url = (b.url ?? '').toString().trim();
    const reporteIdNum = b.reporteId != null ? Number(b.reporteId) : undefined;

    if (!idNum || Number.isNaN(idNum)) {
      return res.status(400).json({ ok: false, error: 'id requerido' });
    }
    if (!url) {
      return res.status(400).json({ ok: false, error: 'url requerida' });
    }

    // (Opcional) Validación de auth si ya tienes middleware. Aquí solo leemos el header.
    // const auth = req.headers.authorization; // "Bearer <token>"
    // TODO: si deseas, validar con Firebase Admin aquí.

    // 1) Verificar existencia en BD (y opcionalmente pertenencia al reporte)
    // Usamos acceso dinámico al modelo para no romper el build si el nombre difiere.
    const anyPrisma = prisma as any;
    const where: any = { id: idNum };
    if (reporteIdNum) where.reporteId = reporteIdNum;

    const row = await anyPrisma[MODEL].findUnique?.({ where: { id: idNum } });
    if (!row) {
      // Si no existe en BD, igual intentamos borrar el blob para no dejar basura
      await safeBlobDelete(url);
      return res.status(200).json({ ok: true, note: 'Registro no existía. Blob intentado borrar.' });
    }

    // Si pasas reporteId y quieres validar pertenencia:
    if (reporteIdNum && row.reporteId && row.reporteId !== reporteIdNum) {
      return res.status(409).json({ ok: false, error: 'La evidencia no pertenece a ese reporte.' });
    }

    // 2) Borrar primero en BD (para no dejar referencia colgante si falla blob)
    await anyPrisma[MODEL].delete?.({ where: { id: idNum } });

    // 3) Borrar blob
    await safeBlobDelete(url);

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('[evidencias/delete] error', err?.message || err);
    return res.status(500).json({ ok: false, error: err?.message || 'Internal error' });
  }
}

// -- helpers --

async function safeBlobDelete(url: string) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      console.warn('[blob] BLOB_READ_WRITE_TOKEN no definido; omitiendo delete');
      return;
    }
    await blobDel(url, { token });
  } catch (e) {
    console.warn('[blob] delete fallo', e);
  }
}

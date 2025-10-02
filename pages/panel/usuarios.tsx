import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import ExcelJS from 'exceljs';

type Role = 'Supervisor'|'Operador'|'Coordinador'|'Dirección'|'Patio';

const REQUIRED_HEADERS = [
  'idFirebase','role','nombre','apellidoPaterno','apellidoMaterno','fotoPerfil','telefono','correo'
] as const;

export default function Usuarios() {
  // --- Individual ---
  const [idFirebase, setIdFirebase] = useState('');
  const [role, setRole] = useState<Role>('Supervisor');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(''); // URL opcional
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  // NUEVO: campo 'codigo' solo para Supervisor
  const [codigo, setCodigo] = useState('');

  const [busy, setBusy] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const pushLog = (s: string) => setLogs(prev => [s, ...prev]);

  // Validación obligatorios (idFirebase, role, nombre, correo)
  const canSubmit = useMemo(() =>
    !!idFirebase.trim() && !!role && !!nombre.trim() && !!correo.trim()
  , [idFirebase, role, nombre, correo]);

  async function createOne() {
    if (!canSubmit) return;
    setBusy(true);
    try {
      const body: any = {
        idFirebase: idFirebase.trim(),
        role,
        nombre: nombre.trim(),
        apellidoPaterno: apellidoPaterno.trim() || undefined,
        apellidoMaterno: apellidoMaterno.trim() || undefined,
        fotoPerfil: fotoPerfil.trim() || undefined,
        telefono: telefono.trim() || undefined,
        correo: correo.trim(),
        // NUEVO: solo incluir 'codigo' si el rol es Supervisor y hay valor
        ...(role === 'Supervisor' && codigo.trim() ? { codigo: codigo.trim() } : {}),
      };

      const resp = await fetch(`/api/admin/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const j = await resp.json();
      if (!resp.ok) throw new Error(j?.error || 'Error al crear usuario');
      pushLog(`✔ Creado: ${correo} (${role})`);
      // limpia
      setIdFirebase(''); setNombre(''); setApellidoPaterno(''); setApellidoMaterno('');
      setFotoPerfil(''); setTelefono(''); setCorreo('');
      setCodigo(''); // limpiar también el código
    } catch (e:any) {
      pushLog(`✖ Falló: ${correo} — ${e.message}`);
    } finally {
      setBusy(false);
    }
  }

  // --- Masivo ---
  const [bulkFile, setBulkFile] = useState<File | null>(null);

  function cellToString(v: any): string {
    if (v == null) return '';
    if (typeof v === 'string') return v.trim();
    if (typeof v === 'number') return String(v).trim();
    if (typeof v === 'object') {
        // ExcelJS a veces da { text, hyperlink } o { richText: [...] }
        if ('text' in v && typeof (v as any).text === 'string') return (v as any).text.trim();
        if ('richText' in v && Array.isArray((v as any).richText)) {
        return (v as any).richText.map((t: any) => t.text ?? '').join('').trim();
        }
        if ('hyperlink' in v && typeof (v as any).hyperlink === 'string') return (v as any).hyperlink.trim();
    }
    return String(v).trim();
    }

async function handleBulk() {
    if (!bulkFile) return;
    setBusy(true);
    try {
        const wb = new ExcelJS.Workbook();
        const buf = await bulkFile.arrayBuffer();
        await wb.xlsx.load(buf);
        const ws = wb.worksheets[0];
        if (!ws) throw new Error('Excel vacío');

        // Validar encabezados exactos y orden (incluye 'codigo')
        const headerRow = ws.getRow(1);
        const headers = REQUIRED_HEADERS.map((_, i) =>
        String(headerRow.getCell(i + 1).value || '').trim()
        );
        const expected = REQUIRED_HEADERS.join('|').toLowerCase();
        const got = headers.join('|').toLowerCase();
        if (expected !== got) {
        throw new Error(`Encabezados inválidos. Esperado: ${expected}  —  Recibido: ${got}`);
        }

        const rows: any[] = [];
        ws.eachRow((row, rowNum) => {
        if (rowNum === 1) return; // header

        const idFirebase = cellToString(row.getCell(1).value);
        const roleRaw = cellToString(row.getCell(2).value);
        const role = roleRaw.replace(/\s+/g, ' ').trim(); // normaliza espacios
        const nombre = cellToString(row.getCell(3).value);
        const apellidoPaterno = cellToString(row.getCell(4).value);
        const apellidoMaterno = cellToString(row.getCell(5).value);
        const fotoPerfil = cellToString(row.getCell(6).value);
        const telefono = cellToString(row.getCell(7).value);
        const correo = cellToString(row.getCell(8).value);
        const codigo = cellToString(row.getCell(9).value); // SIEMPRE lo leemos

        // Requeridos mínimos (igual que el formulario)
        if (!idFirebase || !role || !nombre || !correo) return;

        rows.push({
            idFirebase,
            role,
            nombre,
            apellidoPaterno: apellidoPaterno || undefined,
            apellidoMaterno: apellidoMaterno || undefined,
            fotoPerfil: fotoPerfil || undefined,
            telefono: telefono || undefined,
            correo,
            // IMPORTANTE: siempre mandamos 'codigo'; el backend decide si usarlo
            codigo: codigo || undefined,
        });
        });

        if (!rows.length) throw new Error('No se encontraron filas válidas');

        const resp = await fetch(`/api/admin/users/bulkCreate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows }),
        });
        const j = await resp.json();
        if (!resp.ok) throw new Error(j?.error || 'Error en carga masiva');

        for (const r of j.results as Array<{ email?: string; correo?: string; ok: boolean; error?: string }>) {
        const id = r.correo || r.email || 'fila';
        pushLog(r.ok ? `✔ Creado: ${id}` : `✖ Falló: ${id} — ${r.error || 'desconocido'}`);
        }
    } catch (e: any) {
        pushLog(`✖ Error masivo: ${e.message}`);
    } finally {
        setBusy(false);
    }
    }

  return (
    <>
      <Head><title>Usuarios — Admin</title></Head>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-extrabold mb-4">Alta de usuarios</h1>

        {/* Individual */}
        <div className="rounded-xl border p-4 mb-8">
          <h2 className="font-bold mb-3">Crear individual</h2>
          <div className="grid gap-3">
            <input className="border rounded px-3 py-2" placeholder="idFirebase *" value={idFirebase} onChange={e=>setIdFirebase(e.target.value)} />
            <select className="border rounded px-3 py-2" value={role} onChange={e=>setRole(e.target.value as Role)}>
              <option>Supervisor</option>
              <option>Operador</option>
              <option>Coordinador</option>
              <option>Dirección</option>
              <option>Patio</option>
            </select>

            {/* NUEVO: campo visible solo para rol Supervisor */}
            {role === 'Supervisor' && (
              <input
                className="border rounded px-3 py-2"
                placeholder="Código (solo Supervisores)"
                value={codigo}
                onChange={e=>setCodigo(e.target.value)}
              />
            )}

            <input className="border rounded px-3 py-2" placeholder="Nombre *" value={nombre} onChange={e=>setNombre(e.target.value)} />
            <input className="border rounded px-3 py-2" placeholder="Apellido paterno" value={apellidoPaterno} onChange={e=>setApellidoPaterno(e.target.value)} />
            <input className="border rounded px-3 py-2" placeholder="Apellido materno" value={apellidoMaterno} onChange={e=>setApellidoMaterno(e.target.value)} />
            <input className="border rounded px-3 py-2" placeholder="URL foto de perfil" value={fotoPerfil} onChange={e=>setFotoPerfil(e.target.value)} />
            <input className="border rounded px-3 py-2" placeholder="Teléfono" value={telefono} onChange={e=>setTelefono(e.target.value)} />
            <input className="border rounded px-3 py-2" placeholder="Correo *" value={correo} onChange={e=>setCorreo(e.target.value)} />

            <button
              disabled={busy || !canSubmit}
              className={`px-4 py-2 rounded font-bold ${canSubmit ? 'bg-black text-white' : 'bg-slate-300 text-slate-600 cursor-not-allowed'}`}
              onClick={createOne}
              title={!canSubmit ? 'Completa los campos obligatorios' : 'Crear usuario'}
            >
              {busy ? 'Creando…' : 'Crear usuario'}
            </button>
            <p className="text-xs text-slate-500">* Obligatorios: idFirebase, Rol, Nombre, Correo</p>
          </div>
        </div>

        {/* Masivo */}
        <div className="rounded-xl border p-4 mb-6">
          <h2 className="font-bold mb-3">Carga masiva (Excel)</h2>
          <input type="file" accept=".xlsx" onChange={e=>setBulkFile(e.target.files?.[0] ?? null)} />
          <div className="mt-3">
            <button disabled={busy || !bulkFile} className="bg-black text-white px-4 py-2 rounded font-bold" onClick={handleBulk}>
              {busy ? 'Procesando…' : 'Subir Excel'}
            </button>
          </div>
          <p className="text-sm text-slate-600 mt-3">
            Encabezados exactos y en este orden: <b>{REQUIRED_HEADERS.join(' | ')}</b>
          </p>
        </div>

        {/* Logs */}
        <div className="rounded-xl border p-4">
          <h2 className="font-bold mb-3">Registro</h2>
          <ul className="text-sm space-y-1">
            {logs.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

// src/lib/liveStore.ts
type LivePoint = { latitud: number; longitud: number; timestamp: number };

const TTL_MS = 120_000; // 2 min: después de esto se considera “sin señal”
const store = new Map<string, LivePoint>(); // key = idFirebase

function prune() {
  const now = Date.now();
  for (const [k, v] of store.entries()) {
    if (now - v.timestamp > 10 * TTL_MS) store.delete(k); // hard-prune 20 min
  }
}

export function liveSet(idFirebase: string, p: LivePoint) {
  store.set(idFirebase, p);
}

export function liveGet(idFirebase: string) {
  return store.get(idFirebase) || null;
}

export function liveGetAll() {
  prune();
  return Array.from(store.entries()).map(([idFirebase, v]) => ({ idFirebase, ...v }));
}

export function liveGetMany(ids: string[]) {
  prune();
  return ids
    .map((idFirebase) => {
      const v = store.get(idFirebase);
      return v ? { idFirebase, ...v } : null;
    })
    .filter(Boolean) as Array<{ idFirebase: string } & LivePoint>;
}

export function isFresh(ts: number) {
  return Date.now() - ts <= TTL_MS;
}

// src/lib/pusher.ts
import Pusher from "pusher";

let _server: Pusher | null = null;

export function getPusher() {
  if (_server) return _server;
  const {
    PUSHER_APP_ID,
    PUSHER_KEY,
    PUSHER_SECRET,
    PUSHER_CLUSTER,
  } = process.env;

  if (!PUSHER_APP_ID || !PUSHER_KEY || !PUSHER_SECRET || !PUSHER_CLUSTER) {
    throw new Error("Faltan envs de Pusher: PUSHER_APP_ID/KEY/SECRET/CLUSTER");
  }

  _server = new Pusher({
    appId: PUSHER_APP_ID,
    key: PUSHER_KEY,
    secret: PUSHER_SECRET,
    cluster: PUSHER_CLUSTER,
    useTLS: true,
  });
  return _server;
}

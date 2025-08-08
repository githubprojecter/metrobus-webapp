// lib/socketServer.ts
import { Server as HTTPServer } from 'http'
import { Server as IOServer } from 'socket.io'

export let serverSocket: IOServer | null = null;

export function initSocket(server: HTTPServer) {
  if (!serverSocket) {
    serverSocket = new IOServer(server, {
      cors: { origin: '*' },
    });
    console.log('[SOCKET] Servidor iniciado');
  }
  return serverSocket;
}
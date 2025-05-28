import WebSocket, { WebSocketServer } from "ws";

export default interface ServerWebSocket {
  register(event: string, callback: Function): Promise<void>;
}

export class ServerWebSocketWS implements ServerWebSocket {
  readonly wss: WebSocketServer;
  readonly events: Map<string, Function> = new Map();

  constructor(server: any) {
    this.wss = new WebSocketServer({ server });

    this.wss.on("connection", (socket: WebSocket) => {
      socket.on("message", async (message: WebSocket.Data) => {
        try {
          // `message` pode ser Buffer ou string
          const msgString = typeof message === "string" ? message : message.toString();
          const { event, data } = JSON.parse(msgString);

          const callback = this.events.get(event);
          if (!callback) return;

          const output = await callback(data);
          if (output) {
            socket.send(JSON.stringify({ event, ...output }));
          }
        } catch (e: any) {
          socket.send(JSON.stringify({ error: e.message }));
          console.error(`Erro: ${e.message}`);
        }
      });
    });
  }

  public async register(event: string, callback: Function) {
    this.events.set(event, callback);
  }
}

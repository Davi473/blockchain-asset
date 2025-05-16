export default interface WsServer {
    register (event: string, callback: Function): void;
}

import { WebSocketServer, WebSocket } from "ws";

export class ServerWebSocket implements WsServer {
    private wss: WebSocketServer;
    private events: Map<string, Function> = new Map();

    constructor(port: number) {
        this.wss = new WebSocketServer({ port });

        this.wss.on("connection", (ws: WebSocket) => {
            ws.on("message", async (message: string) => {
                try {
                    const { event, data } = JSON.parse(message.toString());

                    const callback = this.events.get(event);
                    if (!callback) return;

                    const output = await callback(data);
                    if (output) {
                        ws.send(JSON.stringify({ event, ...output }));
                    }
                } catch (e: any) {
                    ws.send(JSON.stringify({ error: e.message }));
                    console.error(`Erro: ${e.message}`);
                }
            });
        });
    }

    public register(event: string, callback: Function): void {
        this.events.set(event, callback);
    }
}


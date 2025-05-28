import { Server } from "socket.io"

export class ServerWebSocket {
   
    constructor(server) {
        this.wss = new Server(server);
        this.events = new Map();
        this.wss.on("connection", (socket) => {
            ws.on("message", async (message) => {
                try {
                    const { event, data } = JSON.parse(message.toString());

                    const callback = this.events.get(event);
                    if (!callback) return;

                    const output = await callback(data);
                    if (output) {
                        ws.send(JSON.stringify({ event, ...output }));
                    }
                } catch (e) {
                    ws.send(JSON.stringify({ error: e.message }));
                    console.error(`Erro: ${e.message}`);
                }
            });
        });
    }

    register(event, callback) {
        this.events.set(event, callback);
    }
}
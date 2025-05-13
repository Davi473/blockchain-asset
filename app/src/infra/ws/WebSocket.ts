export default interface WsServer {
    register (event: string, callback: Function): void;
}

import { WebSocketServer } from "ws";

export class ServerWebSocket implements WsServer {
    private wss: WebSocketServer;

    constructor(port: number) {
        this.wss = new WebSocketServer({ port });
    }

    public register(event: string, callback: Function): void {
        this.wss.on('connection', (ws) => {
            ws.on(event, (message) => {
                try {
                    const output = callback(message);
                    if (output) {
                        ws.send(JSON.stringify(output)); 
                    }
                } catch (e: any) {
                    ws.send(JSON.stringify({ message: e.message }));
                    console.log(`Error message: ${e.message}`);
                }
            });
        });
    }
}

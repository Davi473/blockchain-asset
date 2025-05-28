import ServerWebSocket from "../web/ws/Socket";

export default class BlockchainSocketController {
    constructor(
        socket: ServerWebSocket
    ) {
        socket.register("ping", (data: any) => {
            console.log("novo cliente conection");
            return { response: "pong", received: data };
        });
    }
}
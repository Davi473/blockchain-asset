export default class BlockChainSocketController {
    constructor(
        socket
    ) {
        socket.register("get", () => {
            console.log("novo cliente conection");
            return "Olá, Http aqui";
        });
    }
}
export default class BlockChainHttpController {
    constructor(
        http
    ) {
        http.register("get", "/", () => {
            return "Olá, Http aqui";
        });
    }
}
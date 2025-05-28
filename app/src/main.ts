import BlockchainHttpController from "./infra/controller/BlockChainHttpController";
import BlockchainSocketController from "./infra/controller/BlockChainSocketController";
import { HttpServerExpress } from "./infra/web/http/HttpServer";
import { ServerWebSocketWS } from "./infra/web/ws/Socket";
import http from "http";

const app = new HttpServerExpress();
const server = http.createServer(app.server);
const socket = new ServerWebSocketWS(server);

new BlockchainHttpController(app);
new BlockchainSocketController(socket);

server.listen(3000, () => console.log("Server rodando em porta 3000"));
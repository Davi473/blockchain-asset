import BlockChainHttpController from "./src/infra/controller/BlockChainHttpController.js";
import BlockChainSocketController from "./src/infra/controller/BlockChainSocketController.js";
import { HttpServerExpress } from "./src/infra/web/http/HttpServer.js";
import { ServerWebSocket } from "./src/infra/web/ws/Socket.js";
import http from "http";

const app = new HttpServerExpress();
const server = http.createServer(app.server);
const socket = new ServerWebSocket(server);

new BlockChainHttpController(app);
new BlockChainSocketController(socket);

server.listen(3000, () => console.log("Server rodando em porta 3000"));
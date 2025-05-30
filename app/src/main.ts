import BlockchainSocketController from "./infra/controller/BlockchainSocketController";
import GetForQuantityUseCase from "./application/usecase/http/GetForQuantityUseCase";
import BlockchainHttpController from "./infra/controller/BlockchainHttpController";
import GetTotalValueUseCase from "./application/usecase/http/GetTotalValueUseCase";
import GetLastBlockUseCase from "./application/usecase/http/GetLastBlockUseCase";
import TransactionUseCase from "./application/usecase/http/TransactionUseCase";
import GetBlocksUseCase from "./application/usecase/http/GetBlocksUseCase";
import { HttpServerExpress } from "./infra/web/http/HttpServer";
import { ServerWebSocketWS } from "./infra/web/ws/Socket";
import Blockchain from "./domain/entity/Blockchain";
import http from "http";

const app = new HttpServerExpress();
const server = http.createServer(app.server);
const socket = new ServerWebSocketWS(server);

const BLOCKCHAIN = new Blockchain();

const getBlocksUseCase = new GetBlocksUseCase(BLOCKCHAIN);
const getLastBlockUseCase = new GetLastBlockUseCase(BLOCKCHAIN);
const getForQuantityUseCase = new GetForQuantityUseCase(BLOCKCHAIN);
const transactionUseCase = new TransactionUseCase(BLOCKCHAIN);
const getTotalValueUseCase = new GetTotalValueUseCase(BLOCKCHAIN);

new BlockchainHttpController(app, 
    getBlocksUseCase, getLastBlockUseCase,
    getForQuantityUseCase, transactionUseCase,
    getTotalValueUseCase);
new BlockchainSocketController(socket);

server.listen(3000, () => console.log("Server rodando em porta 3000"));
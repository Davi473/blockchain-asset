import LastBlock from "./application/usecase/lastBlock";
import BlockChain from "./domain/entity/Blockchain";
import BlockChainController from "./infra/controller/BlockChainController";
import { ServerWebSocket } from "./infra/ws/WebSocket";

const PORT = 3009;
const WS = new ServerWebSocket(PORT);

const BLOCKCHAIN = new BlockChain();

const lastBlockUseCase = new LastBlock(BLOCKCHAIN);

new BlockChainController(WS, lastBlockUseCase);
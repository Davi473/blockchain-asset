import GetBlocks from "./application/usecase/getBlocks";
import GetLastBlock from "./application/usecase/getLastBlock";
import BlockChain from "./domain/entity/Blockchain";
import BlockChainController from "./infra/controller/BlockChainController";
import { ServerWebSocket } from "./infra/ws/WebSocket";

const PORT = 3009;
const WS = new ServerWebSocket(PORT);

const BLOCKCHAIN = new BlockChain();

const getLastBlockUseCase = new GetLastBlock(BLOCKCHAIN);
const getBlocksUseCase = new GetBlocks(BLOCKCHAIN)

new BlockChainController(WS, getLastBlockUseCase, getBlocksUseCase);
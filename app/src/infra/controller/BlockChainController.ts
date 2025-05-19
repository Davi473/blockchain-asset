import GetBlocks from "../../application/usecase/getBlocks";
import GetLastBlock from "../../application/usecase/getLastBlock";
import WsServer from "../ws/WebSocket";

export default class BlockChainController {
    
    constructor (
        private readonly wsServer: WsServer,
        private readonly lastBlock: GetLastBlock,
        private readonly blocks: GetBlocks
    ) {
        this.wsServer.register("blocks", async (data: string) => {
            const output = await this.blocks.execute();
            return { blocks: output };
        });
        this.wsServer.register("lastBlock", async () => {
            const output = await this.lastBlock.execute();
            return { lastBlock: output };
        });
    }
}
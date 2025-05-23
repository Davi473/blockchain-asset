import GetBlocks from "../../application/usecase/getBlocks";
import GetLastBlock from "../../application/usecase/getLastBlock";
import TransactionUseCase from "../../application/usecase/transaction";
import WsServer from "../ws/WebSocket";

export default class BlockChainController {
    
    constructor (
        private readonly wsServer: WsServer,
        private readonly lastBlock: GetLastBlock,
        private readonly blocks: GetBlocks,
        private readonly transaction: TransactionUseCase
    ) {
        this.wsServer.register("blocks", async (data: string) => {
            const output = await this.blocks.execute();
            return { blocks: output };
        });
        this.wsServer.register("lastBlock", async () => {
            const output = await this.lastBlock.execute();
            return { lastBlock: output };
        });
        this.wsServer.register("transaction", async (data: any) => {
            const input = data.transaction;
            const output = await this.transaction.execute(input);
            return { hash: output };
        })
    }
}
import LastBlock from "../../application/usecase/lastBlock";
import BlockChain from "../../domain/entity/Blockchain";
import Transaction from "../../domain/entity/Transaction";
import WsServer from "../ws/WebSocket";

export default class BlockChainController {
    
    constructor (
        private readonly wsServer: WsServer,
        private readonly lastBlock: LastBlock
    ) {
        this.wsServer.register("blocks", async (data: string) => {
            console.log(data);
            return { response: "recebi"};
        });
        this.wsServer.register("lastBlock", async () => {
            const output = await lastBlock.execute();
            return { output };
        });
    }
}
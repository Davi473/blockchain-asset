import GetBlocksUseCase from "../../application/usecase/http/GetBlocksUseCase";
import GetForQuantityUseCase from "../../application/usecase/http/GetForQuantityUseCase";
import GetLastBlockUseCase from "../../application/usecase/http/GetLastBlockUseCase";
import GetTotalValueUseCase from "../../application/usecase/http/GetTotalValueUseCase";
import TransactionUseCase from "../../application/usecase/http/TransactionUseCase";
import HttpServer from "../web/http/HttpServer";

export default class BlockchainHttpController {
    constructor(
        private http: HttpServer,
        private getBlocksUseCase: GetBlocksUseCase,
        private getLastBlockUseCase: GetLastBlockUseCase,
        private getForQuantityUseCase: GetForQuantityUseCase,
        private transactionUseCase: TransactionUseCase,
        private getTotalValueUseCase: GetTotalValueUseCase
    ) {
        http.register("get", "/block", async () => {
            const output = await this.getBlocksUseCase.execute();
            return output;
        });
        http.register("get", "/block/last", async () => {
            const output = await this.getLastBlockUseCase.execute();
            return output;
        });
        http.register("get", "/block/:quantity", async (req: any, res: any) => {
            const input = req.params;
            const output = await this.getForQuantityUseCase.execute(input);
            return output;
        });
        http.register("post", "/transaction", async (req: any, res: any) => {
            const input = req.body;
            const output = await this.transactionUseCase.execute(input);
            return output;
        });
        http.register("get", "/amount/:publicKey", async (req: any, res: any) => {
            const input = req.params;
            const output = await this.getTotalValueUseCase.execute(input);
            return output;
        });
    }
}
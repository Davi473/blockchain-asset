import GetBlocksUseCase from "../../application/usecase/http/GetBlocksUseCase";
import GetForQuantityUseCase from "../../application/usecase/http/GetForQuantityUseCase";
import GetLastBlockUseCase from "../../application/usecase/http/GetLastBlockUseCase";
import TransactionUseCase from "../../application/usecase/http/TransactionUseCase";
import HttpServer from "../web/http/HttpServer";

export default class BlockchainHttpController {
    constructor(
        private http: HttpServer,
        private getBlocksUseCase: GetBlocksUseCase,
        private getLastBlockUseCase: GetLastBlockUseCase,
        private getForQuantityUseCase: GetForQuantityUseCase,
        private transactionUseCase: TransactionUseCase
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
            const input = req.query;
            const output = await this.getForQuantityUseCase.execute(input);
            return output;
        });
        http.register("post", "/transaction", async (req: any, res: any) => {
            const input = req.body;
            const output = await this.transactionUseCase.execute(input);
            return output;
        });
    }
}
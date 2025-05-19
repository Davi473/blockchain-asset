import BlockChain from "../../domain/entity/Blockchain";
import UseCase from "./UseCase";

export default class GetBlocks implements UseCase {
    constructor (
        private readonly blockchain: BlockChain
    ) {}

    public async execute(): Promise<Output[]> {
        const block = this.blockchain.getBlocks();
        return block;
    }
}
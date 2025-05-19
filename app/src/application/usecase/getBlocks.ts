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

type Output = {
    block_height: number,
    block_hash: string,
    previous_block_hash: string,
    merkle_root: string,
    timestamp: string,
    difficulty: number,
    nonce: number,
    version: number,
    size: number,
    transaction: any[],
}
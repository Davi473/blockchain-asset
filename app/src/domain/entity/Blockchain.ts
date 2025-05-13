import Block from "./Block";
import Transaction from "./Transaction";

export default class BlockChain {
    private chain: Block[] = [];
    private mempoll: Transaction[] = [];
    private readonly VERSION = 1

    constructor() {
        this.chain.push(this.createGenesis());
    }

    private createGenesis(): Block {
        const merkleRoot = Block.calculateMerkleRoot([]);
        const timestamp = Date.now().toString();
        const hashBlock = Block.calculateHash(0, "", merkleRoot, timestamp, 0, 0, this.VERSION);
        const size = Block.calculateSize([]);
        const blockGenesis = new Block(0, hashBlock, "", merkleRoot,
            timestamp, 0, 0, this.VERSION, size, []);
        return blockGenesis;
    }

    public getLatest(): Block {
        return this.chain[this.chain.length - 1];
    }

    public getBlocks(): Block[] {
        return this.chain;
    }
}
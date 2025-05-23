import { throws } from "assert";
import Block from "./Block";
import Transaction from "./Transaction";

export default class BlockChain {
    private chain: Block[] = [];
    private mempoll: Transaction[] = [];
    private readonly VERSION = 1
    private difficulty = 2

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

    public addmMempoll(transaction: Transaction): void {
        this.mempoll.push(transaction);
    }

    public minerBlock(): string {
        const nonce = 0;
        let prefixo = "0".repeat(this.difficulty);
        let hash = "";
        let height = 0;
        let previous_hash = "";
        let merkleRoot = "";
        let timestamp = "";
        let hashBlock = "";
        let size = 0;
        while (!hash.startsWith(prefixo)) {
            const latest = this.getLatest();
            height = latest.block_height;
            previous_hash = latest.block_hash;
            merkleRoot = Block.calculateMerkleRoot(this.mempoll);
            timestamp = Date.now().toString();
            hashBlock = Block.calculateHash(height, previous_hash, merkleRoot, timestamp, this.difficulty, 0, this.VERSION);
            size = Block.calculateSize(this.mempoll);
        }
        const block = new Block((height + 1), hashBlock, previous_hash, merkleRoot,
                timestamp, this.difficulty, nonce, this.VERSION, size, this.mempoll);
        this.chain.push(block);
        return block.block_hash;
    }
}
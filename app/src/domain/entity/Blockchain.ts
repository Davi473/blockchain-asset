import Block from "./Block";
import Transaction from "./Transaction";
import { toUtf8Bytes, keccak256 } from "ethers";

export default class Blockchain {
    readonly chain: Block[] = [];
    private readonly VERSION = 1.0
    private difficulty = 2

    constructor () {
        this.chain.push(this.genesis());
    }

    private genesis(): Block {
        const block = new Block(1, keccak256(toUtf8Bytes("Genesis")), Date.now().toString(), this.difficulty, this.VERSION);
        block.calculateSize();
        while (true) {
            block.calculateHash();
            const zerosEsperados = '0'.repeat(this.difficulty);
            const hash = block.block_hash.replace("0x", "");
            if (hash.startsWith(zerosEsperados)) break;
            block.nonce++;
        }
        return block;
    }

    public getBlocks(): Block[] {
        return this.chain;
    };

    public getLastBlock(): Block {
        return this.chain[this.chain.length - 1]
    };

    public addTransaction(transaction: Transaction): void {
        const previous_block = this.getLastBlock()
        const block = new Block(previous_block.block_height + 1, previous_block.block_hash, Date.now().toString(), this.difficulty, this.VERSION);
        block.addTransaction(transaction);
        block.calculateSize();
        while (true) {
            block.calculateHash();
            const zerosEsperados = '0'.repeat(this.difficulty);
            const hash = block.block_hash.replace("0x", "");
            if (hash.startsWith(zerosEsperados)) break;
            block.nonce++;
        }
        this.chain.push(block);
    };

    public getForQuantity(quantity: number): Block[] {
        const copy = [...this.chain];
        const length = this.chain.length;
        return copy.slice(length - quantity, length - 1);
    };
}
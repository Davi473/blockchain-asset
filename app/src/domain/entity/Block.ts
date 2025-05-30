import Transaction from "./Transaction";
import { toUtf8Bytes, keccak256 } from 'ethers';

export default class Block {
    public block_hash: string = "";
    public size: number = 0;
    public transaction: Transaction[] =[];
    public nonce: number = 1;

    constructor(
        public block_height: number, 
        public previous_block_hash: string, 
        public timestamp: string, 
        public difficulty: number, 
        public version: number
    ) {}

    calculateHash() {
        const data = this.block_height.toString() + this.previous_block_hash +
            this.timestamp + this.difficulty.toString() + this.nonce.toString() + this.version.toString();
        this.block_hash = keccak256(toUtf8Bytes(data));
    }

    addTransaction(transaction: Transaction) {
        this.transaction.push(transaction);
    }

    calculateSize() {
        const blockHeaderSize = 80;
        const txSize = JSON.stringify([...this.transaction]).length;
        this.size = blockHeaderSize + txSize;
    }
}
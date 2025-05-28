import Block from "./Block";
import Transaction from "./Transaction";

export default class Blockchain {
    private chain: Block[] = [];
    private mempoll: Transaction[] = [];
    private readonly VERSION = 1.0
    private difficulty = 2

    constructor () {
        this.genesis
    }

    private genesis(): Block {
        const block = new Block(1, "Genesis", Date.now().toString(), this.difficulty, this.VERSION);
        return
    }
    public getBlocks(): any {};
    public getLastBlock(): any {};
    public addTransaction(): any {};
    public getForQuantity(quantity: number): any {};
}
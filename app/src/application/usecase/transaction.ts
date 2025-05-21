import BlockChain from "../../domain/entity/Blockchain";
import Transaction from "../../domain/entity/Transaction";
import UseCase from "./UseCase";

export default class TransactionUseCase implements UseCase {
    constructor (
        private readonly blockchain: BlockChain
    ) {}

    public async execute(input: Input): Promise<Output> {
        const {txid, timestamp, signature, outputs, inputs, publicKey} = input;
        const transaction = new Transaction(outputs, inputs, publicKey, txid, timestamp, signature)
        if (!transaction.isValid()) throw new Error("Fake Signature");
        this.blockchain.addmMempoll(transaction);
        this.blockchain.minerBlock();
        return this.blockchain.getLatest().block_hash
    }
}

type Input = {
    txid: string,
    timestamp: number,
    signature: string,
    outputs: TransactionType[],
    inputs: TransactionType[],
    publicKey: string
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}

type Output = string;


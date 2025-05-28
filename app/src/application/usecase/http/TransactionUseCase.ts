import Transaction from "../../../domain/entity/Transaction";
import Blockchain from "../../../domain/entity/Blockchain";
import UseCase from "../UseCase";

export default class TransactionUseCase implements UseCase {

    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(input: Input): Promise<Output> {
        const { outputs, inputs, publicKey, txid, timestamp, signature } = input;
        const transaction = new Transaction(outputs, inputs, publicKey, txid, timestamp, signature);
        if (!transaction.isValid()) throw new Error("Transaction invalid");
        this.blockchain.addTransaction();
        return { message: "Sucesse" }
    }
}

type Input = {
    outputs: TransactionType[],
    inputs: TransactionType[],
    publicKey: string, 
    txid: string,
    timestamp: number,
    signature: string
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}

type Output = { message: string }
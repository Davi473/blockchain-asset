import Transaction from "../../../domain/entity/Transaction";
import Blockchain from "../../../domain/entity/Blockchain";
import UseCase from "../UseCase";

export default class GetTotalValueUseCase implements UseCase {
    
    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(input: Input): Promise<Output> {
        const { publicKey } = input;
        const inputsWallet: Array<TransactionType[]> = [];
        const outputsWallet: Array<TransactionType[]> = [];
        this.blockchain.getBlocks().filter(block => block.transaction.filter(transaction => {
            if (transaction.publicKey === publicKey) {
                transaction.inputs[0] ? inputsWallet.push(transaction.inputs): null
                transaction.outputs[0] ? outputsWallet.push(transaction.outputs) : null
            }
        }));
        const asset: any = {};
        inputsWallet.forEach(transactions => {
            for (const transaction of transactions) {
                if (!asset[transaction.category]) asset[transaction.category] = {};
                if (!asset[transaction.category][transaction.name]) {
                    asset[transaction.category][transaction.name] = { 
                    average: transaction.average, quantity: transaction.quantity}
                    continue;
                }
                const quantity = asset[transaction.category][transaction.name].quantity
                asset[transaction.category][transaction.name].quantity += transaction.quantity
                const average = asset[transaction.category][transaction.name].average
                const valueTotal = (transaction.quantity * transaction.average) + (quantity * average);
                asset[transaction.category][transaction.name].average = valueTotal / (transaction.quantity + quantity);
            };
        });  
        outputsWallet.forEach(transactions => {
            for (const transaction of transactions) {
                if (!asset[transaction.category]) asset[transaction.category] = {};
                if (!asset[transaction.category][transaction.name]) {
                    asset[transaction.category][transaction.name] = { 
                    average: transaction.average, quantity: transaction.quantity}
                    continue;
                }
                const quantity = asset[transaction.category][transaction.name].quantity
                asset[transaction.category][transaction.name].quantity -= transaction.quantity
                const average = asset[transaction.category][transaction.name].average
                const valueTotal = (transaction.quantity * transaction.average) - (quantity * average);
                asset[transaction.category][transaction.name].average = valueTotal / (transaction.quantity + quantity);
            };
        }); 
        return asset;                                                                                                                  
    }
}

type Input = { publicKey: string };
type Output = any;

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}
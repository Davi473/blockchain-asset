import Transaction from "../../../domain/entity/Transaction";
import Blockchain from "../../../domain/entity/Blockchain";
import UseCase from "../UseCase";

export default class GetTotalValueUseCase implements UseCase {
    
    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(input: Input): Promise<Output> {
        const { publicKey } = input;
        const inputsWallet = [];
        const outputsWallet = [];
        this.blockchain.getBlocks().filter(block => block.transaction.filter(transaction => {
            if (transaction.publicKey === publicKey) {
                transaction.inputs[0] ? inputsWallet.push(transaction.inputs): null
                transaction.outputs[0] ? outputsWallet.push(transaction.outputs) : null
            }
        }));
        const asset = {};
        // for (const transaction of transactionWallet) {
        //     if(asset[transaction.])
        // }                                                                                                                      
    }
}

type Input = { publicKey: string };
type Output = any;
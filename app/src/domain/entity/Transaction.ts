import { verifyMessage  } from 'ethers';

export default class Transaction {  
    constructor (
        public outputs: TransactionType[],
        public inputs: TransactionType[],
        public publicKey: string, 
        public txid: string,
        public timestamp: number,
        public signature: string
    ) {}

    public isValid(): boolean {
        const inputString = JSON.stringify({ outputs: this.outputs, inputs: this.inputs, publicKey: this.publicKey, txid: this.txid, timestamp: this.timestamp});
        const signature = this.signature;
        const expectedAddress = this.publicKey;
        const recoveredAddress = verifyMessage(inputString, signature);
        const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
        return isValid;
    }
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}
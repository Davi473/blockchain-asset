import { createVerify } from "crypto";

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
        const verifier = createVerify('SHA256');
        verifier.update(inputString);
        verifier.end();
        const isValid = verifier.verify(this.publicKey, this.signature, 'base64');
        return isValid;
    }
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}
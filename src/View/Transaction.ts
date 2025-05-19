import { createHash, createSign } from "crypto";

export default class Transaction {
    public txid: string;
    public timestamp: number
     public signature: string = ""
    
    constructor (
        public outputs: TransactionType[],
        public inputs: TransactionType[],
        public publicKey: string, 
    ) {
        this.timestamp = Date.now()
        this.txid = this.calculateTxid();
    }

    private calculateTxid(): string {
        const inputString = JSON.stringify(this.inputs);
        const outputString = JSON.stringify(this.outputs);
        return createHash('sha256')
        .update(inputString + outputString + this.publicKey + this.timestamp).digest('hex');
    }

    public signer(privateKey: string): void {
        const inputString = JSON.stringify({ outputs: this.outputs, inputs: this.inputs, publicKey: this.publicKey, txid: this.txid, timestamp: this.timestamp});
        const signer = createSign('SHA256');
        signer.update(inputString);
        signer.end();
        const signature = signer.sign(privateKey, 'base64');
        this.signature = signature;
    }
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}


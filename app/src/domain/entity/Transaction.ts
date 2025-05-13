import { createHash } from "crypto";

export default class Transaction {
    public txid: string;
    
    constructor (
        public outputs: any,
        public inputs: any
    ) {
        this.txid = this.calculateTxid();
    }

    private calculateTxid(): string {
        const inputString = JSON.stringify(this.inputs);
        const outputString = JSON.stringify(this.outputs);
        return createHash('sha256')
        .update(inputString + outputString).digest('hex');
    }
}
import { createHash, createSign } from "crypto";
export default class Transaction {
    outputs;
    inputs;
    publicKey;
    txid;
    timestamp;
    signature = "";
    constructor(outputs, inputs, publicKey) {
        this.outputs = outputs;
        this.inputs = inputs;
        this.publicKey = publicKey;
        this.timestamp = Date.now();
        this.txid = this.calculateTxid();
    }
    calculateTxid() {
        const inputString = JSON.stringify(this.inputs);
        const outputString = JSON.stringify(this.outputs);
        return createHash('sha256')
            .update(inputString + outputString + this.publicKey + this.timestamp).digest('hex');
    }
    signer(privateKey) {
        const inputString = JSON.stringify({ outputs: this.outputs, inputs: this.inputs, publicKey: this.publicKey, txid: this.txid, timestamp: this.timestamp });
        const signer = createSign('SHA256');
        signer.update(inputString);
        signer.end();
        const signature = signer.sign(privateKey, 'base64');
        this.signature = signature;
    }
}

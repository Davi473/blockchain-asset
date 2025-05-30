import { Wallet, toUtf8Bytes, keccak256 } from 'ethers';

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
        return keccak256(toUtf8Bytes(
        inputString + outputString + this.publicKey + this.timestamp));
    }

    public async signer(privateKey: string): Promise<void> {
        const wallet = new Wallet(privateKey.replace("0x", ""));
        const inputString = JSON.stringify({ outputs: this.outputs, inputs: this.inputs, publicKey: this.publicKey, txid: this.txid, timestamp: this.timestamp});
        const signature = await wallet.signMessage(inputString);
        this.signature = signature;
    }
}

type TransactionType = {
    name: string,
    average: number,
    quantity: number,
    category: string
}

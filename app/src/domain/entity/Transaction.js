export default class Transaction {
    constructor (
        outputs,
        inputs,
        publicKey, 
        txid,
        timestamp,
        signature
    ) {
        this._outputs = outputs,
        this._inputs = inputs,
        this._publicKey = publicKey, 
        this._txid = txid,
        this._timestamp = timestamp,
        this._signature = signature
    }

    isValid() {
        const inputString = JSON.stringify({ outputs: this._outputs, inputs: this._inputs, publicKey: this._publicKey, txid: this._txid, timestamp: this._timestamp});
        const verifier = createVerify('SHA256');
        verifier.update(inputString);
        verifier.end();
        const isValid = verifier.verify(this.publicKey, this.signature, 'base64');
        return isValid;
    }
}
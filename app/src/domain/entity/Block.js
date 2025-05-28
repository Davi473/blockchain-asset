export default class Block {
    constructor(
        block_height,
        block_hash,
        previous_block_hash,
        timestamp,
        difficulty,
        nonce,
        version,
        size
    ) {
        this._block_height = block_height;
        this._block_hash = block_hash;
        this._previous_block_hash = previous_block_hash;
        this._timestamp = timestamp;
        this._difficulty = difficulty;
        this._nonce = nonce;
        this._version = version;
        this._size = size;
        this._transaction = [];
    }

    calculateHash() {
        return createHash("sha256").update(this._block_height.toString(), this._previous_block_hash, 
            this._timestamp, this._difficulty.toString(), this._nonce.toString(), this._version.toString()).digest("hex");
    }

    addTransaction(transaction) {
        this._transaction.push(transaction);
    }

    calculateSize() {
        const blockHeaderSize = 80;
        const txSize = JSON.stringify([...this._transaction]).length;
        return blockHeaderSize + txSize;
    }
}
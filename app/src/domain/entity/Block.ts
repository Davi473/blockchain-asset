import { createHash } from "crypto";
import Transaction from "./Transaction";


export default class Block {
    constructor(
        public block_height: number, // Number block
        public block_hash: string, // hash do bloco
        public previous_block_hash: string, // hash do bloco anterios
        public merkle_root: string, // hash das transações
        public timestamp: string, // data de criação do bloco
        public difficulty: number, // dificuldade do bloco
        public nonce: number, // numero de ajuste
        public version: number, // versão do bloco
        public size: number, // tamanho
        public transaction: Transaction[], // transacoes
    ) {}

    static calculateHash(
        block_height: number, previous_block_hash: string, merkle_root: string,
        timestamp: string, difficulty: number, nonce: number, version: number
    ): string {
        return createHash('sha256')
            .update(block_height.toString() + previous_block_hash + merkle_root + timestamp + 
                difficulty.toString() + nonce.toString() + version.toString()).digest('hex');
    }

    static calculateMerkleRoot(transactions: Transaction[]): string {
        const allTxs = [...transactions];
        if (allTxs.length === 0) return '0'.repeat(64);

        const txids = allTxs.map(tx => {
            if (!/^[0-9a-fA-F]{64}$/.test(tx.txid)) {
                throw new Error(`TXID inválido: ${tx.txid}. Deve ser uma string hexadecimal de 64 caracteres.`);
            }
            return tx.txid;
        });

        if (txids.length === 1) {
            return txids[0];
        }

        let tree: any = txids.map(txid => Buffer.from(txid, 'hex'));

        while (tree.length > 1) {
            const tempTree: Buffer[] = [];
            for (let i = 0; i < tree.length; i += 2) {
                if (i + 1 < tree.length) {
                const pair = Buffer.concat([tree[i], tree[i + 1]]);
                const hash1 = createHash('sha256').update(pair).digest();
                const hash2 = createHash('sha256').update(hash1).digest();
                tempTree.push(hash2);
                } else {
                const pair = Buffer.concat([tree[i], tree[i]]);
                const hash1 = createHash('sha256').update(pair).digest();
                const hash2 = createHash('sha256').update(hash1).digest();
                tempTree.push(hash2);
                }
            }
            tree = tempTree;
        }
        return tree[0].toString('hex');
    }

    static calculateSize(transactions: any[]): number {
        const blockHeaderSize = 80;
        const txSize = JSON.stringify([...transactions]).length;
        return blockHeaderSize + txSize;
    }
}
import { ethers } from 'ethers';
import Transaction from './transaction/transaction';
import axios from 'axios';

test("Test wallet", async () => {
    const wallet: any = ethers.Wallet.createRandom();
    const asset = {
        name: "VALE",
        average: 5,
        quantity: 10,
        category: "STOCK"
    }
    const transaction = new Transaction([], [asset], wallet.address);
    await transaction.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction);

    const asset2 = {
        name: "VALE",
        average: 6,
        quantity: 5,
        category: "STOCK"
    }
    const transaction2 = new Transaction([asset2], [], wallet.address);
    await transaction2.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction2);

    const asset3 = {
        name: "VALE",
        average: 5,
        quantity: 10,
        category: "STOCK"
    }
    const transaction3 = new Transaction([], [asset3], wallet.address);
    await transaction3.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction3);
});
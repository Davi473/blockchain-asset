import { ethers } from 'ethers';
import Transaction from './transaction';
import axios from 'axios';

test("Get Total Value", async () => {
    const wallet: any = ethers.Wallet.createRandom();
    const asset = {
        name: "VALE",
        average: 8.65,
        quantity: 1.28,
        category: "STOCK"
    }
    const transaction = new Transaction([asset], [asset, asset], wallet.address);
    await transaction.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction);
    await axios.post("http://localhost:3000/transaction", transaction);
    const responseData = await axios.post("http://localhost:3000/transaction", transaction);
    await axios.get(`http://localhost:3000/amount/${wallet.address}`);
});




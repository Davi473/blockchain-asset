import { ethers } from 'ethers';
import Transaction from './transaction';
import axios from 'axios';

test("transaction", async () => {
    const wallet: any = ethers.Wallet.createRandom();
    const asset = {
        name: "VALE",
        average: 8.65,
        quantity: 1.28,
        category: "STOCK"
    }
    const transaction = new Transaction([], [asset, asset], wallet.address);
    await transaction.signer(wallet.privateKey);
    const responseData = await axios.post("http://localhost:3000/transaction", transaction);
    expect(responseData.data.message).toBe("Sucesse");
})




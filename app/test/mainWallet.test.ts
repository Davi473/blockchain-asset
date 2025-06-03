import { ethers } from 'ethers';
import Transaction from './transaction/transaction';
import axios from 'axios';

test("Test wallet", async () => {
    const wallet: any = ethers.Wallet.createRandom();
    const asset = [
        {name: "VALE", average: 8.83, quantity: 1.13314, category: "STOCKs"},
        {name: "IVR", average: 8.36, quantity: 1.19617, category: "REITs"},
        {name: "VOO", average: 551.27, quantity: 0.01814, category: "ETFs Intern."},
        {name: "SNEL11", average: 8.75, quantity: 6, category: "FIIs"}
    ];
    const transaction = new Transaction([], asset, wallet.address);
    await transaction.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction);

    const asset2 = [
        {name: "VALE", average: 8.34, quantity: 0.5997, category: "STOCKs"},
        {name: "IVR", average: 7.34, quantity: 0.72046, category: "REITs"},
        {name: "VOO", average: 517.15, quantity: 0.00966, category: "ETFs Intern."},
        {name: "SNEL11", average: 8.65, quantity: 2, category: "FIIs"}
    ]
    const transaction2 = new Transaction([], asset2, wallet.address);
    await transaction2.signer(wallet.privateKey);
    await axios.post("http://localhost:3000/transaction", transaction2);
    const responseData = await axios.get(`http://localhost:3000/amount/${wallet.address}`);
    const response = responseData.data;
    expect(response["STOCKs"]["VALE"]["average"].toFixed(2)).toBe("8.66");
    expect(response["STOCKs"]["VALE"]["quantity"]).toBe(1.73284);
});
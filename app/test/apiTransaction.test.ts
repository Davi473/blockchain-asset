import WebSocket from 'ws';
import { ethers } from 'ethers';
import Transaction from "../../src/View/Transaction";



test('ServerWebSocket responde corretamente', (done) => {
    const wallet: any = ethers.Wallet.createRandom()
    const privateKey = wallet.privateKey;
    const publicKey = wallet.address;
    const transaction = new Transaction(
        [], 
        [{
            name: "VALE",
            average: 8.67,
            quantity: 1.3,
            category: "stock"
        }], 
        publicKey
    )
    transaction.signer(privateKey);
    const client = new WebSocket('ws://stunning-orbit-qg4x7594x634w5g-3009.app.github.dev/');
    client.on('open', () => {
        client.send(JSON.stringify({ event: 'transaction', transaction }));
    });

    client.on('message', (data) => {
        console.log(data.toString())
        const response = JSON.parse(data.toString());
        console.log('Resposta do servidor:', response);
        client.close();
        done(); 
    });

    client.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
        done(err); 
    });
});
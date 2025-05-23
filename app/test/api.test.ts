import WebSocket from 'ws';
import { ethers } from 'ethers';

// const wallet: any = ethers.Wallet.createRandom()
// const private = wallet.privateKey;
// const public = wallet.address;

test('ServerWebSocket responde corretamente', (done) => {
    const client = new WebSocket('ws://stunning-orbit-qg4x7594x634w5g-3009.app.github.dev/');
    client.on('open', () => {
        client.send(JSON.stringify({ event: 'blocks' }));
    });

    client.on('message', (data) => {
        console.log(data.toString())
        const response = JSON.parse(data.toString());
        console.log('Resposta do servidor:', response);
        expect(!response.blocks).toEqual(true);
        client.close();
        done(); // Finaliza o teste corretamente
    });

    client.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
        done(err); // Fails the test if an error occurs
    });
});


test('lastBlock', (done) => {
    const client = new WebSocket('ws://stunning-orbit-qg4x7594x634w5g-3009.app.github.dev/');
    client.on('open', () => {
        client.send(JSON.stringify({ event: 'lastBlock' }));
    });

    client.on('message', (data) => {
        const response = JSON.parse(data.toString());
        console.log('Resposta do servidor:', response);
        expect(!!response.lastBlock).toEqual(true);
        client.close();
        done(); // Finaliza o teste corretamente
    });

    client.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
        done(err); // Fails the test if an error occurs
    });
});

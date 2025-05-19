import WebSocket from 'ws';

// test('ServerWebSocket responde corretamente', (done) => {
//     const client = new WebSocket('ws://localhost:3009');
//     client.on('open', () => {
//         client.send(JSON.stringify({ event: 'blocks' }));
//     });

//     client.on('message', (data) => {
//         console.log(data.toString())
//         const response = JSON.parse(data.toString());
//         console.log('Resposta do servidor:', response);
//         expect(!response.blocks).toEqual(true);
//         client.close();
//         done(); // Finaliza o teste corretamente
//     });

//     client.on('error', (err) => {
//         console.error('Erro no WebSocket:', err);
//         done(err); // Fails the test if an error occurs
//     });
// });


test('lastBlock', (done) => {
    const client = new WebSocket('ws://localhost:3009');
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

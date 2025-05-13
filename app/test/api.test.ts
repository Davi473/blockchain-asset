import WebSocket from 'ws';

test('ServerWebSocket responde corretamente', (done) => {
    const client = new WebSocket('ws://localhost:3009');

    client.on('open', () => {
        client.send('blocks');
    });

    client.on('message', (data) => {
        const response = JSON.parse(data.toString());
        console.log('Resposta do servidor:', response);
        expect(response).toEqual({ resposta: 'recebi' });
        client.close();
        done(); // Finaliza o teste corretamente
    });

    client.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
        done(err); // Fails the test if an error occurs
    });
});

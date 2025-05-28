import WebSocket from "ws";

test("WebSocket connection and message", (done) => {
  const socket = new WebSocket("ws://localhost:3000");

  socket.on("open", () => {
    // Envia mensagem JSON com evento "ping"
    socket.send(JSON.stringify({ event: "ping", data: "teste" }));
  });

  socket.on("message", (message) => {
    console.log("Resposta do servidor:", message.toString());

    const response = JSON.parse(message.toString());
    
    // Se o evento for "ping", faz asserção e finaliza o teste
    if (response.event === "ping") {
      expect(response.response).toBe("pong");
      done(); // Finaliza o teste
    }
  });

  socket.on("error", (err) => {
    done(err); // Finaliza com erro
  });
});

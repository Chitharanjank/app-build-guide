const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from Node.js!\n");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js app listening on port ${PORT}`);
});

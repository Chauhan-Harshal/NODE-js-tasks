const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = { message: 'Hello from JSON server', status: 'OK' };
  res.end(JSON.stringify(data));
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));

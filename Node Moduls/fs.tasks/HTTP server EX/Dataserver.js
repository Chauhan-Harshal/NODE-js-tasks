const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const now = new Date().toString();
  fs.appendFile('requests.log', now + '\n', (err) => {
    if (err) throw err;
    console.log('Request logged at:', now);
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Date and time logged!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));

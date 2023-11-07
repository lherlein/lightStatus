const http = require('http');
const fs = require('fs').promises;

const data = fs.readFile('./index.html');

// create server
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Not Found');
    res.end();
  }
});


const port = 13500;
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
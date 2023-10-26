import * as http from 'http';
import * as fs from 'fs';

// create server
const server = http.createServer((req, res) => {
  server.on('request', (req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        // Read the HTML file and send it as a response
        fs.readFile('../../index.html', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
      }
  });
});


const port = 8000;
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
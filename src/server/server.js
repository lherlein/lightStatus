const http = require('http');
const fs = require('fs').promises;

const port = 13500;
const hostname = 'localhost'

function runServer(data) {
// create server
  const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      //res.write(data);
      res.end(data);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('404 Not Found');
      res.end();
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  });
}

async function getHtml() {
  const data = await fs.readFile(`${__dirname}/index.html`);
  return data;
}

async function main() {
  const data = await getHtml();
  runServer(data);
}

main();







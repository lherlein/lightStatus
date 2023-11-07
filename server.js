const express = require('express');

const app = express();

const port = 13500;
const hostname = 'localhost'

function runServer() {
  app.use(express.static(`public`));

  app.get('/', function(req,res) {
    res.sendFile(`${__dirname}/view/index.html`);
  });

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

runServer();







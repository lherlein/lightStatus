const express = require('express');
const fs = require('fs').promises;

const app = express();

const port = 13500;
const hostname = 'localhost'

function runServer() {
  app.use(express.static(`${__dirname}/dist/`));

  app.get('/', function(req,res) {
    res.sendFile(`${__dirname}/index.html`);
  })

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

runServer();







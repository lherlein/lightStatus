const express = require('express');
const status = require('./util/fetch-lights.js');

const app = express();

const port = 13500;
const hostname = 'localhost'

function runServer() {

  // get light status
  app.get('/statusCheck', async function(req, res) {
    try {
      const lightStatus = await status.getLightStatus();
      res.send(lightStatus);
    } catch (error) {
      console.error(error);
    }
  });

  app.get('/togglePix', async function(req, res) {
    try {
      const lightStatus = await status.getLightStatus();
      await status.toggleLight('pixley', lightStatus.pixley.POWER);
    } catch (error) {
      console.error(error);
    }
  });

  app.get('/toggleBase', async function(req, res) {
    try {
      const lightStatus = await status.getLightStatus();
      await status.toggleLight('basement', lightStatus.basement.POWER);
    } catch (error) {
      console.error(error);
    }
  });

  app.get('/toggleBack', async function(req, res) {
    try {
      const lightStatus = await status.getLightStatus();
      await status.toggleLight('backyard', lightStatus.backyard.POWER);
    } catch (error) {
      console.error(error);
    }
  });
  
  app.use(express.static(`public`));

  app.get('/', function(req,res) {
    res.sendFile(`${__dirname}/view/index.html`);
  });

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

runServer();
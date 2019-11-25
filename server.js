/* eslint-disable no-console */

const express = require('express');

const initRoutes = require('./routes/routes');
const { responseSender, tokenChecker } = require('./utils/utils');
const { PORT = 4000, HOST = 'localhost' } = require('./constants/constants');

const app = express();

app.use(express.json());

app.use(responseSender);
app.use(tokenChecker);

initRoutes(app);

const httpServer = app.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));

console.log('address():', httpServer.address());

const server = { 
  close: httpServer.close.bind(httpServer), 
  port: PORT, 
  host: HOST,
};

httpServer.on('listening', () => {
  console.log('listening event');
  server.listening = true;
});

module.exports = server;

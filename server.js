/* eslint-disable no-console */

const express = require('express');
// const jwt = require('jsonwebtoken');

const initRoutes = require('./routes/routes');
const responseSender = require('./utils/response-sender');
const { PORT = 4000, HOST = 'localhost' } = require('./constants/constants');

const app = express();

app.use(express.json());

app.use(responseSender);

initRoutes(app);

const httpServer = app.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));

const server = { 
  close: httpServer.close.bind(httpServer), 
  port: PORT, 
  host: HOST,
};

module.exports = server;

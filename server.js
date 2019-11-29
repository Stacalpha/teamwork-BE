/* eslint-disable no-console */

const express = require('express');

const initRoutes = require('./routes/routes');
const { responseSender, tokenChecker, parseJsonBody } = require('./utils/utils');
const { PORT = 4000 } = require('./constants/constants');

const app = express();

app.use(parseJsonBody(express));

app.use(responseSender);
app.use(tokenChecker);

initRoutes(app);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log('Error delegated to express.', err);
  res.sendError(500, 'Unknown error.');
});

const server = app.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));

module.exports = server;

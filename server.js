/* eslint-disable no-console */

const express = require('express');

const initRoutes = require('./routes/routes');
const { responseSender, tokenChecker } = require('./utils/utils');
const { PORT = 4000 } = require('./constants/constants');

const app = express();

app.use(express.json());

app.use(responseSender);
app.use(tokenChecker);

initRoutes(app);

const server = app.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));

module.exports = server;

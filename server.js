const express = require('express');
// const jwt = require('jsonwebtoken');

const initRoutes = require('./routes/routes');
const responseSender = require('./utils/response-sender');
const { PORT } = require('./constants/constants');

const app = express();

app.use(express.json());

app.use(responseSender);

initRoutes(app);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));

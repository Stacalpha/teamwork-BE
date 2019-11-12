const express = require('express');
// const jwt = require('jsonwebtoken');
const initRoutes = require('./routes/routes');
const responseSender = require('./utils/response-sender');

const app = express();

app.use(express.json());

app.use(responseSender);

initRoutes(app);

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('Server is running.. on Port 4000'));

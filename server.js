const express = require('express');
const jwt = require('jsonwebtoken');
const createNewUser = require('./controllers/user-controllers/user-controller');

const app = express();

app.use(express.json());
 
app.listen(4000, ()=>	console.log('Server is running.. on Port 4000'));
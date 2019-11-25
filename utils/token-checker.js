/* eslint-disable no-console */

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/constants');

const tokenChecker = (req, res, next) => {
  // || req.headers.authorization || req.headers['x-access-token'];
  // Express headers are auto converted to lowercase
  const { token } = req.headers;

  if (!token) {
    req.sender = false;
    return next();
  }

  /* if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  } */

  jwt.verify(token, JWT_SECRET, (err, data) => {
    if (err) req.sender = false;
  
    else req.sender = data;
  });

  return next();
};

module.exports = tokenChecker;

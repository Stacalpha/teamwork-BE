/* eslint-disable no-console */

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/constants');

const tokenChecker = (req, res, next) => {
  // Express headers are auto converted to lowercase
  // eslint-disable-next-line dot-notation
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (!token) {
    req.sender = false;
    return next();
  }

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  jwt.verify(token, JWT_SECRET, (err, data) => {
    if (err) req.sender = false;
  
    else req.sender = data;
  });

  return next();
};

module.exports = tokenChecker;

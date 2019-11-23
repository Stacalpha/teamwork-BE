/* eslint-disable no-console */

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/constants');

const tokenChecker = (req, res, next) => {
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (!token) {
    return req.sender = false;
  }

  jwt.verify(token, JWT_SECRET, (err, data) => {
    if (err) {
      req.sender = false;
      return next();
    };
  
    req.sender = data;
    next();
  });
};

module.exports = tokenChecker;

/* eslint-disable no-console */

const userDataIsValid = require('./validate-user-data');
const createUser = require('./create-user');
const validateLogin = require('./validate-login');

module.exports = { createUser, userDataIsValid, validateLogin };

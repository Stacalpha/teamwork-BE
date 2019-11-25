/* eslint-disable no-console */

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../constants/constants');

const { validateLogin } = require('../../services/user-services/user-service');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await validateLogin(email, password)
    .catch((error) => console.log(error));

  if (user === false) { // Not undefined, but explicitly set to false.
    return res.sendError(404, 'Invalid email or password.');
  }

  if (!user) { // Undefined
    return res.sendError(500, 'The server encountered an error.');
  }

  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '24000h' });

  // return the JWT token for the future API calls
  return res.sendData(200, { token, userId: user.id });
};

module.exports = signIn;

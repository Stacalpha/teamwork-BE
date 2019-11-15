/* eslint-disable no-console, no-trailing-spaces */

const { createUser, userDataIsValid } = require('../../services/user-services/user-service');

const createNewUser = async (req, res) => {
  if (!userDataIsValid(req.body)) {
    return res.sendError(400, 'Invalid input data. Please check the documentation.');
  }

  const user = await createUser(req.body)
    .catch((error) => {
      console.log(error);
      res.sendError(500, 'The server encountered an error.');
    });
  if (!user) return false;

  return res.sendData(201, user);
};

module.exports = createNewUser;

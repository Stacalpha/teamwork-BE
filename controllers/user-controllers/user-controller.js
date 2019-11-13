/* eslint-disable no-console, no-trailing-spaces */

const { createUser, userDataIsValid } = require('../../services/user-services/user-service');

const createNewUser = async (req, res) => {
  if (!userDataIsValid()) {
    return res.sendError(400, 'Invalid input data. Please check the documentation.');
  }

  const user = await createUser(req.body)
    .catch((error) => {
      console.log(error);
      res.sendError(500, `Failed to create user: ${error.detail}`);
    });
  if (!user) return false;

  res.sendData(201, user);
};

module.exports = createNewUser;

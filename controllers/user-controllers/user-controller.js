const createUser = require('../../services/user-services/user-service');

const createNewUser = async (req, res) => {
  const user = await createUser(req.body)
    .catch((error) => {
      console.log(error);
      res.sendError(500, 'Failed to create user');
    });
  if (!user) return;

  res.sendData(201, 'New user created successfully', user);
};

module.exports = createNewUser;

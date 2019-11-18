const createNewUser = require('../controllers/user-controllers/user-controller');

const welcome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "You've reached the root route. React app is served here.",
  });
};

const initRoutes = (app) => {
  app.get('/', welcome);

  app.post('/auth/create-user', createNewUser);
};

module.exports = initRoutes;

const { createNewUser, signIn } = require('../controllers/user-controllers/user-controller');
const uploadGif = require('../controllers/gif-controllers/gif-controller');

const welcome = (req, res) => {
  res.sendData(200, "Welcome. You've reached the root route.");
};

const initRoutes = (app) => {
  app.get('/', welcome);

  app.post('/auth/create-user', createNewUser);

  app.post('/auth/signin', signIn);

  app.post('/gifs', uploadGif);
};

module.exports = initRoutes;

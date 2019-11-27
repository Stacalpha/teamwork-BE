const parseJsonBody = (express) => {
  const checkHeaderAndParse = (req, res, next) => {
    console.log(req.headers['content-type']);

    if (req.headers['content-type'] !== 'multipart/formdata') {
      const jsonParser = express.json();
      jsonParser(req, res, next);
      return;
    }
    next();
  };

  return checkHeaderAndParse;
};

module.exports = parseJsonBody;

const parseJsonBody = (express) => {
  const checkHeaderAndParse = (req, res, next) => {
    if (!req.headers['content-type'].contains('multipart/formdata')) {
      const jsonParser = express.json();
      jsonParser(req, res, next);
      return;
    }
    next();
  };

  return checkHeaderAndParse;
};

module.exports = parseJsonBody;

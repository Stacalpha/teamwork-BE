const parseJsonBody = (express) => {
  const checkHeaderAndParse = (req, res, next) => {
    if (req.headers['content-type'] !== 'multipart/formdata') {
      const parser = express.json();
      return parser(req, res, next);
    }
    next();
  };

  return checkHeaderAndParse;
};

module.exports = parseJsonBody;

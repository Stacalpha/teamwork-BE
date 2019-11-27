const parseJsonBody = (express) => {
  const checkHeaderAndParse = (req, res, next) => {
    console.log(req.headers['content-type']);

    if (req.headers['content-type'] !== 'multipart/formdata') {
      const parser = express.json();
      return parser(req, res, next);
    }
    next();
  };

  return checkHeaderAndParse;
};

module.exports = parseJsonBody;

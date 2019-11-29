const createPostQuery = require('./posts/create-post.sql.js');

console.log('query', createPostQuery);
module.exports = {
  createPostQuery,
};

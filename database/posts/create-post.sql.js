const fs = require('fs');
const path = require('path');

/** The sql query to create a new user. Values are parameterized as follows:
 * @QueryParams "id", "title", "body", "dateCreated", "author", "type"
 */
const createPostQuery = fs.readFileSync(path.join(__dirname, 'create-post.sql')).toString();

module.exports = createPostQuery;

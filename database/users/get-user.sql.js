const fs = require('fs');
const path = require('path');

/** The sql query to get a specific user by email or id. Values are parameterized as follows:
 * @QueryParams ("id", "email") Pass null for unknown values. Requires at least one of the two.
 */
const getUserQuery = fs.readFileSync(path.join(__dirname, 'get-user.sql')).toString();

module.exports = getUserQuery;

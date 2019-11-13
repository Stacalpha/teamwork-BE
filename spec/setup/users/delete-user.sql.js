const fs = require('fs');
const path = require('path');

/** The sql query to delete a user from db. Values are parameterized as follows:
 * @QueryParams ("id", "email") Pass null for unknown values. Requires at least one of the two.
 */
const deleteUserQuery = fs.readFileSync(path.join(__dirname, 'delete-user.sql')).toString();

module.exports = deleteUserQuery;

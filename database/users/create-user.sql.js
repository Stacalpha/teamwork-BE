const fs = require('fs');
const path = require('path');

/**The sql query to create a new user. Values are parameterized as follows:
 * @param ("id", "firstName", "lastName", "email", "password", "gender", "jobRole", "department", "address")
 */
const createUserQuery = fs.readFileSync(path.join(__dirname, 'init-tables.sql')).toString();

module.exports = createUserQuery;
const fs = require('fs');
const path = require('path');

/** The sql query to verify login credentials. Values are parameterized as follows:
 * @QueryParams ("email", "password") Both parameters are required.
 */
const validateLoginQuery = fs.readFileSync(path.join(__dirname, 'validate-login.sql')).toString();

module.exports = validateLoginQuery;

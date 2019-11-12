const fs = require('fs');
const path = require('path');

const initScript = fs.readFileSync(path.join(__dirname, 'init-tables.sql')).toString();

module.exports = initScript;

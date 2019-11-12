// const pg = require('pg');
const fs = require('fs');
const path = require('path');

const resetScript = fs.readFileSync(path.join(__dirname, 'reset-tables.sql')).toString();

module.exports = resetScript;

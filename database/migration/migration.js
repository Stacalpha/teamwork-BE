/* eslint-disable no-console */

const pg = require('pg');
const { DATABASE_URL } = require('../../constants/constants');

const resetTables = require('./reset-tables');
const initTables = require('./init-tables');

const pool = new pg.Pool({ connectionString: DATABASE_URL });

pool.query(resetTables)
  .then(async (results) => {
    // @ts-ignore
    console.log(results.map((result) => result.command));
    //
    await pool.query(initTables);
    //
    const employees = (await pool.query('SELECT * FROM "Employees"')).rows;
    console.log(employees);
  })
  .catch((err) => console.log(`Database operation failed: \n${err}`))
  .finally(() => pool.end());
//

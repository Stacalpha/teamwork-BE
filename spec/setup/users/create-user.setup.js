/* eslint-disable no-console */
const pg = require('pg');

const { DATABASE_URL } = require('../../../constants/constants');
const deleteUserQuery = require('../../setup/users/delete-user.sql.js');

const pool = new pg.Pool({ connectionString: DATABASE_URL });

const deleteUser = async (email, id = null) => {
  const res = await pool.query(deleteUserQuery, [id, email]);

  return res;
};

module.exports = deleteUser;

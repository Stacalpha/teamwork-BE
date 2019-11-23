/* eslint-disable no-console */

const pg = require('pg');

const { DATABASE_URL } = require('../../constants/constants');
const validateLoginQuery = require('../../database/users/validate-login.sql.js');

const pool = new pg.Pool({ connectionString: DATABASE_URL });

/**
 * Validate login credentials.
 * @param {String} email User's email address.
 * @param {String} password User's password.
 */
const validateLogin = async (email, password) => {
  const [user = false] = (
    await pool.query(validateLoginQuery, [email, password])
  ).rows;

  return user;
};

module.exports = validateLogin;

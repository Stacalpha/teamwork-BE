const pg = require('pg');
const uuid = require('uuid/v4');

const { DATABASE_URL } = require('../../constants/constants');
const createUserQuery = require('../../database/users/create-user.sql');

// import createUserQuery from '../../database/users/create-user.sql';

const pool = new pg.Pool({ connectionString: DATABASE_URL });

const createUser = async (userData) => {
  const {
    firstName, lastName, email, password, gender, jobRole, department, address,
  } = userData;

  const id = uuid();
  const userDataArray = [
    id, firstName, lastName, email, password, gender, jobRole, department, address,
  ];

  const newUser = await pool.query(createUserQuery, userDataArray);

  return newUser.rows[0];
};

module.exports = createUser;

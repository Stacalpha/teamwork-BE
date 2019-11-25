/* eslint-disable no-console */
const request = require('request');

const deleteUser = require('../setup/users/create-user.setup');
const { TEST_USER_TOKEN: userToken, TEST_ADMIN_TOKEN: adminToken } = require('../../constants/constants');

const { PORT = 4000, HOST = 'localhost' } = require('../../constants/constants');
const server = require('../../server');

const newUserData = {
  firstName: 'Shay',
  lastName: 'Hawkgee',
  email: 'kenedy@mail.com',
  password: '123456',
  gender: 'Female',
  jobRole: 'Tester',
  department: 'Quality Assurance',
  address: '22, Richmond drive',
}; 

const baseUrl = `http://${HOST}:${PORT}`;

const reqOptions = {
  baseUrl,
  uri: '/auth/create-user',
  method: 'POST',
  body: newUserData,
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${adminToken}`,
  },
  json: true,
};

const badReqOptions = {
  ...reqOptions,
  body: { ...newUserData, email: null },
};

const reqOptionsBadAuth = {
  ...reqOptions,
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${userToken}`,
  },
};

describe('POST auth/create-user', () => {
  beforeAll(() => {
    if (!server.listening) {
      server.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));
    }
    console.log('\nPOST auth/create-user');
  });
  
  beforeEach(async () => {
    const { command, rowCount } = await deleteUser(newUserData.email);
    console.log('\n  ', { command, rowCount });
  });
  
  // afterAll(() => server.close());

  it('should create a user and respond with the new user data', (done) => {
    request(reqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(201);
      expect(body.data.id).toBeDefined();
      done();
    });
  });

  it('should respond with error (400) given invalid data in the request body', (done) => {
    request(badReqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(400);
      expect(body.status).toBe('error');
      expect(body.error).toBeDefined();
      // console.log('\t', body.error);
      done();
    });
  });

  it('should respond with error (403) for a non-admin user', (done) => {
    request(reqOptionsBadAuth, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(403);
      expect(body.status).toBe('error');
      expect(body.error).toBeDefined();
      // console.log('\t', body.error);
      done();
    });
  });
});

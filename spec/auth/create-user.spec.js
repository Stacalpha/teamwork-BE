/* eslint-disable no-console */
const request = require('request');

const deleteUser = require('../setup/users/create-user.setup');
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

const invalidUserData = {
  ...newUserData,
  email: null,
};

const baseUrl = `http://${server.host}:${server.port}`;

const reqOptions = {
  baseUrl,
  uri: '/auth/create-user',
  method: 'POST',
  body: newUserData,
  json: true,
};

const badReqOptions = {
  ...reqOptions,
  body: invalidUserData,
};

describe('POST auth/create-user', () => {
  beforeAll(()=> console.log('\nPOST auth/create-user\n'));
  
  beforeEach(async () => {
    const { command, rowCount } = await deleteUser(newUserData.email);
    console.log('\t', { command, rowCount });
  });
  
  afterAll(() => server.close());

  it('should create a new user in the database, and respond with the new user data', (done) => {
    request(reqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(201);
      expect(body.data.id).toBeDefined();
      done();
    });
  });

  it('should respond with status 400 and an error message, given invalid data in the request body', (done) => {
    request(badReqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(400);
      expect(body.status).toBe('error');
      expect(body.error).toBeDefined();
      // console.log('\t', body.error);
      done();
    });
  });
});

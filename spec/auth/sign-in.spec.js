/* eslint-disable no-console */
const request = require('request');

const { PORT = 4000, HOST = 'localhost' } = require('../../constants/constants');
const server = require('../../server');

const credentials = {
  email: 'korey@gmail.com',
  password: 'password',
};

const baseUrl = `http://${HOST}:${PORT}`;

const reqOptions = {
  baseUrl,
  uri: '/auth/signin',
  method: 'POST',
  body: credentials,
  json: true,
};

const badReqOptions = {
  ...reqOptions,
  body: { ...credentials, password: 'wrong password' },
};

describe('POST auth/signin', () => {
  beforeAll(() => {
    if (!server.listening) {
      server.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));
    }
    console.log('\nPOST auth/signin');
  });
  
  beforeEach(async () => {
    console.log('\n  ', 'Next spec');
  });

  it('verify credentails and respond with token and user id.', (done) => {
    request(reqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(200);
      expect(body.status).toBe('success');
      expect(body.data.userId).toBeDefined();
      expect(body.data.token).toBeDefined();
      done();
    });
  });

  it('should respond with error (400) for invalid credentials.', (done) => {
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

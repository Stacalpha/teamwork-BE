/* eslint-disable no-console */
const request = require('request');

const server = require('../../server');

const credentials = {
  email: 'korey@gmail.com',
  password: 'password',
};

const baseUrl = `http://${server.host}:${server.port}`;

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
    const serverWait = setInterval(() => {
      if (server.listening) {
        console.log('\nPOST auth/signin');
        clearInterval(serverWait);
      }
    }, 100);
  });
  
  beforeEach(async () => {
    console.log('\n  ', 'Next spec');
  });
  
  afterAll(() => server.close());

  it('verify credentails and respond with token and user id.', (done) => {
    request(reqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(200);
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

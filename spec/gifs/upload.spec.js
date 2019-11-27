/* eslint-disable no-console */
const request = require('request');

const { TEST_USER_TOKEN: userToken } = require('../../constants/constants');

const { PORT = 4000, HOST = 'localhost' } = require('../../constants/constants');
const server = require('../../server'); 

const baseUrl = `http://${HOST}:${PORT}`;

const reqOptions = {
  baseUrl,
  uri: '/gifs',
  method: 'POST',
  body: newUserData,
  headers: {
    token: adminToken,
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
    token: userToken,
  },
};

describe('POST /gifs', () => {
  beforeAll(() => {
    if (!server.listening) {
      server.listen(PORT, () => console.log(`Server is running.. on Port ${PORT}`));
    }
    console.log('\nPOST /gifs');
  });
  
  beforeEach(async () => {
    console.log('\n  ', 'Next Spec');
  });

  it('should upload gif to cloudinary and respond with image url', (done) => {
    request(reqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(201);
      expect(body.status).toBe('success');
      expect(body.data.gifId).toBeDefined();
      expect(body.data.imageUrl).toBeDefined();
      expect(body.data.createdOn).toBeDefined();
      expect(body.data.title).toBeDefined();
      expect(body.data.message).toBe('GIF image successfully posted');
      done();
    });
  });

  it('should respond with error (400) given unsupported image type', (done) => {
    request(badReqOptions, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(400);
      expect(body.status).toBe('error');
      expect(body.error).toBeDefined();
      done();
    });
  });

  it('should respond with error (403) for an unrecognized user (invalid token)', (done) => {
    request(reqOptionsBadAuth, (error, res, body) => {
      console.log(error || '');
      expect(res.statusCode).toBe(403);
      expect(body.status).toBe('error');
      expect(body.error).toBeDefined();
      done();
    });
  });
});

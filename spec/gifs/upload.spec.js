/* eslint-disable no-console */
const request = require('request');
const fs = require('fs');
const path = require('path');

const { TEST_USER_TOKEN: userToken } = require('../../constants/constants');

const { PORT = 4000, HOST = 'localhost' } = require('../../constants/constants');
const server = require('../../server'); 

const baseUrl = `http://${HOST}:${PORT}`;

const formData = {
  // Pass a simple key-value pair
  title: 'Sample Gif upload.',
  // Pass data via Streams
  file: fs.createReadStream(path.join(__dirname, 'sample1.gif')),
  // Pass multiple values /w an Array
  attachments: [
    fs.createReadStream(__dirname + '/attachment1.jpg'),
    fs.createReadStream(__dirname + '/attachment2.jpg')
  ],
  // Pass optional meta-data with an 'options' object with this shape:- {value: DATA, options: OPTIONS}
  custom_file: {
    value:  fs.createReadStream('/dev/urandom'),
    options: {
      filename: 'topsecret.jpg',
      contentType: 'image/jpeg'
    }
  }
};

const reqOptions = {
  baseUrl,
  uri: '/gifs',
  method: 'POST',
  formData: formData,
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

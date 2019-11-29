const fs = require('fs');
const cloudinary = require('cloudinary').v2;
/* cloudinary.config({
  cloud_name: '###!!!###',
  api_key: '###!!!###',
  api_secret: '###!!!###'
}); */ // CLOUDINARY_URL env var is in use.

const saveGif = (filePath) => new Promise((resolve, reject) => {
  const uploadOptions = {
    public_id: `teamwork/${new Date().toISOString()}`, // uniqueFilename
    tags: 'teamwork',
  };

  cloudinary.uploader.upload(filePath, uploadOptions, (err, image) => {
    if (err) {
      reject(err);
      return;
    }

    console.log('file uploaded to Cloudinary');

    // Remove file from server
    fs.unlinkSync(filePath);

    // Return img url to be saved to db.
    resolve(image);
  });
});

module.exports = saveGif;

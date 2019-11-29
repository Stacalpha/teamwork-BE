const fs = require('fs');

const saveGifMetadata = require('../../services/gif/save-gif-url');
const saveGif = require('../../services/cloudinary/cloudinary');
const processIncomingFile = require('../../utils/incoming-file');

const uploadGif = async (req, res) => {
  try {
    console.log('controller called');

    if (!req.sender) {
      console.log('no sender');
      res.sendError(403, 'You must be logged in to submit posts.');
      return;
    }

    await processIncomingFile(req, res);
    console.log('processIncomingFile(req, res) finished.');

    if (!req.body.title) {
      console.log('no title');
      res.sendError(400, 'Please include a title for your post.');
      return;
    }

    if (!req.file) {
      console.log('no file');
      res.sendError(400, 'We found no file in your request');
      return;
    }

    if (req.file.mimetype !== 'image/gif') {
      console.log('no type');

      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
        console.log('File was deleted.');
      });

      res.sendError(400, 'Image must be a gif file. Please choose a supported file type');
      return;
    }

    const savedGif = await saveGif(req.file.path);
    console.log('saved gif to cloudinary');

    const gifMetadata = await saveGifMetadata(req.sender.id, req.body.title, savedGif.url);
    console.log('saved gif meta to db');

    res.sendData(201, {
      message: 'GIF image successfully posted',
      ...gifMetadata,
    });
    console.log('res sent, end.');
  } catch (error) {
    console.log(error);
    res.sendError(500, 'Error processing file');
  }
};

module.exports = uploadGif;

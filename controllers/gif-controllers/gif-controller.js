const fs = require('fs');

const saveGifMetadata = require('../../services/gif/save-gif-url');
const saveGif = require('../../services/cloudinary/cloudinary');
const processIncomingFile = require('../../utils/incoming-file');

const uploadGif = async (req, res) => {
  try {
    if (!req.sender) {
      res.sendError(403, 'You must be logged in to submit posts.');
      return;
    }

    await processIncomingFile(req, res);

    if (!req.body.title) {
      res.sendError(400, 'Please include a title for your post.');
      return;
    }

    if (!req.file) {
      res.sendError(400, 'We found no file in your request');
      return;
    }

    if (req.file.mimetype !== 'image/gif') {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
      });

      res.sendError(400, 'Image must be a gif file. Please choose a supported file type');
      return;
    }

    const savedGif = await saveGif(req.file.path);

    const gifMetadata = await saveGifMetadata(req.sender.id, req.body.title, savedGif.url);

    res.sendData(201, {
      message: 'GIF image successfully posted',
      ...gifMetadata,
    });
  } catch (error) {
    res.sendError(500, 'Error processing file');
  }
};

module.exports = uploadGif;

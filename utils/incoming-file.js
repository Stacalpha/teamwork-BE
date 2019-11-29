const multer = require('multer');
const path = require('path');

const processIncomingFile = (req, res) => new Promise((resolve, reject) => {
  const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (_req, file, callback) => {
      // Use file.mimetype to determine appropriate extension.
      const fileExt = file.mimetype === 'image/gif' ? '.gif' : '';
      callback(null, `${file.originalname}_${Date.now()}${fileExt}`);
    },
  });

  const upload = multer({ storage }).single('file');
  
  upload(req, res, (err) => {
    if (!err) resolve(); 
    else {
      console.log(err);
      reject(err);
    }
  });
});

module.exports = processIncomingFile;

const multer = require('multer');
const path = require('path');

const processIncomingFile = (req, res) => new Promise((resolve, reject) => {
  console.log('processIncomingFile(req, res) called.');
  const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (_req, file, callback) => {
      console.log(file);
      // Use file.mimetype to determine appropriate extension.
      const fileExt = file.mimetype === 'image/gif' ? '.gif' : '';
      callback(null, `${file.originalname}_${Date.now()}${fileExt}`);
    },
  });

  console.log('storage assigned', storage);
  const upload = multer({ storage }).single('file');
  console.log('upload function:\n', upload);
  
  upload(req, res, (err) => {
    console.log(req.file, '\tand\t', req.body);
    if (!err) resolve(); 
    else {
      console.log(err);
      reject(err);
    }  

    console.log('settled.');
  });
});

module.exports = processIncomingFile;

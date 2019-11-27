const cloudinary = require('cloudinary').v2;
    // res.write('GIF image successfully posted');

const fs = require('fs');

const getUploadedFile = (req, res) => {
  if (req.url === '/fileupload') {
    const form = new formidable.IncomingForm();
    //
    form.parse(req, (err, fields, files) => {
      const oldpath = files.filetoupload.path;
      const newpath = `C:/Users/Your Name/${files.filetoupload.name}`;
      //
      fs.rename(oldpath, newpath, (error) => {
        if (error) throw error;
        res.write('GIF image successfully posted');
        res.end();
      });
    });
    // res.write('GIF image successfully posted');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
};

module.exports = getUploadedFile;

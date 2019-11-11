var cloudinary = require('cloudinary').v2;
var formidable = require('formidable');

const getUploadedFile = (req, res)=> {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=> {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, (err)=> {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 		});
	} 
	else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}
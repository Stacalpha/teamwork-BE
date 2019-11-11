const pg = require("pg");
const express = require('express');
var cloudinary = require('cloudinary').v2;
var formidable = require('formidable');

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});

console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');
	

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

const { DATABASE_URL } = require('./constants/constants');
const dbQueries = require('./database/queries');

const app = express();

app.use(express.json());
 
app.get('/', async (req, res)=> {
	const pool = new pg.Pool({ connectionString: DATABASE_URL });

});
 
app.listen(4000, ()=>	console.log('Server is running.. on Port 4000'));
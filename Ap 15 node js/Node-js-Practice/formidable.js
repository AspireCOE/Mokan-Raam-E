var http = require('http');
var formidable = require('formidable');
const PORT = 6601;

const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //   var oldpath = path.join(__dirname,'file');
            //   var newpath = path.join(__dirname,'logs');
            //   fs.rename(oldpath, newpath, function (err) {
            //     if (err) throw err;
            //     res.write('File uploaded and moved!');
            //     res.end();
            //   });
            res.write('File uploaded');
            res.end();
        });
      } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
      }
});

server.listen(PORT,() => console.log(`server is runnung in port:- ${PORT}`));
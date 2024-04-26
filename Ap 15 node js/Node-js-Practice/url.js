var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
const PORT = 6600;

// url.parse() ------------------------------------

var adr = 'http://localhost:3000/default.html?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:3000'
console.log(q.pathname); //returns '/default.html'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month);

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    if (pathname === '/') {
        pathname = '/newPage.html';
    }

    const filename = path.join(__dirname, pathname);

    fs.readFile(filename, (err, data) => {
        if (err) {
            // Handle file not found error with a 404 response
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1>404 Not Found</h1><p>The requested URL ${req.url} was not found on this server.</p>`);
        } else {
            // Serve the content of the requested file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
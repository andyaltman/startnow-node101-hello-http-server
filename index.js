var http = require('http');
var port = 8080;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World');
  res.end();
  console.log("Listening on "+port+" port.")
}).listen(port);
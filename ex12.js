var http = require('http');
var map  = require('./node_modules/through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  if (req.method === 'POST') {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end('Request type must be POST');
  }
});

server.listen(port)

var http = require('http');
var fs   = require('fs');
var bl   = require('./node_modules/bl');

var server = http.createServer(function (req, res) {
  var data = '';
  var txtFile = fs.createReadStream(process.argv[3], 'utf8');
  txtFile.pipe(res);

});


server.listen(process.argv[2]);

var http = require('http');
var url  = process.argv[2];

http.get(url, function(res) {
  var resData = [];
  res.setEncoding('utf8');
  res.on('data', function(data) {
    resData.push(data);
  });
  res.on('end', function() {
    var output = resData.join('');
    console.log(output.length);
    console.log(output);
  });
});

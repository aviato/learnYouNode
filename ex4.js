var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  var newLines = data.split('').filter(function(char) {
    return char === '\n';
  }).length;
  console.log(newLines);
});

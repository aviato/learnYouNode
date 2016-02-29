var fs = require('fs')

var file = fs.readFileSync(process.argv[2], 'utf8');
var newLines = file.split('').filter(function(char) {
  return char === '\n';
});

console.log(newLines.length)

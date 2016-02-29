var fs   = require('fs');
var path = require('path');

// process.argv[2] is a provided array of file names to be filtered
var files = fs.readdir(process.argv[2], function(err, data) {
  var filteredExtNames = data.filter(function(file) {
    // process.argv[3] is a provided ext. name (ex. 'txt', 'md')
    return path.extname(file) === '.' + process.argv[3];
  });
  filteredExtNames.forEach(function(file) {
    console.log(file);
  });
});

var filterExtNames = require('./ex6b');
var dirName        = process.argv[2];
var extName        = process.argv[3];

filterExtNames(dirName, extName, function(err, data) {
  if (err) {
    throw err;
  }
  data.forEach(function(file) {
    console.log(file);
  })
});

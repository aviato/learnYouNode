var fs   = require('fs');
var path = require('path');

module.exports = function (dir, extStr, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) {
      return callback(err);
    }
    var filteredDir = data.filter(function(file) {
      return path.extname(file) === '.' + extStr;
    });
    callback(null, filteredDir);
  });
};

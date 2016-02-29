var http = require('http');
var bl   = require('./node_modules/bl');
var urls = process.argv.slice(2);
var outputData = [];
var responseCount = 0;

var displayOutput = function(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
};

var fetchData = function(url, index) {
  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) {
        throw err;
      }
      outputData[index] = data.toString();
      responseCount += 1;
      if (responseCount === 3) {
        displayOutput(outputData);
      }
    }));
  });
}

urls.forEach(fetchData);

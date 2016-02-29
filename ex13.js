var http = require('http');
var url  = require('url');
var port = process.argv[2];

var timeToJSON = function (timeStr) {
  // (ex. 2016-02-29T06:43:40.023Z)
  var date  = new Date(timeStr);
  var hours = date.getHours();
  var mins  = date.getMinutes();
  var secs  = date.getSeconds();
  return {"hour": hours, "minute": mins, "second": secs};
};

var timeToUnix = function (timeStr) {
  var inputTime = new Date(timeStr);
  return {"unixtime": inputTime.getTime()};
};

var server = http.createServer(function (req, res) {
  var requestObj = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (requestObj.pathname === '/api/parsetime') {
      var parsedTime = JSON.stringify(timeToJSON(requestObj.query.iso))
      res.end(parsedTime);
    } else if (requestObj.pathname === '/api/unixtime') {
      var unixedTime = JSON.stringify(timeToUnix(requestObj.query.iso));
      res.end(unixedTime);
    } else {
      res.end('invalid request. SORRY.');
    }
  }
});

server.listen(port);

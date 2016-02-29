var net = require('net');

var server = net.createServer(function(c) {

  // Format relevant numbers to use a leading zero (ex. 2016-02-28)
  var formatLeadingZero = function(int) {
    if (int < 10) {
      return '0' + int;
    }
    return int;
  };

  // Return the date in YYYY-MM-DD hh:mm formatLeadingZero
  var printDate = function() {
    var today = new Date();
    var year  = today.getFullYear();
    var month = formatLeadingZero(today.getMonth() + 1);
    var date  = formatLeadingZero(today.getDate());
    var hours = formatLeadingZero(today.getHours());
    var mins  = formatLeadingZero(today.getMinutes());

    return year + '-' + month + '-' + date + ' ' + hours + ':' + mins;
  }

  c.end(printDate() + '\n');

});

server.listen(process.argv[2]);

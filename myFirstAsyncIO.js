var fs, args, lines;

fs       = require('fs');
fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', function (err, data) {
	if (err) throw err;
	data = data.split('\n').length - 1
	console.log(data);
});
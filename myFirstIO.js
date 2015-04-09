var fs, fileName;

fs = require('fs');
fileName = process.argv[2];

console.log(fs.readFileSync(fileName, 'utf-8').split('\n').length - 1);
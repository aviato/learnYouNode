var myModule, dir, filterStr;

myModule  = require('./module1.js')
dir 	  = process.argv[2]
filterStr = process.argv[3]

myModule(dir, filterStr, function (err, list) {
	if (err)
		return console.log('There was an error', err)

	list.forEach(function(file) {
		console.log(file)
	})
})
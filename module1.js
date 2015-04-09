var fs, path;

fs     = require('fs')
path   = require('path')

module.exports = function (dirName, extStr, callback) {

	fs.readdir(dirName, function(err, data) {
		if (err)
			return callback(err)

		data = data.filter(function(file) {
			return path.extname(file) === '.' + extStr
		})

		callback(null, data)
	})

}
var async, bl, http, url;

async = require('async');
bl    = require('bl');
http  = require('http');
//urls  = [process.argv[2], process.argv[3], process.argv[4]];

//console.log(urls);

urls = {
	process.arv[2]: '',
	process.arv[3]: '',
	process.arv[4]: ''
};

urls.forEach(function (url) {
	http.get(url, function (res) {
		
		res.pipe(bl(function (err, data) {
			if (err)
				return console.log(err);

			dataStream = data.toString();

			console.log(dataStream);
		}))
		
	})
})

console.log(urls);


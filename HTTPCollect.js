var bl, http, url;

bl 	   = require('bl');
http   = require('http');
url    = process.argv[2];


http.get(url, function(res){

	res.pipe(bl(function(err, data){
		if (err)
			return console.log(err);

		dataStream = data.toString();

		console.log(dataStream.length);
		console.log(dataStream);

	}))
})


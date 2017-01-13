var http = require('http');
var mustache = require('mustache');
var rn = require('./random_number');

requestHandler = function(req,res){
	console.log();
	if(req.url == '/')
	{
		result=mustache.render("first_number - {{f_n}}, second_number - {{s_n}}, third_number - {{t_n}}",
		{
			f_n: rn(),
			s_n: rn(),
			t_n: rn()
		})
		res.end(result);	
	}
	else{
		res.end('Away from Home');
	}
}

var server = http.createServer(requestHandler);

server.listen(3001, function(){
	console.log('Started server')
})

var http = require('http');
var mustache = require('mustache');


requestHandler = function(req,res){
	console.log();
	if(req.url == '/')
	{
		result=mustache.render("{{first_name}} {{last_name}}",
		{
			first_name: 'Swapnil',
			last_name: 'G'
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

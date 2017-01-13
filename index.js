var http = require('http');

requestHandler = function(req,res){
	console.log();
	if(req.url == '/')
	{
		res.end('Welcome');	
	}
	else{
		res.end('Away from Home');
	}
}

var server = http.createServer(requestHandler);

server.listen(3001, function(){
	console.log('Started server')
})

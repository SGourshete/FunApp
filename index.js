var http = require('http');
var mustache = require('mustache');
var cal = require('./calculator');

requestHandler = function(req,res){
	if (req.url != '/favicon.ico' ){
	console.log(req.url.split('&'));
	data = req.url.split("&");
	operandor1 = (data[0].split('='))[1];
	operandor2 = (data[1].split('='))[1];
	r = mustache.render("  Submitted expression = "+ req.url +
			"\n\n  Operandor1 = " + operandor1 +
			"\n\n  Operandor2 = " + operandor2 +
			"\n\n  Operator : " + data[2] +
			"\n\n  Result = {{result}}",
	{
		result: cal( operandor1, operandor2, data[2])
	})
	res.end(r);
	}
}

var server = http.createServer(requestHandler);

server.listen(3001, function(){
	console.log('Started server')
})

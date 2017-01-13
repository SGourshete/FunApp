var mustache = require('mustache');


result=mustache.render("{{first_name}},{{last_name}}",
{
	first_name: 'Swapnil',
	last_name: 'G'
})

console.log(result);

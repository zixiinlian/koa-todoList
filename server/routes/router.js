var request = require('koa-request'),
	swig  = require('swig');

module.exports = function(router){
	router
		.get('/home', function *(next){
			yield this.render('home');
		})
		.get('/dict', function *(next){
			var dataFile = {
			        url: 'http://localhost:8080/client/data/data.json',
			        headers: { 'User-Agent': 'request' }
			    },
			    templateFile = {
			        url: 'http://localhost:8080/client/views/dict.swig',
			        headers: { 'User-Agent': 'request' }
			    },
				response = null,
				template,tamplateHtml;

			response = yield request(dataFile);
			tamplateHtml = yield request(templateFile);
			template = swig.compile(tamplateHtml.body);
			this.response.body = template(JSON.parse(response.body));
		});
};

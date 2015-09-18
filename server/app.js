var app = require('koa')(),
	router = require('koa-router')(),
	path = require('path'),
	compress = require('koa-compress')(),
	serve = require('koa-static'),
	views = require('koa-views'),
	logger = require('koa-logger')(),
	fs = require('fs'),
	swig = require('swig'),
	extname = path.extname,
	routers = require('./routes/router.js');



app.use(serve('views'));
app.use(views('./views', {
	default: 'swig',
	cache: false
}));

routers(router);
app.use(router.routes());
app.use(router.allowedMethods());

// app.use(function *(){
// 	var path = __dirname + this.path,
// 		fstat = yield stat(path);

// 		if(fstat.isFile()){
// 			this.compress = true;
// 			this.type = extname(path);
// 			this.body = fs.createReadStream(path);
// 		}
// });

app.use(logger);

app.listen(3000);

function stat (file) {
	return function(done){
		fs.stat(file, done);
	};
}
var todo = require('./todo.js');

module.exports = function(router){
	router
		.get('/', todo.list)
		.get('/todo', function *(next){
			this.body = 'add';
		})
		.get('/edit/:id', function *(next){
			this.body = 'edit';
		})
		.del('/todo/:id', function *(next){
			this.body = 'edit';
		});
};

var todo = require('./todo.js');

module.exports = function(router){
	router
		.get('/', todo.list)
		.get('/todo/list', todo.list)
		.get('/todo/add', todo.add)
		.del('/todo/:id', function *(next){
			this.body = 'edit';
		});
};

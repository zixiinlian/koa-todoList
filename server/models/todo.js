var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TodoSchema = new Schema({
	title: {type: String},
	status: {type: String}
});

TodoSchema.method = {
	create: function (){

	}
};

mongoose.model('Todo', TodoSchema);
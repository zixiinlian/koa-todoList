var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:28017/todo');

exports.mongoose = mongoose;
var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './client/app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.scss$/, loader: 'style!css!sass'}
		]
	}
};
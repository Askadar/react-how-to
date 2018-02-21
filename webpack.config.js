var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['react-app']
				}
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'node_modules')],
		extensions: ['.js', '.jsx']
	},
};

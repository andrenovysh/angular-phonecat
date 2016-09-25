var webpack = require('webpack');

module.exports = {
	entry: {
		vendor: ['angular', 'angular-animate'],
		main: './main.js'
	},
	output: {
		path: './app/build', filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel', 
			query: { 
				presets: ['es2015'], 
				plugins: ["transform-class-properties", "annotate-inject", "syntax-decorators"] 
			}
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
	]
}
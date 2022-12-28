const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/public/index.tsx',
	resolve: {
		extensions: ['.tsx', '.ts'],
	},
	output: {
		path: path.resolve(__dirname, 'build/public'),
		filename: 'main.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
			}
		]
	},
}

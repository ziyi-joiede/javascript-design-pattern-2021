const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	// devtool: 'eval',
	devServer: {
		static: {
			directory: path.join(__dirname, './release/'), // 根目录
		},
		open: true, // 自动打开
		port: 9000  // 端口
	}
}
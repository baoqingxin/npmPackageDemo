const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode:'production',
	entry:{
		main:'./src/index.js',
	},
	plugins: [
		new CleanWebpackPlugin()
  ],
  externals:'loadsh',
	output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd'
	}
}
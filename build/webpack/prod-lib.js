import path from 'path';
import merge from 'webpack-merge';
import baseWebpackConfig from './base';

export default merge(baseWebpackConfig, {
	devtool: 'cheap-module-source-map',
	entry: './src/index.js',
	output: {
		path: './dist',
		publicPath: '',
		filename: 'vue-mushi.js',
		chunkFilename: 'vue-mushi.js'
	}
});
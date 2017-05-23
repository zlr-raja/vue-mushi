import path from 'path';
import config from '../config';

const resolvePath = (dir) => {
	return path.resolve(__dirname, '..', '..', dir);
};

export default {
	output: {
		path: config.rootPath,
		publicPath: config.publicPath,
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: 'vue-style-loader!css-loader',
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: 'node_modules',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.json$/,
				use: ['json-loader']
			}
		]
	}
};

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
	entry: './src/index.ts',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				// Some image formats so you can import images
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000
					}
				}
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	plugins: [],

	// Here we define explicitly the file types we intend to deal with
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.json',
			'.png',
			'.gif',
			'.jpg',
			'.svg'
		],
		alias: {
			'~': path.resolve(__dirname, './src'),
			shared: path.resolve(__dirname, './src/index.ts'),
			components: path.resolve(__dirname, './src/components'),
			illustrations: path.resolve(__dirname, './src/illustrations'),
			Typography: path.resolve(__dirname, './src/Typography/index.tsx'),
			variables: path.resolve(__dirname, './src/variables/index.ts'),
			icons: path.resolve(__dirname, './src/icons')
		}
	},
	output: {
		globalObject: `(typeof self !== 'undefined' ? self : this)`,
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: 'bindle.js',
		libraryTarget: 'umd'
	}
}

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.plugins = [
			new CopyWebpackPlugin([
				{ from: 'src', to: '../../bindle-main/_shared' }
			])
		]
	}
	return config
}

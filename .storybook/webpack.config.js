const path = require('path')
const custom = require('../webpack.config.js')

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]]
		}
	})
	config.resolve.extensions.push(
		'.ts',
		'.tsx',
		'.js',
		'.json',
		'.png',
		'.gif',
		'.jpg',
		'.svg'
	)
	config.resolve.alias = {
		...config.resolve.alias,
		// ...custom.config.resolve,
		components: path.resolve(__dirname, '../src/components'),
		icons: path.resolve(__dirname, '../src/icons'),
		illustrations: path.resolve(__dirname, '../src/illustrations'),
		Typography: path.resolve(__dirname, '../src/Typography'),
		variables: path.resolve(__dirname, '../src/variables/index.ts'),
		'~': path.resolve(__dirname, '../src')
	}
	return config
}

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

//[ 'plugin-admin', 'plugin-block', 'plugin-public', 'plugin-settings' ].forEach(
//	( script ) =>
//		( entry[ script ] = path.resolve(
//			process.cwd(),
//			`assets/src/${ script }.js`
//		) )
//);

module.exports = {
	...defaultConfig,
	entry: '/blocks/index.js',
	output: {
		filename: 'index.min.js',
		path: path.resolve( __dirname, 'webappick-production' ),
	},
};

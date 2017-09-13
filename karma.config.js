// Karma configuration
const path = require( 'path' );
const src = path.resolve( __dirname, '..', 'src' );

module.exports = function( config ) {
	config.set( {
		frameworks: [ 'jasmine' ],
		reporters: [ 'spec' ],
		browsers: [ 'PhantomJS' ],
		colors: true,

		// ... normal karma configuration
		files: [
			require.resolve( 'jquery' ),

			// All files ending in "_test"
			{ pattern: 'test/*_test.js', watched: false }

			//{ pattern: 'test/**/*_test.js', watched: false }

			// Each file acts as entry point for the webpack configuration
		],

		preprocessors: {

			// Add webpack as preprocessor
			'test/*_test.js': [ 'webpack' ],
			'test/**/*_test.js': [ 'webpack' ]
		},

		webpack: require( './config/webpack.test.js' ),

		webpackMiddleware: {

			// Webpack-dev-middleware configuration
			// i. e.
			stats: 'errors-only'
		}
	} );
};

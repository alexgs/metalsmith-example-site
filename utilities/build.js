let _                   = require( 'lodash' ).runInContext()
    , deepConformsTo    = require( './deepConformsTo' )
    ;
_.mixin( deepConformsTo );

let Metalsmith          = require( 'metalsmith' )
    , browserSync       = require( 'metalsmith-browser-sync' )
    , collections       = require( 'metalsmith-nested-collections' )
    , debug             = require( 'metalsmith-debug' )
    , layouts           = require( 'metalsmith-layouts' )
    , permalinks        = require( 'metalsmith-permalinks' )
    , remarkable        = require( 'metalsmith-markdown-remarkable' )
    , saveMetadata      = require( './../utilities/saveMetadata' )
    , slug              = require( 'metalsmith-slug' )
    , publish           = require( 'metalsmith-publish' )
    , snippet           = require( 'metalsmith-snippet' )
    ;

let path                = require( 'path' )
    , specReplacer      = require( './specReplacer' );

// Static configuration for all sites
let config = {
    metadata: {
        'generator-name': 'Metalsmith',
        'generator-url': 'http://metalsmith.io'
    },
    paths: {
        project: path.resolve( __dirname, '..' ),   // Project root dir
        srcRoot: './src',               // Root dir for source files, relative to project root
        dstRoot: './public'             // Root dir for output files, relative to project root
    }
};

// Specification for the Options object passed in from the caller
let optionsSpec = {
    metadata: {
        siteName: _.isString,
        siteUrl: _.isString
    },
    paths: {
        source: _.isString,             // Directory under config.paths.srcRoot
        destination: _.isString,        // Directory under config.paths.dstRoot
    }
    // , testFailure: _.isString
    // , test: {
    //     failure: _.isString
    // }
};

module.exports = function metalsmithBuilder( options ) {
    // Check that the options object meets the specification
    if ( !_.deepConformsTo( options, optionsSpec ) ) {
        console.log( 'Options object specification:\n' + JSON.stringify( optionsSpec, specReplacer, 2 ) );
        process.exitCode = 14;
        throw new Error( 'Invalid `options` object passed to build script' );
    }

    // Configure metadata
    let userMetadata = _.mapKeys( options.metadata,
        ( value, key ) => _.kebabCase( key )
    );
    let metadata = _.merge( { }, config.metadata, userMetadata );
    console.log( JSON.stringify( metadata, null, 2 ) );

    // Set constants
    const source = path.resolve(
        config.paths.project,
        config.paths.srcRoot,
        options.paths.source
    );
    const destination = path.resolve(
        config.paths.project,
        config.paths.dstRoot,
        options.paths.destination
    );

    let metalsmith = Metalsmith( config.paths.project );
    metalsmith
        .metadata( metadata )
        .clean( true )
        .source( source )
        .destination( destination );
};


// metalsmith
//     .use( collections( {    // "Collections" goes **before** "Remarkable"
//         posts: {
//             pattern: 'posts/**/*.md',
//             sortBy: 'date',
//             reverse: true
//         },
//         'metalsmith-tutorial': {
//             pattern: 'posts/metalsmith-tutorial/*.md',
//             sortBy: 'date',
//             reverse: true
//         },
//         'horrible-truth': {
//             pattern: 'posts/horrible-truth/*.md',
//             sortBy: 'date',
//             reverse: true
//         }
//     } ) )
//     .use( slug( { mode: 'rfc3986' } ) )
//     .use( remarkable() )    // "Remarkable" goes **after** "Collections" and **before** both "Permalinks" and "Layouts"
//     .use( permalinks( {     // "Permalinks" goes **after** "Remarkable"
//         linksets: [
//             {
//                 match: { collection: 'posts' },
//                 pattern: 'blog/:date/:slug',
//                 date: 'YYYY/MM',
//                 useDefaultDate: true
//             }
//         ]
//     } ) )
//     .use( snippet( {        // "Snippet" goes **after** "Remarkable" and **before** "Layouts"
//         "maxLength": 300
//     } ) )
//     .use( layouts( {        // "Layouts" goes **after** "Permalinks"
//         engine  : 'handlebars',
//         default : 'post.hbs',
//         partials: 'layouts/partials'
//     } ) )
//     .use( debug() )
//     // .use( browserSync( {
//     //     'server': 'public',
//     //     'files' : [ 'src/**/*.md', 'layouts/**/*.hbs' ],
//     //     'open'  : false
//     // } ) )
//     .build( ( err, files ) => {
//         if ( err ) {
//             console.log( err );
//         } else {
//             // Save file and collection metadata to JSON files
//             let metadata = metalsmith.metadata();
//             let metadataCollection = {
//                 files: files,
//                 collections: metadata
//             };
//             saveMetadata( rootPath, metadataCollection );
//
//             let fileNames = Object.keys( files );
//             console.log( 'Successfully built ' + fileNames.length + ' files!' );
//         }
//     } );

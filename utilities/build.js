let _               = require( 'lodash' ).runInContext()
    , Metalsmith    = require( 'metalsmith' )
    , browserSync   = require( 'metalsmith-browser-sync' )
    , collections   = require( 'metalsmith-nested-collections' )
    , debug         = require( 'metalsmith-debug' )
    , layouts       = require( 'metalsmith-layouts' )
    , permalinks    = require( 'metalsmith-permalinks' )
    , remarkable    = require( 'metalsmith-markdown-remarkable' )
    , saveMetadata  = require( './../utilities/saveMetadata' )
    , slug          = require( 'metalsmith-slug' )
    , publish       = require( 'metalsmith-publish' )
    , snippet       = require( 'metalsmith-snippet' )
    ;

_.mixin( {
    deepConformsTo: function deepConformsTo( object, source ) {
        // Partition the keys into those for primitive values and those for child objects
        let [ children, primitives ] = _.partition( _.keys( object ),
            key => _.isPlainObject( object[ key ] )
        );

        // Check that the primitives match the spec
        let checkPrimitives = _.conformsTo( object, _.pick( source, primitives ) );

        // If there are child objects, check them recursively.
        // If there are only primitives, end recursion.
        if ( children.length > 0 ) {
            let checkChildren = _.forEach( children,
                child => deepConformsTo( object[ child ], source[ child ] )
            );
            return checkPrimitives && checkChildren;
        } else {
            return checkPrimitives;
        }
    }
} );

let optionsSpec = {
    metadata: {
        siteName: _.isString,
        siteUrl: _.isString
    },
    rootPath: _.isString
};

let specReplacer = function( key, value ) {
    if ( _.isFunction( value ) ) {
        return _.chain( value.name ).trimStart( 'is' ).toLower().value();
    }

    // default
    return value;
};

module.exports = function metalsmithBuilder( options ) {

    if ( !_.deepConformsTo( options, optionsSpec ) ) {
        console.log( '`options` object specification:\n' + JSON.stringify( optionsSpec, specReplacer, 2 ) );
        process.exitCode = 14;
        throw new Error( 'Invalid `options` object passed to build script' );
    }

    let metalsmith = Metalsmith( options.rootPath );

    let userMetadata = _.mapKeys( options.metadata, _.kebabCase );
    console.log( JSON.stringify( userMetadata, null, 2 ) );

};


// metalsmith
//     .metadata( {
//         'site-name'      : 'philgs.me',
//         'site-url'       : 'http://philgs.me',
//         'generator-name' : 'Metalsmith',
//         'generator-url'  : 'http://metalsmith.io'
//     } )
//     .clean( true )
//     .source( './src/alpha' )
//     .destination( './public/alpha' )
//     .use( publish() )       // "Publish" goes **before** "Collections"
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

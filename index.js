let Metalsmith      = require( 'metalsmith' )
    , browserSync   = require( 'metalsmith-browser-sync' )
    , collections   = require( 'metalsmith-collections' )
    , debug         = require( 'metalsmith-debug' )
    , layouts       = require( 'metalsmith-layouts' )
    , permalinks    = require( 'metalsmith-permalinks' )
    , remarkable    = require( 'metalsmith-markdown-remarkable' )
    , slug          = require( 'metalsmith-slug' )
    , writeMetadata = require( 'metalsmith-writemetadata' )
    , publish       = require( 'metalsmith-publish' )
    , snippet       = require( 'metalsmith-snippet' )
    ;

Metalsmith( __dirname )
    .metadata( {
        'site-name'      : 'philgs.me',
        'site-url'       : 'http://philgs.me',
        'generator-name' : 'Metalsmith',
        'generator-url'  : 'http://metalsmith.io'
    } )
    .clean( true )
    .source( './src' )
    .destination( './public' )
    .use( publish() )       // "Publish" goes **before** "Collections"
    .use( collections( {    // "Collections" goes **before** "Remarkable"
        posts: {
            pattern: 'posts/**/*.md',
            sortBy: 'date',
            reverse: true
        },
        'metalsmith-tutorial': {
            pattern: 'posts/metalsmith-tutorial/*.md',
            sortBy: 'date',
            reverse: true
        },
        'horrible-truth': {
            pattern: 'posts/horrible-truth/*.md',
            sortBy: 'date',
            reverse: true
        }
    } ) )
    .use( slug( { mode: 'rfc3986' } ) )
    .use( remarkable() )    // "Remarkable" goes **after** "Collections" and **before** both "Permalinks" and "Layouts"
    .use( permalinks( {     // "Permalinks" goes **after** "Remarkable"
        linksets: [
            {
                match: { collection: 'posts' },
                pattern: 'blog/:date/:slug',
                date: 'YYYY/MM',
                useDefaultDate: true
            }
        ]
    } ) )
    .use( snippet( {        // "Snippet" goes **after** "Remarkable" and **before** "Layouts"
        "maxLength": 300
    } ) )
    .use( layouts( {        // "Layouts" goes **after** "Permalinks"
        engine  : 'handlebars',
        default : 'post.hbs',
        partials: 'layouts/partials'
    } ) )
    .use( debug() )
    // .use( browserSync( {
    //     'server': 'public',
    //     'files' : [ 'src/**/*.md', 'layouts/**/*.hbs' ],
    //     'open'  : false
    // } ) )
    // .use( writeMetadata( {
    //     pattern: [ '**/*.html', '**/*.md' ],
    //     ignorekeys: [ 'contents' ],
    //     collections: {
    //         posts: {
    //             output: {
    //                 path: 'collections/posts.json',
    //                 metadata: {
    //                     "type": "list"
    //                 }
    //             },
    //             ignorekeys: [ 'contents' ],
    //             childIgnorekeys: [ 'next', 'previous' ]
    //         },
    //         'metalsmith-tutorial': {
    //             output: {
    //                 path: 'collections/metalsmith-tutorial.json',
    //                 metadata: {
    //                     "type": "list"
    //                 }
    //             },
    //             ignorekeys: [ 'contents' ],
    //             childIgnorekeys: [ 'next', 'previous' ]
    //         },
    //         'horrible-truth': {
    //             output: {
    //                 path: 'collections/horrible-truth.json',
    //                 metadata: {
    //                     "type": "list"
    //                 }
    //             },
    //             ignorekeys: [ 'contents' ],
    //             childIgnorekeys: [ 'next', 'previous' ]
    //         }
    //     }
    // } ) )
    .build( ( err, files ) => {
        if ( err ) {
            console.log( err );
        } else {
            let fileNames = Object.keys( files );
            console.log( 'Successfully built ' + fileNames.length + ' files!' );
        }
    } );

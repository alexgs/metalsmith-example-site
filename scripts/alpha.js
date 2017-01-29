let Metalsmith      = require( 'metalsmith' )
    , argv          = require( 'minimist' )( process.argv.slice( 2 ) )
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

let rootPath = argv[ 'root' ];

// TODO: Refactor into generic build process that takes an options argument and lives in `<root>/utilities`

let metalsmith = Metalsmith( rootPath );
metalsmith
    .metadata( {
        'site-name'      : 'philgs.me',
        'site-url'       : 'http://philgs.me',
        'generator-name' : 'Metalsmith',
        'generator-url'  : 'http://metalsmith.io'
    } )
    .clean( true )
    .source( './src/alpha' )
    .destination( './public/alpha' )
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
    .build( ( err, files ) => {
        if ( err ) {
            console.log( err );
        } else {
            // Save file and collection metadata to JSON files
            let metadata = metalsmith.metadata();
            let metadataCollection = {
                files: files,
                collections: metadata
            };
            saveMetadata( rootPath, metadataCollection );

            let fileNames = Object.keys( files );
            console.log( 'Successfully built ' + fileNames.length + ' files!' );
        }
    } );
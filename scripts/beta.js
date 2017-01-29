let argv        = require( 'minimist' )( process.argv.slice( 2 ) )
    , build     = require( '../utilities/build' )
    ;

let configuration = {
    collections: {
        posts: {
            pattern: 'posts/**/*.md',
            sortBy: 'date',
            reverse: true
        },
        'redux-tutorial': {
            pattern: 'posts/redux-tutorial/*.md',
            sortBy: 'date',
            reverse: true
        },
        'shocking-secret': {
            pattern: 'posts/shocking-secret/*.md',
            sortBy: 'date',
            reverse: true
        }
    },
    id: 'beta',
    layouts: {
        default : 'post.hbs',
    },
    liveServer: !!argv[ 'server' ],
    metadata: {
        siteName: 'Beta Site',
        siteUrl: 'https://beta.local'
    },
    permalinks: {
        linksets: [
            {
                match: { collection: 'posts' },
                pattern: 'blog/:date/:slug',
                date: 'YYYY/MM',
                useDefaultDate: true
            }
        ]
    }
};

// console.log( configuration );
build( configuration );

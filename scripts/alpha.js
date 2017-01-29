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
    },
    id: 'alpha',
    layouts: {
        default : 'post.hbs',
    },
    metadata: {
        siteName: 'Alpha Site',
        siteUrl: 'https://alpha.local'
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

build( configuration );

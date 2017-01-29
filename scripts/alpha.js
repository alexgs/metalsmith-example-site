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
    metadata: {
        siteName: 'Alpha Site',
        siteUrl: 'https://alpha.local'
    },
    paths: {
        source: 'alpha',
        destination: 'alpha'
    }
};

build( configuration );

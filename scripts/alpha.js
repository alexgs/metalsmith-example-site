let argv        = require( 'minimist' )( process.argv.slice( 2 ) )
    , build     = require( '../utilities/build' )
    ;

let configuration = {
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

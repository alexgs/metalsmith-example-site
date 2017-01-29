let argv        = require( 'minimist' )( process.argv.slice( 2 ) )
    , build     = require( '../utilities/build' )
    ;

let configuration = {
    rootPath: argv[ 'root' ],
    metadata: {
        siteName: 'Alpha Site',
        siteUrl: 'https://alpha.local'
    }
};

build( configuration );

let path = require( 'path' );

let root = path.resolve( __dirname, '..' );

module.exports = {

    alpha: {
        cmd: 'node',
        args: [
            'scripts/alpha.js',
            '--root=' + root
        ]
    }

};

let _ = require( 'lodash' );

module.exports = function( grunt, options ) {

    // --- HELPER FUNCTIONS ---
    let buildHandler = function( target ) {
        let targetList = [
            'alpha'
        ];

        if ( !target ) {
            target = 'all';
        } else {
            target = _.camelCase( target );
        }

        if ( target === 'all' ) {
            grunt.log.ok( 'Building all targets...' );
            _.forEach( targetList, executeScript );
        } else if ( target === 'help' ) {
            grunt.log.warn( 'Available targets' + _.join( targetList, ', ' ) );
        } else if ( _.includes( targetList, target ) ) {
            executeScript( target );
        } else {
            grunt.log.error()
                .error( 'Unknown build target: ' + target )
                .error( 'Try "build:help" to see a list of valid targets' );
        }
    };

    let executeScript = function( name ) {
        grunt.log.ok( 'Building target ' + name );
        grunt.task.run( 'run:' + name );
    };

    // --- ALIAS DEFINITIONS ---
    return {

        allTasks: {
            description: 'Show all available tasks',
            tasks: [ 'availabletasks:all' ]
        },

        alpha: {
            description: 'Build "Alpha" site',
            tasks: [ 'run:alpha' ]
        },

        build: {
            description: 'Build a site',
            tasks: buildHandler
        },

        default: {
            description: 'Show user-defined tasks',
            tasks: [ 'availabletasks:default' ]
        },

    };
};

let _ = require( 'lodash' );

module.exports = function( grunt, options ) {

    // --- HELPER FUNCTIONS ---
    let targetList = _.map( [
        'alpha',
        'beta'
    ], _.camelCase );

    let makeTargetHandler = function( callback, allowAll = false ) {
        return function targetHandler( target ) {

            if ( !target ) {
                target = 'all';
            } else {
                target = _.camelCase( target );
            }

            if ( allowAll && target === 'all' ) {
                grunt.log.ok( 'Building all targets...' );
                _.forEach( targetList, callback );
            } else if ( target === 'help' ) {
                grunt.log.warn( 'Available targets: ' + _( targetList ).map( _.kebabCase ).join( ', ' ) );
            } else if ( _.includes( targetList, target ) ) {
                callback( target );
            } else {
                grunt.log.error()
                    .error( 'Unknown build target: ' + target )
                    .error( 'Try "build:help" to see a list of valid targets' );
            }
        };
    };

    let executeBuildScript = function( name ) {
        grunt.log.ok( 'Building target ' + name );
        grunt.task.run( 'run:' + name );
    };

    let executeDevScript = function( name ) {
        grunt.log.ok( 'Building target ' + name + ' for live server' );
        grunt.task.run( 'run:' + name + 'Dev' );
    };

    let buildHandler = makeTargetHandler( executeBuildScript, true );
    let devHandler = makeTargetHandler( executeDevScript );

    // --- ALIAS DEFINITIONS ---
    return {

        allTasks: {
            description: 'Show all available tasks',
            tasks: [ 'availabletasks:all' ]
        },

        build: {
            description: 'Build a site',
            tasks: buildHandler
        },

        default: {
            description: 'Show user-defined tasks',
            tasks: [ 'availabletasks:default' ]
        },

        dev: {
            description: 'Launch live server for a site',
            tasks: devHandler
        }

    };
};

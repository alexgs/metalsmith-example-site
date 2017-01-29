module.exports = function( grunt, options ) {

    // --- HELPER FUNCTIONS ---
    let buildHandler = function( target ) {
        grunt.log.ok().ok( target );
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

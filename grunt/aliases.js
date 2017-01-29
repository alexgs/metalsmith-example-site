module.exports = {

    allTasks: {
        description: 'Show all available tasks',
        tasks: [ 'availabletasks:all' ]
    },

    alpha: {
        description: 'Build "Alpha" site',
        tasks: [ 'run:alpha' ]
    },

    default: {
        description: 'Show user-defined tasks',
        tasks: [ 'availabletasks:default' ]
    },

    // start: {
    //     description: 'How to use a custom function',
    //     tasks: function() {
    //         /* do something */
    //         return 27;
    //     }
    // }

};

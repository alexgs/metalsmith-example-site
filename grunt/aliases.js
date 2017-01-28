module.exports = {

    'build-dev': {
        description: 'Build the project for development',
        tasks: [ 'webpack:dev' ]
    },

    default: {
        description: 'Show user-defined tasks',
        tasks: 'availabletasks'
    },

    dev: {
        description: 'Start the Webpack dev server',
        tasks: [ 'webpack-dev-server:dev' ]
    },

    start: {
        // TODO
        tasks: [ 'node index.js' ]
    }

};

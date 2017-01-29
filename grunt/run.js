module.exports = {

    alpha: {
        cmd: 'node',
        args: [
            'scripts/alpha.js'
        ]
    },

    alphaDev: {
        cmd: 'node',
        args: [
            'scripts/alpha.js',
            '--server'
        ]
    },

    beta: {
        cmd: 'node',
        args: [
            'scripts/beta.js'
        ]
    },

    betaDev: {
        cmd: 'node',
        args: [
            'scripts/beta.js',
            '--server'
        ]
    }

};

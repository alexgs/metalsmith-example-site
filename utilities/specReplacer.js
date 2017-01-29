'use strict';

let _ = require( 'lodash' );

module.exports = function( key, value ) {
    if ( _.isFunction( value ) ) {
        return _.chain( value.name ).trimStart( 'is' ).toLower().value();
    }

    // default
    return value;
};

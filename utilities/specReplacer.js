'use strict';

let _ = require( 'lodash' );

module.exports = function( key, value ) {
    if ( _.isFunction( value ) ) {
        let functionName = value.name;
        if ( _.startsWith( functionName, 'is' ) ) {
            functionName = functionName.substring( 2 );
        }
        return _.chain( functionName )
            .kebabCase()
            .replace( '-', ' ' )
            .value();
    }

    // default
    return value;
};

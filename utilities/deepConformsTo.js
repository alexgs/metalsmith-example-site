let _ = require( 'lodash' );

module.exports = {
    deepConformsTo: function deepConformsTo( object, source ) {
        // Partition the keys into those for primitive values and those for child objects
        let [ children, primitives ] = _.partition( _.keys( source ),
            key => _.isPlainObject( source[ key ] )
        );

        // Check that the primitives match the spec
        let checkPrimitives = _.conformsTo( object, _.pick( source, primitives ) );

        // If there are child objects, check them recursively.
        // If there are only primitives, end recursion.
        if ( children.length > 0 ) {
            let checkChildren = _.forEach( children,
                child => deepConformsTo( object[ child ], source[ child ] )
            );
            return checkPrimitives && checkChildren;
        } else {
            return checkPrimitives;
        }
    }
};

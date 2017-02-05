---
title: The Horrible Truth, Part 1
slug: horrible-truth-1
date: 2016-12-20
publish: 2016-12-20
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Step 1: Install Metalsmith

Install Metalsmith with the following command:

```bash
npm install -g metalsmith
```

You can now type `metalsmith` at the prompt, and you should see some error messages from Metalsmith itself (rather than just some "command not found" error).

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget auctor nisi. Curabitur gravida fermentum urna vel congue. Nunc metus massa, ultricies quis elit vel, scelerisque viverra nisl. In id porta nunc. Ut et ligula urna. Suspendisse ornare lobortis augue, quis ultrices sem vulputate id. Aenean cursus sem mi, et aliquet lorem tincidunt vel. Integer dui urna, luctus ut dapibus sed, pharetra at nibh. Ut mollis at ligula vitae porta. Etiam eu nisl est. Duis maximus at arcu id faucibus. Suspendisse posuere imperdiet hendrerit. Donec in diam tincidunt, pulvinar ligula ultrices, pulvinar tortor. Nam euismod ipsum ut convallis ullamcorper. Fusce tempus pretium mi, egestas interdum velit laoreet sed.

## Fringilla Massa

Cras vitae fringilla massa. Integer ac arcu ac purus scelerisque pharetra et nec est. Maecenas gravida quam quam, non mattis arcu suscipit id. Aenean mollis, nunc eget egestas lacinia, magna turpis fringilla elit, eget cursus sapien massa ac tellus. Integer at congue tortor. Nam rutrum a tortor vel iaculis. Nam feugiat vel ex ac ultricies. Quisque nec iaculis leo. Curabitur dictum ex at nunc egestas, quis sagittis dolor aliquam. Praesent in nibh at purus vulputate lacinia vitae a arcu. Quisque ut arcu ut neque sollicitudin mollis.

Vestibulum risus elit, mollis sed varius vitae, tincidunt id tellus. Integer libero purus, sagittis id interdum at, porttitor ac purus. Sed nec eleifend lacus, quis facilisis mauris. Etiam efficitur tempor leo vitae maximus. Morbi laoreet convallis quam, gravida sodales purus. Nullam volutpat magna id enim dignissim, at tempor mi bibendum. Nulla in aliquet libero. Nunc sodales ex vitae gravida scelerisque. Nunc sit amet ex velit. Sed feugiat mollis eleifend. Quisque tellus leo, mattis non mauris a, sagittis finibus risus.

```javascript
module.exports = function metalsmithBuilder( options ) {
    // Check that the options object meets the specification
    if ( !_.deepConformsTo( options, optionsSpec ) ) {
        console.log( 'Options object specification:\n' + JSON.stringify( optionsSpec, specReplacer, 2 ) );
        process.exitCode = 14;
        throw new Error( 'Invalid `options` object passed to build script' );
    }

    // --- SETUP ---
    // Initialize and normalize
    options.id = _.kebabCase( options.id );
    let resolvePath = getPathResolver( options.id );

    // Configure metadata
    let userMetadata = _.mapKeys( options.metadata,
        ( value, key ) => _.kebabCase( key )
    );
    let metadata = _.merge( { }, config.metadata, userMetadata );

    // Set constants
    const source = resolvePath( config.paths.srcRoot );
    const destination = resolvePath( config.paths.dstRoot );

    // Configure "metalsmith layouts" options
    config.layouts = _.merge( config.layouts, {
        directory: resolvePath( config.paths.layoutsRoot ),
        partials: resolvePath( config.paths.layoutsRoot, config.paths.partialsSubdir )
    } );
    const layoutsOptions = _.merge( { }, config.layouts, options.layouts );
}
```

Morbi luctus metus et mattis consectetur. Etiam sollicitudin, quam eget viverra venenatis, velit tortor gravida dolor, pharetra fermentum risus nisl sit amet diam. Sed et ornare ligula, nec hendrerit risus. Mauris id leo faucibus, molestie quam quis, commodo elit. Aliquam laoreet, ante ac tincidunt sodales, ligula nisl sollicitudin ligula, at dapibus turpis neque in mauris. Quisque mattis a lacus ut egestas. Etiam lectus ante, efficitur in urna eu, bibendum pulvinar diam. Fusce mattis lacinia libero, sit amet feugiat quam lobortis vel. Fusce nec pulvinar justo, vel aliquam nibh.

Nam non vestibulum tortor, non posuere dui. Nullam eu lacus ac urna vestibulum pretium sed et nibh. Donec volutpat purus at ullamcorper finibus. Vestibulum a condimentum dui. Mauris accumsan urna in porttitor pulvinar. Proin porttitor metus eget efficitur auctor. Morbi pretium odio at risus tempor, quis gravida arcu elementum. Donec tempor elementum fringilla. Nulla facilisi. Vestibulum tincidunt scelerisque diam, viverra tincidunt odio venenatis quis. Donec ut nulla et nunc vestibulum volutpat eget id enim. Aliquam posuere justo tristique mi sagittis venenatis.

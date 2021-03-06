require.config({
    // alias library paths
    paths :{
        'angular':'../vendor/angular/angular',
        'domReady':'../vendor/requirejs-domready/domReady',
        'angular-ui-router':'../vendor/angular-ui-router/release/angular-ui-router',
        'showdown':'../vendor/showdown/src/showdown',
        'sanitize':'../vendor/angular-sanitize/angular-sanitize.min',
        'prettify':'../vendor/showdown/src/extensions/prettify'
    },

    // angular doesn't support AMD out of the box, put it in a shim
    shim:{
        'angular':{
            exports:'angular'
        }
    },

    //kick start app
    deps:['./bootstrap']

});

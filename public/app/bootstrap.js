define(['require','angular','./app'], function (require, ng){
    'use strict';

    require(['domReady!'], function (document){
        console.log('@domReady');

        // manually start up angular application named 'app'
        ng.bootstrap(document,['app']);
        // app then loads dependencies
    });
});

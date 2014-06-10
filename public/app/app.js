define(['angular','./scripts/directives/showdown-markup/index','./scripts/controllers/showdown-markup/index'], function ( angular ){
    "use strict";
    // console.log(ng);
    return angular.module('app',
                           [
                            'digitalmonkstudio.directives',
                            'digitalmonkstudio.controllers'
                          ]);
});

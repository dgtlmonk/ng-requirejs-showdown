define(['angular','./scripts/directives/index','./scripts/controllers/index'], function ( angular ){
    "use strict";
    // console.log(ng);
    return angular.module('app',
                          [
                            'digitalmonkstudio.directives',
                            'digitalmonkstudio.controllers'
                          ]);
});

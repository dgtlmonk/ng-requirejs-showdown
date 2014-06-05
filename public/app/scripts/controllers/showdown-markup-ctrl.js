define(['./module-base'], function ( module ){
   "use strict";

    module.controller('ShowdownMarkupCtrl', ['$scope',function ($scope) {
        $scope.data  = {
            "text": "Underscores\nthis should have _emphasis_\nthis_should_not\n_nor_should_this\n\n\
            #### Autolinking\na non-markdown link: http://github.com/blog\nthis one is [a markdown link](http://github.com/blog)\nEmail test: support@github.com"
        }
    }])
 });



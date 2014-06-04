define(['./module-base','showdown'], function( module ) {
    "use strict";
    console.log('@showdownMarkup');
    module.directive('showdownMarkup', [function ($scope){
    // console.log($scope);

       return {
            restrict: 'EA',
            // template: 'test data: {{ markupData.markup }}',
            templateUrl:'partials/showdown-markup.html',

            scope:{ // bindings
                 markupData: '=', // note the attrib markup-data in directive instance
            },

            link: function( scope, el, attr) {
                // console.log(scope.markupData);
                //scope.text ='this is a test';
            }

       };
   }])
});

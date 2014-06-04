define(['./module-base','showdown','sanitize'], function( module ) {
    "use strict";
    console.log('@showdownMarkup');

    var converter = new Showdown.converter();

    module.directive('showdownMarkup', [function ($scope){
    // console.log($scope);

       return {
            restrict: 'EA',
            // template: 'test data: {{ markupData.markup }}',
            templateUrl:'partials/showdown-markup.html',

            scope:{ // bindings
                 markupData: '=', // note the attrib markup-data in directive instance
            },

            link: function( scope, el, attrs) {

               scope.$watch(attrs.markupData, function(val){
                 // console.log('changed ... ' + el.text());
                  var converted = converter.makeHtml(el.text());
                 // markupData.text = 'test';
                 el.html(converted);
               });

            }

       };
   }])
});

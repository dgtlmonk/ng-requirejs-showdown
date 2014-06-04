define(['./module-base'], function( module ) {
    "use strict";
    console.log('@showdownMarkup');
    module.directive('showdownMarkup', function (){
       return {
            restrict: 'EA',
            template: 'this is a template string',
            scope:{ // bindings
                markupToHTML:'='
            }
       };
   })
});

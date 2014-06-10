define(['../module-base','showdown'], function( module ) {
    "use strict";
    console.log('@showdownMarkup');

    var converter = new Showdown.converter();

    module.directive('showdownMarkup', ['$rootScope','$http', function ($scope, $http){
                      // console.log($http);
       return {

            restrict: 'EA',
            templateUrl:'partials/showdown-markup.html',

            scope:{ // bindings
                 post: '=', // note the attrib markup-data in directive instance
            },

            link: function( scope, el, attrs) {
               scope.$watch(attrs.markupData, function(val){ // watch local scope markupData for changes and apply
                  //  console.log('$watch triggered');
                  console.log(scope.post); // entry
                  var blog = '/post/' + scope.post + '.md';
                   $http.get(blog)
                        .success(function(res){
                            var htmlText = converter.makeHtml(res);
                            var pattern = /<a href=/g;
                            var sanitizedHTML = htmlText.replace(pattern,"<a target='_blank' href=");
                            el.html(sanitizedHTML);
                                // console.log(response);
                          })

                        .error(function(data){
                            console.log('Error lloading file');
                        });
               });

               attrs.$observe('markupData', function (data){
                    console.log('$observer triggered');
                    // console.log(data);

               })
            }

       };
   }])
});

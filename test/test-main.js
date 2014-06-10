var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  // baseUrl: '/base',

  // dynamically load all test files
 // deps: allTestFiles, // this is disabled because we're watching these files already via Gulp

 // alias library paths
    paths :{
        'angular':'../public/vendor/angular/angular',
        'domReady':'../public/vendor/requirejs-domready/domReady',
        'angular-ui-router':'../public/vendor/angular-ui-router/release/angular-ui-router',
        'showdown':'../public/vendor/showdown/src/showdown'
    },

    // angular doesn't support AMD out of the box, put it in a shim
    shim:{
        'angular':{
            exports:'angular'
        }
    },

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

console.log('!!! config main loaded !!');

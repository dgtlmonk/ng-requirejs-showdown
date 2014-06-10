var gulp = require('gulp'),
    karma = require('gulp-karma'),
    connect = require('gulp-connect');

gulp.task('karma',function(){
    gulp.src(['test/*.js','test/**/*Spec.js'])
    .pipe(karma({
       // configFile :'./config/karma.conf.js',
        action : 'watch',
        frameworks:['jasmine','requirejs'],
        plugins:['karma-phantomjs-launcher','karma-jasmine', 'karma-requirejs'],
        browsers: ['PhantomJS'],
        autoWatch: true,
        files:[
            // './public/vendor/requirejs/require.js'
            './public/vendor/angular/angular.js'
        ]
    }));

})

gulp.task('default',['karma']);

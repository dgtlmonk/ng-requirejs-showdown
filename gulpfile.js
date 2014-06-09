var gulp = require('gulp'),
    karma = require('gulp-karma'),
    phantomjs = require('karma-phantomjs-launcher'),
    connect = require('gulp-connect');

gulp.task('karma',function(){
    gulp.src(['test/*.js','test/**/*Spec.js'])
    .pipe(karma({
        configFile :'./config/karma.conf.js',
        action : 'watch',
        frameworks:['jasmine','requirejs'],
        plugins:['karma-phantomjs-launcher','karma-jasmine', 'karma-requirejs'],
        browser: ['PhantomJS']
    }));

})

gulp.task('default',['karma']);

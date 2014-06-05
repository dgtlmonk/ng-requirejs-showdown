module.exports = function(config) {
    config.set({

        basePath : '',
        files:[
            { pattern:'public/app/scripts/**/*.js', include:false },
            { pattern:'public/app/scripts/*.js', include:false },
            { pattern:'public/vendor/**/*.js', include:false },
            { pattern:'public/vendor/*.js', include:false },
        ],

        browsers: ['PhantomJS'],
        autowatch: true
    })
}

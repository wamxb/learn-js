var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    var files = ['**/*.html'];

    browserSync.init(files, {
        server: {
            baseDir: './'
        },
        port: 4000,
        ui: {
            port: 4001
        }
    });
});

gulp.task('default', ['browser-sync']);
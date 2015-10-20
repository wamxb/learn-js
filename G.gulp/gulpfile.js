var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');

var basePath = 'src/';
var buildPath = 'dist/';
var paths = {
    js: [basePath + 'js/**/*.js'],
    sass: [basePath + 'scss/**/*.scss'],
    css: [basePath + 'css/**/*.css'],
    img: [basePath + 'images/**/*'],
    html: [basePath + 'include/**/*.html'],
    lib: {
        js: [],
        css: [],
        img: []
    }
};

gulp.task('fileinclude', function () {
    gulp.src(paths)
        .pipe(plugins.fileInclude({
            prefix: '@@'
            , basepath: 'src/include' // 具体的地址@file
            , context: {
                name: 'test'
            }
        }))
        .pipe(gulp.dest(buildPath));
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildPath + basePath + 'css/'));
});

gulp.task('browser-sync', function () {
    var files = [
        paths.js[0],
        paths.css[0],
        paths.img[0],
        paths.html[0]
    ];

    browserSync.init(files, {
        server: {
            baseDir: './dist'
        }
    });
});


// watch
gulp.task('watch', function () {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.img, ['img']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['fileinclude', 'html']);
});

gulp.task('default', ['browser-sync', 'watch', 'sass']);
//gulp.task('default', ['browser-sync', 'watch', 'fileinclude', 'sass']);
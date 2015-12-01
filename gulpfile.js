var gulp = require('gulp');
var mustache = require('gulp-mustache');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var less = require('gulp-less');

var buildDir = "./build";


gulp.task('mustache', function(){
    gulp.src('./src/templates/*.mustache')
        .pipe(mustache(undefined, {extension: '.html'}))
        .pipe(gulp.dest(buildDir));
});

gulp.task('webpack', function(){
  return gulp.src('./src')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(buildDir));
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        server: {
            baseDir: buildDir,
            index: "./index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('less', function () {
    return gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest(buildDir + '/css/'));
});


gulp.task('watch', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch(['./src/js/**/*.js', './src/js/**/*.jsx'], ['webpack']);
    gulp.watch(['./dist/*.*', './dist/**/*.*'], ['bs-reload']);
    gulp.watch([buildDir + '/*.*', buildDir + '/**/*.*'], ['bs-reload']);
    gulp.watch(['./src/templates/*.mustache', './src/templates/**/*.mustache'], ['mustache']);
});

gulp.task('default', ["less", "mustache", "webpack", "browser-sync"], function(){
  runSequence('watch');
});

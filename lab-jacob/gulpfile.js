'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['test', 'lint']);
});

gulp.task('default',  ['test', 'lint', 'watch']);

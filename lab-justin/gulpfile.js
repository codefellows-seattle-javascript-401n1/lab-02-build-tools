'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', function(){

  return gulp.src('test/*.js')
  .pipe(mocha());
});

gulp.task('eslint', function(){

  return gulp.src('*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

var watcher = gulp.watch('*.js', !'package.json');
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

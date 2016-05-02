'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('default', ['mocha-test', 'eslint-test']
);

gulp.task('mocha-test', function(){
  //src is greet-test.js
  return gulp.src(__dirname + '/test/greet-test.js')
    //stream  through gulp-mocha
    .pipe(mocha());
});
gulp.task('eslint-test', function(){
//source is all files in lab-doug except node_modules folder
  return gulp.src([__dirname + '/**/*.js',  '!/node_modules/**'])
  //stream it through eslint
  .pipe(eslint())
  .pipe(eslint.format());
});

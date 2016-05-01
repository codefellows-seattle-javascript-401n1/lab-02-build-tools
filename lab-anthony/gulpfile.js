'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('default', function(){
  return gulp.src(['test/*.js'], {read: false})
            .pipe(mocha());
            // .pipe(eslint())
            // .pipe(eslint.format())
            // .pipe(eslint.failAfterError());
});

gulp.task('lint', function(){
  return gulp.src(['*.js', 'test/*.js'])
            .pipe(eslint())
            .pipe(eslint.format());
            // .pipe(eslint.failAfterError());
});

'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => {
  gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

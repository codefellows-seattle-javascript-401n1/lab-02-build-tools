'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('tests', function() {
  gulp.src(__dirname + '/test/test-*.js').pipe(mocha());
});

gulp.task('default', ['tests']);

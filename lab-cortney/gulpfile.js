'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
  return gulp.src(__dirname + '/test/greet-test.js')
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src([__dirname + '/*/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

const watcher = gulp.watch('*/**/*.js', !'package.json', ['default', 'lint']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

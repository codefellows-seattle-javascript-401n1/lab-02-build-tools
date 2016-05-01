'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
  return gulp.src(['*.js', 'test/*.js', '!package.json'])
            .pipe(mocha())
            .pipe(eslint())
            .pipe(eslint.format());
});

gulp.task('watch', function(){
  const watcher = gulp.watch(['*.js', 'test/*.js', '!package.json'], ['default']);
  watcher.on('change', function(e){
    console.log('The file '+e.path+' was '+e.type+', running tasks again:');
  });
});

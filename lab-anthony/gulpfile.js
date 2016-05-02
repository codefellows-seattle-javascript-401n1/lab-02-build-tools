'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
  return gulp.src(['*.js', 'test/*.js', 'lib/*.js'])
            .pipe(mocha())
            .pipe(eslint(
              {
                'rules':{
                  'no-console': 0,
                  'indent': [
                    2,
                    2
                  ],
                  'quotes': [
                    2,
                    'single'
                  ],
                  'linebreak-style': [
                    2,
                    'unix'
                  ],
                  'semi': [
                    2,
                    'always'
                  ]
                },
                'env': {
                  'es6': true,
                  'node': true,
                  'browser': true
                },
                'globals': {
                  'describe': false,
                  'it': false,
                  'beforeEach': false,
                  'afterEach': false,
                  'before': false,
                  'after': false
                },
                'ecmaFeatures': {
                  'modules': true,
                  'experimentalObjectRestSpread': true,
                  'impliedStrict': true
                },
                'extends': 'eslint:recommended',
                'useEslintrc':false
              }
            ))
            .pipe(eslint.format());
});

gulp.task('watch', function(){
  gulp.watch(['*.js', 'test/*.js', 'lib/*.js'], ['default']);
});

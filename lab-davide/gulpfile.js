var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulp =  require('gulp')

gulp.task('default', function() {
  return gulp.src('./test/greet-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
  gulp.watch('./test/greet-test.js', ['default']);
});

gulp.task('eslint', function(){
  return gulp.src('./test/greet-test.js', ['default'])
  .pipe(eslint(


{
  "rules" : {}
    "no-console": 0,
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
        ],
        "semi": [
          2,
          "always"
        ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "impliedStrict": true
  },
  "extends": "eslint:recommended"
}
}}

.pipe(eslint.format());

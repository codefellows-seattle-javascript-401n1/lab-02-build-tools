var gulp = require('gulp');
var mocha = require('gulp-mocha');


gulp.task('default', function() {
  return gulp.src('./test/greet-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
  gulp.watch('./test/greet-test.js', ['default']);
});
 

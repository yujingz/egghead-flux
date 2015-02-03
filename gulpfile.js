var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var reactify = require('reactify');
var source = require("vinyl-source-stream");

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['browserify', 'copy'])

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default'])
});
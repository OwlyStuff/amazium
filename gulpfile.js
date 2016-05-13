'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['compile']);
});

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./sources/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
       outputStyle: 'compressed'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});
 
gulp.task('localserver', ['sass'], function () {
  browserSync.init({
        server: "./"
    });

  gulp.watch('./sources/scss/**/*.scss', ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['localserver']);
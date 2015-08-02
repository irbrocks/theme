'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Default task to see sass
gulp.task('default', ['sass'], function() {
  gulp.start('sass:watch');
});

// Compile sass files
gulp.task('sass', ['sass:production'],function () {
  gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('irb.rocks.css'))
    .pipe(gulp.dest('./assets/css'));
});

// Compile sass files into a minimal version (compressed)
gulp.task('sass:production', function (){
  gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('irb.rocks.min.css'))
    .pipe(gulp.dest('./assets/css'));
});

// Watch sass files to compile it on changes
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
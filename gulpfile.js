/*!
 * flip.js - gulpfile.js
 * MIT License (c) 2015
 */
'use strict';

// Load dependecies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var minifyCSS = require('gulp-minify-css');
var strReplace = require('gulp-replace');

// [Task] removes 'build/'
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// [Task] copy public files to src
gulp.task('src', function() {
  gulp.src('public/flip.*')
    .pipe(gulp.dest('src'));
});

// [Task] uglify js
gulp.task('uglify', function() {
  return gulp.src('src/*.js')
    .pipe(strReplace(/'use strict';/g, ''))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
});

// [Task] minify css
gulp.task('minify', function() {
  return gulp.src('src/*.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
});

// [Task] generates build
gulp.task('default', ['src', 'uglify', 'minify']);

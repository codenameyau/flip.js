/*!
 * flip.js - gulpfile.js
 * MIT License (c) 2015
 */
'use strict';

/********************************************************************
* DEPENDENCIES
*********************************************************************/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var strReplace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rimraf = require('rimraf');


/********************************************************************
* BUILD CONFIGURATION
*********************************************************************/
var PATH = {
  public: 'public/',
  build: 'build/',
};

var publicCSS = PATH.public + 'flip.css';
var publicJS  = PATH.public + 'flip.js';
var prefixSupport = 'last 2 versions';


/********************************************************************
* GULP TASKS
*********************************************************************/

// [Task] removes 'build/'
gulp.task('clean', function(cb) {
  rimraf(PATH.build, cb);
});


// [Task] copy public files to src
gulp.task('copy', function() {

  // Copy over flip.css
  gulp.src(publicCSS)
    .pipe(autoprefixer({
        browsers: [prefixSupport],
        cascade: true
    }))
    .pipe(gulp.dest(PATH.build));

  // Copy over flip.js
  gulp.src(publicJS)
    .pipe(strReplace(/'use strict';/g, ''))
    .pipe(gulp.dest(PATH.build));
});


// [Task] uglify js
gulp.task('js', function() {
  gulp.src(publicJS)
    .pipe(strReplace(/'use strict';/g, ''))
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(PATH.build));
});


// [Task] minify css
gulp.task('css', function() {
  gulp.src(publicCSS)
    .pipe(autoprefixer({
        browsers: [prefixSupport],
        cascade: true
    }))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(PATH.build));
});


// [Task] build
gulp.task('build', ['copy', 'js', 'css']);


// [Task] generates build
gulp.task('default', ['build']);

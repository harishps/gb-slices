"use strict";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

// Compile SCSS(SASS) files
gulp.task('scssCompileEngine', gulp.series(function compiledScss() {
  return gulp.src(['scss/styles.scss'])
    .pipe(sass.sync({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'))
}));

// Build task
gulp.task("build", gulp.series(function buildStarted() {
  gulp.watch('scss/**/*.scss', gulp.series('scssCompileEngine', function compiledCss (done) {
    done();
  }));
}));

// Default task
gulp.task("default", gulp.series('build')); 

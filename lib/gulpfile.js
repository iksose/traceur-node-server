"use strict";
var gulp = require('gulp');
var traceur = require('gulp-traceur');
var traceurOptions = require('./config').traceur;
var concat = require('gulp-concat');
gulp.task('build', function() {
  gulp.src(['**/*.js']).pipe(traceur(traceurOptions)).on('error', handleErr).pipe(gulp.dest('lib/'));
});
function handleErr(err) {
  console.log("Err", err);
}
//# sourceURL=gulpfile.js
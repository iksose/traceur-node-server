var gulp = require('gulp');
var traceur = require('gulp-traceur');
var traceurOptions = require('./config').traceur;
// var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

// TRANSPILE ES6
gulp.task('build', function() {
    gulp.src(['**/*.js'])
        // .pipe(sourcemaps.init())
        .pipe(traceur(traceurOptions))
        .on('error', handleErr)
        // .pipe(concat('main.js'))
        // .pipe(traceur(traceurOptions))
        // .on('error', gutil.log)
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('lib/'));
});

function handleErr(err) {
    console.log("Err", err)
}

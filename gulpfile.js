const gulp = require('gulp');

const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

//Task to run JS hint
gulp.task('jshint', function()
{
    gulp.src('./index.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


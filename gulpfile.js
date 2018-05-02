'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');

gulp.task('sass', function () {
  return gulp.src('./source/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/**/*.scss', ['sass']);
});

gulp.task('start', function () {
  nodemon({
    script: 'app.js',
    ext: 'js html scss',
    env: { 'NODE_ENV': 'development' },
    tasks: 'sass'
  });
});

gulp.task( 'default', [ 'sass','start' ] );

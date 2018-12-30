 const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const img = require('gulp-imagemin');
const rename = require('gulp-rename');

gulp.task('js',function(){
	gulp.src('./src/js/*/*js').pipe(concat('index.min.js')).pipe(uglify()).pipe(gulp.dest('./dist/js'));
})
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss').pipe(sass()).pipe(cssnano()).pipe(gulp.dest('./dist/css'));
})
gulp.task('img',function(){
	gulp.src('./src/img/*.*').pipe(img()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('./dist/img'));
})
gulp.task('default',function(){
	gulp.watch('./src/js/*/*.js',['js']);
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/img/*.*',['img']);
})
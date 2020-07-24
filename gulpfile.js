var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {

 	return gulp.src('styles_scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('styles_css'));
});

//task para o watch
gulp.task('watch', function () {
  gulp.watch('styles_scss/*.scss', gulp.series('sass'));
});

//task default gulp
gulp.task('default', gulp.series('sass', 'watch'));
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace')

gulp.task('minify', function () {
    gulp.src([
        'app/js/angular.js',
        'app/js/app.js',
        'app/js/controller.js'])
        .pipe(concat('finance.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('package', function () {
    gulp.src(['app/index.html'])
        .pipe(htmlreplace({
            js: 'js/finance.min.js',
            css: 'css/bootstrap.css'
        }))
        .pipe(gulp.dest('dist'))
    
    gulp.src(['app/css/bootstrap.css'])
        .pipe(gulp.dest('dist/css'))

});
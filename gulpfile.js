const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concatCss = require('gulp-concat-css');

gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
})

gulp.task('concat-css', () => {
    return gulp.src('dist/*css')
        .pipe(concatCss("all.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
})

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "page/index.html"
        },
        files: ['src'],
        port: 8808,
        host: "localhost"
    })
})

gulp.task('newLess', function() {
    gulp.src('./src/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css'))
})

gulp.task('watch', function() {
    gulp.watch('./src/static/less/*.less', ['newLess'])
})
gulp.task('default', ['newLess', 'server', 'watch'])
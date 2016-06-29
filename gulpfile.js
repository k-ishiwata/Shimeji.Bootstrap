var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');

gulp.task("sass", function() {
  gulp.src("assets/scss/**/*scss")
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(minifycss())
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest("./assets/css"));
});

gulp.task("default", function() {
  gulp.watch("assets/scss/**/*.scss",["sass"]);
});
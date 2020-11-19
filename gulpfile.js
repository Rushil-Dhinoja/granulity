const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const plugins = [autoprefixer(), cssnano()];

gulp.task('default',() => {
    return gulp.src("./scss/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css"))
})

gulp.task('watch', () => {
    return gulp.watch("./scss/*.scss", gulp.parallel("default"))
})
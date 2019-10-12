const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const prefixer = require('autoprefixer');

function compile(done) {
    gulp.src("./sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([ prefixer()]))
    .pipe(gulp.dest("./public/css"))
    done()
}

exports.compile = compile
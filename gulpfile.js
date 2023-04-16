import gulp from "gulp";
import zip from "gulp-zip";

gulp.task("ejercicio-3", (done) => {
  gulp
    .src("src/js/ejercicio-3/*")
    .pipe(zip("ejercicio-3.zip"))
    .pipe(gulp.dest("dist"));
  console.log("Submit zip ready!");
  done();
});

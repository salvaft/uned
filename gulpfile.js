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

// const gulp = require("gulp");
// const glob = require("glob");

// const destinationFolders = glob.sync("app/scss/skins/skin-*");

// gulp.task('copyFiles', function () {

//   var stream = gulp.src("app/scss/style.scss");

//   destinationFolders.forEach(function (skinFolder) {
//       stream = stream.pipe(gulp.dest(skinFolder));
//   });

//   return stream;
// });

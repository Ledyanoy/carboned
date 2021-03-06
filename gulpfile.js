var gulp = require("gulp");
browserSync = require("browser-sync");

function reload(done) {
  browserSync.reload();
  done();
}
pug = require("gulp-pug");
sass = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
(imagemin = require("gulp-imagemin")),
(imgCompress = require("imagemin-jpeg-recompress"));
newer = require("gulp-newer");
del = require("del");
svg = require("gulp-svg-sprite");

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "dist/"
    },
    notify: false
  });
});

gulp.task("clean", function () {
  return del(["dist"]);
});

gulp.task("pug", function () {
  return gulp
    .src("app/pug/index.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("sass", function () {
  return gulp
    .src("app/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("js", function () {
  return gulp
    .src("app/js/**/*.js")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("autoprefixer", function () {
  return gulp
    .src("dist/styles.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("img", function () {
  return gulp
    .src("app/img/**/*.{jpg,jpeg,png,gif}")
    .pipe(newer("dist/img"))
    .pipe(
      imagemin([
        imgCompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: "high"
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
});

gulp.task("svg", function () {
  return gulp
    .src("app/svg/*.svg")
    .pipe(
      svg({
        mode: {
          stack: {
            sprite: "../sprite.svg"
          }
        }
      })
    )
    .pipe(gulp.dest("dist/svg/"));
});

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("pug", "sass", "img", "svg", "js"), "autoprefixer")
);

gulp.task("watch", function () {
  gulp.watch("app/pug/**/*.pug", gulp.parallel("pug"));
  gulp.watch("app/sass/**/*.scss", gulp.parallel("sass"));
  gulp.watch("app/img/**/*", gulp.parallel("img"));
  gulp.watch("app/svg/*", gulp.parallel("svg"));
  gulp.watch("app/js/**/*.js", gulp.parallel("js"));
});

gulp.task("default", gulp.parallel("browser-sync", "watch"));
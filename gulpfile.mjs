import { src, dest, series, parallel } from "gulp";
import gulp from "gulp";
import { task, exec, stream } from "gulp-execa";
import handlebars from 'gulp-handlebars';
import wrap from 'gulp-wrap';
import declare from 'gulp-declare';
import concat from 'gulp-concat';
import change from 'gulp-change';
// import Handlebars from './src/client/public/js/lib/06-helper.js';

gulp.task('templates', function() {
return gulp.src(['./src/client/views/partials/*.hbs', './src/client/views/browser/*.hbs'])
    .pipe(handlebars()) //{ handlebars: Handlebars}))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'app.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('05-templates.js'))
    .pipe(gulp.dest('./src/client/public/js/lib/'));
});

gulp.task('partials', function() {
  return gulp.src(['./src/client/views/partials/*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'app.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('04-partials.js'))
    .pipe(gulp.dest('./src/client/public/js/lib/'));
});

gulp.task("helpers",  task("npm run helpers"));
gulp.task("prebuild", task("npm run prebuild"));
gulp.task("compile", task("npm run build"));
gulp.task("formathtml", task("npx js-beautify -r --templating handlebars -s 2 -n -w 0 --type html -j ./src/client/**/*.html"));
gulp.task("formathbs", task("npx js-beautify -r --templating handlebars -s 2 -n -w 0 --type html -j ./src/client/views/**/*.hbs"));
gulp.task("formatcss", task('npx js-beautify -r -s 2 -n -w 0 --type css ./src/client/**/*.css'));
gulp.task("formatjs", task('npx js-beautify -r -s 2 -n -w 0 --type js ./src/client/public/js/lib/*.js ./src/client/helpers/*.js '));
gulp.task("format", series(task("npm run format"), "formatcss", "formathbs", "formathtml"));
gulp.task("startdev", task("npm run start:dev"));
gulp.task("uglify", series(task("npm run uglifycss"), task("npm run uglify"), task("npx js-beautify -r -s 2 -n -w 0 --type js ./src/client/public/js/main.js")));
gulp.task("css", series(task('npx js-beautify -r -s 2 -n -w 0 --type css ./src/client/**/*.css'), task("npm run uglifycss")));
gulp.task("js", series( "templates", "formatjs", "uglify"));
gulp.task("lint", task("npm run lint"));
gulp.task("lint-client", task("npm run lint-client"));

gulp.task("docker", series(task("docker compose up --build")));
gulp.task("dockerbuild", series( task('docker buildx create --use --bootstrap --driver docker-container  --name discovrninjaBuilder'),
  task('docker buildx build . --builder discovrninjaBuilder -t guidcruncher/discovrninja:development  --no-cache --pull --push --platform linux/arm64'),
  task('docker buildx rm discovrninjaBuilder')));
gulp.task("dockerrm", 	series(task('docker buildx rm discovrninjaBuilder')));
gulp.task(
  "build",
  series(
    "prebuild",
    "format",
    "lint",
    "lint-client",
    "js",
    "compile",
  ),
);

gulp.task(
  "default",
  series(
    "format",
    "lint",
    "lint-client",
    "docker",
  ),
);

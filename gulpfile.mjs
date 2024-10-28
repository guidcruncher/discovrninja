import { series } from "gulp";
import gulp from "gulp";
import { task, exec, stream } from "gulp-execa";

gulp.task("doc", task("npm run doc"));
gulp.task("compile", task("npm run build"));
gulp.task("format", task("npm run format"));
gulp.task("start", task("npm run start"));
gulp.task("startdev", task("npm run start:dev"));
gulp.task("startdebug", task("npm run start:debug"));
gulp.task("lint", task("npm run lint"));
gulp.task("test", task("npm run test"));
gulp.task("coverage", task("npm run test:cov"));
gulp.task("e2e", task("npm run test:e2e"));

gulp.task("clientbuild", task("npm run build", {cwd: "./client"}));
gulp.task("clientformat", task("npm run format", {cwd: "./client"}));
gulp.task("clientlint", task("npm run lint", {cwd: "./client"}));

gulp.task("default", series("doc", "clientformat", "clientlint", "format", "lint", "clientbuild", "startdev"));
gulp.task("build", series("doc", "format", "lint", "compile", "clientformat", "clientlint", "clientbuild", "test", "coverage"));
gulp.task("tests", series("doc", "coverage", "test", "e2e"));

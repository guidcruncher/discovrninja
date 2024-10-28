import { series } from "gulp";
import gulp from "gulp";
import { task, exec, stream } from "gulp-execa";

gulp.task("doc", task("pnpm run doc"));
gulp.task("compile", task("pnpm run build"));
gulp.task("format", task("pnpm run format"));
gulp.task("start", task("pnpm run start"));
gulp.task("startdev", task("pnpm run start:dev"));
gulp.task("startdebug", task("pnpm run start:debug"));
gulp.task("lint", task("pnpm run lint"));
gulp.task("test", task("pnpm run test"));
gulp.task("coverage", task("pnpm run test:cov"));
gulp.task("e2e", task("pnpm run test:e2e"));

gulp.task("clientbuild", task("pnpm run build", {cwd: "./client"}));
gulp.task("clientformat", task("pnpm run format", {cwd: "./client"}));
gulp.task("clientlint", task("pnpm run lint", {cwd: "./client"}));

gulp.task("default", series("doc", "clientformat", "clientlint", "format", "lint", "clientbuild", "startdev"));
gulp.task("build", series("doc", "format", "lint", "compile", "clientformat", "clientlint", "clientbuild", "test", "coverage"));
gulp.task("tests", series("doc", "coverage", "test", "e2e"));

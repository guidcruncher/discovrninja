import gulp from "gulp";
import { series, parallel, task, watch } from "gulp";
import { exec, stream } from "gulp-execa";
import gulpESLintNew from "gulp-eslint-new";
import ts from "gulp-typescript";
import prettier from "gulp-prettier";

async function clean() {
  const { stdout1 } = await exec("rm -r ./dist", {
    stdout: ["pipe", "inherit"],
  });
  const { stdout2 } = await exec("mkdir -p ./dist", {
    stdout: ["pipe", "inherit"],
  });
}

function transpile() {
  return new Promise((resolve, reject) => {
    var tsProject = ts.createProject("./tsconfig.json", {
      declaration: true,
    });

    gulp
      .src("src/**/*.ts")
      .pipe(tsProject())
      .pipe(gulp.dest("./dist"))
      .on("end", function () {
        resolve();
      })
      .on("error", function (err) {
        reject(new Error("Error"));
      });
  });
}

function tsformat() {
  return gulp
    .src("src/**/*.ts")
    .pipe(prettier({ parser: "typescript", singleQuote: false }))
    .pipe(gulp.dest("src"));
}

function linter() {
  return gulp
    .src("./src/**/*.ts")
    .pipe(
      gulpESLintNew({
        configType: "flat",
        overrideConfigFile: "./eslint.config.mjs",
        fix: true,
      }),
    )
    .pipe(gulpESLintNew.fix())
    .pipe(gulpESLintNew.format())
    .pipe(gulpESLintNew.failAfterError());
}

async function startdev() {
  const { stdout1 } = await exec("npx tsx ./src/app.ts", {
    stdout: ["pipe", "inherit"],
  });
}

gulp.task("build", series(tsformat, linter, transpile));

gulp.task("default", series(clean, tsformat, linter, transpile, startdev));

import gulp from "gulp";
import { series, parallel, task, watch } from "gulp";
import { exec, stream } from "gulp-execa";
import nodemon from "gulp-nodemon";
import tslint from "gulp-tslint";
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
    var tsProject = ts.createProject("./tsconfig.json");
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
  return new Promise((resolve, reject) => {
    gulp
      .src("./src/**/*.ts")
      .pipe(
        tslint({
          fix: true,
          formatter: "stylish",
          configuration: "./tslint.json",
        }),
      )
      .pipe(
        tslint
          .report({
            emitError: true,
          })
          .on("end", function () {
            resolve();
          })
          .on("error", function (err) {
            reject(new Error("Error"));
          }),
      );
  });
}

function startdev(cb) {
  nodemon({
    script: "./dist/app.js",
    ext: "ts",
    ignore: ["node_modules/"],
    watch: ["./src/"],
    tasks: ["build"],
    env: { NODE_ENV: "development" },
    done: cb,
  });
}

gulp.task("build", series(tsformat, linter, transpile));

gulp.task("default", series(clean, tsformat, linter, transpile, startdev));

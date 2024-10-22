import gulp from "gulp";
import { series, parallel, task, watch } from "gulp";
import { exec, stream } from "gulp-execa";
import nodemon from "gulp-nodemon";
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
return gulp.src("./src/**/*.ts")
.pipe(gulpESLintNew({ configType: "flat", overrideConfigFile: "./eslint.config.mjs", fix: true }))
.pipe(gulpESLintNew.fix())
.pipe(gulpESLintNew.format())
.pipe(gulpESLintNew.failAfterError());
}

function startdev(cb) {
  var stream = nodemon({
    script: "./dist/app.js",
    ext: "ts",
    ignore: ["node_modules/"],
    watch: ["./src/"],
    tasks: ["build"],
    env: { NODE_ENV: "development" },
    done: cb,
  });

  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })

}

gulp.task("build", series(tsformat, linter, transpile));

gulp.task("default", series(clean, tsformat, linter, transpile, startdev));

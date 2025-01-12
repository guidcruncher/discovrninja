"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHelper = void 0;
var processhelper_1 = require("@helpers/processhelper");
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var fs = require("fs");
var GitHelper = /** @class */ (function () {
    function GitHelper() {
        this.logger = new common_1.Logger(GitHelper.name);
    }
    GitHelper.getGitEnv = function (user) {
        var _a;
        var newHash = crypto
            .createHash("md5")
            .update(user.name.toLowerCase())
            .digest("hex");
        var email = (_a = user.email) !== null && _a !== void 0 ? _a : newHash + "@localhost";
        return {
            GIT_AUTHOR_NAME: user.name,
            GIT_AUTHOR_EMAIL: email,
            GIT_AUTHOR_DATE: new Date(),
            GIT_COMMITTER_NAME: user.name,
            GIT_COMMITTER_EMAIL: email,
            GIT_COMMITTER_DATE: new Date(),
        };
    };
    GitHelper.isIdentical = function (filename, newValue) {
        var newHash = crypto.createHash("md5").update(newValue).digest("hex");
        if (!fs.existsSync(filename)) {
            return false;
        }
        var currentHash = crypto
            .createHash("md5")
            .update(fs.readFileSync(filename, "utf8"))
            .digest("hex");
        if (currentHash != newHash) {
            return false;
        }
        return true;
    };
    GitHelper.commit = function (cwd, msg, user) {
        return this.exec("git", ["commit", "-a", "-m", "'" + msg + "'"], {
            cwd: cwd,
            env: this.getGitEnv(user),
        });
    };
    GitHelper.log = function (cwd, user) {
        return this.exec("git", [
            "log",
            "pretty",
            "format",
            "- hash: %H\n" +
                "  author_date: %aI\n" +
                "  committer_date: %cI\n" +
                "  author: |-2\n" +
                "    %w(0,0,4)%an <%ae>%w(0,0,0)\n" +
                "  committer: |-2\n" +
                "    %w(0,0,4)%cn <%ae>%w(0,0,0)\n" +
                "  message: |-2\n" +
                "    %w(0,0,4)%B%w(0,0,0)\n",
        ], { cwd: cwd, env: this.getGitEnv(user) });
    };
    GitHelper.createGitRepo = function (cwd, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.exec("git", ["init", "-b", "main"], {
                cwd: cwd,
                env: _this.getGitEnv(user),
            })
                .then(function (initresult) {
                _this.exec("git", [
                    "add",
                    "README.md",
                    "compose.yaml",
                    "stack.env",
                    "compose.sh",
                    "run.sh",
                ], {
                    cwd: cwd,
                    env: _this.getGitEnv(user),
                })
                    .then(function (addresult) {
                    _this.commit(cwd, "Initial commit", user)
                        .then(function (commitresult) {
                        resolve(commitresult);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    GitHelper.exec = function (cmd, args, options) {
        var p = new processhelper_1.ProcessHelper();
        return p.exec(cmd, args, options);
    };
    return GitHelper;
}());
exports.GitHelper = GitHelper;

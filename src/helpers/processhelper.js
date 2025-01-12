"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessHelper = exports.ProcessResponse = void 0;
var common_1 = require("@nestjs/common");
var child_process_1 = require("child_process");
var ProcessResponse = /** @class */ (function () {
    function ProcessResponse() {
        this.stdout = "";
        this.stderr = "";
        this.exitcode = -1;
    }
    return ProcessResponse;
}());
exports.ProcessResponse = ProcessResponse;
var ProcessHelper = /** @class */ (function () {
    function ProcessHelper() {
        this.logger = new common_1.Logger(ProcessHelper.name);
    }
    ProcessHelper.prototype.exec = function (cmd, args, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug("spawn", cmd, args, options);
            var response = new ProcessResponse();
            var proc = (0, child_process_1.spawn)(cmd, args, options);
            _this.logger.debug(proc);
            proc.stdout.on("data", function (data) {
                response.stdout += data.toString();
                _this.logger.debug("stdout", data.toString());
            });
            proc.stderr.on("data", function (data) {
                response.stderr += data.toString();
                _this.logger.debug("stderr", data.toString());
            });
            proc.on("error", function (err) {
                _this.logger.error("error", err, response);
                reject({ error: err, response: response });
            });
            proc.on("close", function (code) {
                response.exitcode = code;
                _this.logger.debug("exitcode", code);
                resolve(response);
            });
        });
    };
    return ProcessHelper;
}());
exports.ProcessHelper = ProcessHelper;

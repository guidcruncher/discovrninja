"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringBuilder = void 0;
var StringBuilder = /** @class */ (function () {
    function StringBuilder() {
        this.strings = [];
    }
    StringBuilder.prototype.append = function (value) {
        this.strings.push(value);
    };
    StringBuilder.prototype.appendLine = function (value) {
        this.strings.push(value);
        this.strings.push("\n");
    };
    StringBuilder.prototype.appendFormat = function (format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var value = format;
        for (var i = 0; i < args.length; i++) {
            value = value.replace("{" + i + "}", args[i]);
        }
        this.strings.push(value);
    };
    StringBuilder.prototype.appendLineFormat = function (format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var value = format;
        for (var i = 0; i < args.length; i++) {
            value = value.replace("{" + i + "}", args[i]);
        }
        this.strings.push(value);
        this.strings.push("\n");
    };
    StringBuilder.prototype.clear = function () {
        this.strings = [];
    };
    StringBuilder.prototype.toString = function () {
        return this.toStringDelimited("");
    };
    StringBuilder.prototype.toStringDelimited = function (seperator) {
        return this.strings.join(seperator);
    };
    return StringBuilder;
}());
exports.StringBuilder = StringBuilder;

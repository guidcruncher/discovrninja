"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortainerHelper = void 0;
var PortainerHelper = /** @class */ (function () {
    function PortainerHelper() {
    }
    PortainerHelper.identify = function (templates) {
        var obj = JSON.parse(templates);
        if (Object.prototype.toString.call(obj) === "[object Array]") {
            return "1";
        }
        return obj.version;
    };
    PortainerHelper.Parse = function (templates) {
        var version = this.identify(templates);
        var template = { version: version, templates: [] };
        var obj = JSON.parse(templates);
        if (version == "1") {
            template.templates = obj;
            template.version = "1";
            return template;
        }
        template = obj;
        return template;
    };
    return PortainerHelper;
}());
exports.PortainerHelper = PortainerHelper;

"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopService = void 0;
var common_1 = require("@nestjs/common");
var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
var DesktopService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DesktopService = _classThis = /** @class */ (function () {
        function DesktopService_1(configService, resourcesService) {
            this.configService = configService;
            this.resourcesService = resourcesService;
            this.logger = new common_1.Logger(DesktopService.name);
        }
        DesktopService_1.prototype.readFile = function () {
            var filename = path.resolve(this.configService.get("desktop.filename"));
            this.logger.log("Reading desktop from", filename);
            if (fs.existsSync(filename)) {
                var values = yaml.load(fs.readFileSync(filename, "utf8"));
                return values;
            }
            else {
                this.logger.error("Desktop file not found", filename);
            }
            return {};
        };
        DesktopService_1.prototype.renderDesktop = function () {
            var _this = this;
            var dynamic = false;
            return new Promise(function (resolve, reject) {
                var _a;
                var desktop = _this.readFile();
                if (desktop.theme) {
                    if (!desktop.theme.toLowerCase().startsWith("http")) {
                        desktop.theme = "/assets/themes/" + desktop.theme;
                    }
                }
                desktop.background.cssclass = "bgimage";
                if (desktop.background) {
                    if (desktop.background.type == "daily") {
                        var p = null;
                        switch (desktop.background.url) {
                            case "nasa":
                                p = _this.resourcesService.getNasaDailyImageUrl();
                                break;
                            case "bing":
                                desktop.background.type = "image";
                                desktop.background.url = "/assets/img/bing.jpg";
                                desktop.background.isimage = true;
                                break;
                            case "globe":
                                dynamic = (_a = desktop.background.dynamic) !== null && _a !== void 0 ? _a : true;
                                p = _this.resourcesService.getGlobeImageUrl(0, 0, 0, 0);
                                desktop.background.cssclass = "bgimage-globe";
                                break;
                        }
                        if (p) {
                            p.then(function (url) {
                                desktop.background.isimage = true;
                                if (dynamic) {
                                    desktop.background.dynamic = true;
                                    if (!desktop.background.reloadIntervalMinutes) {
                                        desktop.background.reloadIntervalMinutes = 15;
                                    }
                                }
                                desktop.background.url = url;
                                desktop.background.type = "image";
                                resolve(desktop);
                            }).catch(function (err) {
                                reject(err);
                            });
                        }
                        else {
                            resolve(desktop);
                        }
                    }
                    else {
                        resolve(desktop);
                    }
                }
                else {
                    resolve(desktop);
                }
            });
        };
        return DesktopService_1;
    }());
    __setFunctionName(_classThis, "DesktopService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DesktopService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DesktopService = _classThis;
}();
exports.DesktopService = DesktopService;

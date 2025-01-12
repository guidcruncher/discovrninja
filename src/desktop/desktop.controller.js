"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopController = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var DesktopController = function () {
    var _classDecorators = [(0, common_1.Controller)("/")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _homepage_decorators;
    var _getdesktopjs_decorators;
    var _getGlobeImage_decorators;
    var _getBackground_decorators;
    var _getGlobeDailyImageUrl_decorators;
    var _getNasaDailyImageUrl_decorators;
    var DesktopController = _classThis = /** @class */ (function () {
        function DesktopController_1(configService, resourcesService, desktopService, dockerService, serviceDefinitionService) {
            this.configService = (__runInitializers(this, _instanceExtraInitializers), configService);
            this.resourcesService = resourcesService;
            this.desktopService = desktopService;
            this.dockerService = dockerService;
            this.serviceDefinitionService = serviceDefinitionService;
            this.logger = new common_2.Logger(DesktopController.name);
        }
        DesktopController_1.prototype.homepage = function (res) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.desktopService
                                .renderDesktop()
                                .then(function (desktop) {
                                _this.serviceDefinitionService
                                    .all(true)
                                    .then(function (definitions) {
                                    var promises = [];
                                    definitions.forEach(function (d) {
                                        d.available = true;
                                        promises.push(_this.dockerService.isContainerAvailable(d));
                                    });
                                    Promise.allSettled(promises)
                                        .then(function (results) {
                                        definitions = [];
                                        results.forEach(function (r) {
                                            if (r.status == "fulfilled") {
                                                definitions.push(r.value);
                                            }
                                        });
                                        res.view("index.hbs", { desktop: desktop, services: definitions }, { layout: "./layouts/desktop.hbs" });
                                        resolve();
                                    })
                                        .catch(function (err) {
                                        _this.logger.error("Error in index getting container state", err);
                                        res.view("index.hbs", { desktop: desktop, services: definitions }, { layout: "./layouts/desktop.hbs" });
                                        resolve();
                                    });
                                })
                                    .catch(function (err) {
                                    _this.logger.error("Error in index", err);
                                    res.status(500).send(err);
                                    reject();
                                });
                            })
                                .catch(function (err) {
                                res.status(500).send(err);
                                reject();
                            });
                        })];
                });
            });
        };
        DesktopController_1.prototype.getdesktopjs = function (res) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.desktopService
                                .renderDesktop()
                                .then(function (desktop) {
                                var script = "const desktop=" +
                                    JSON.stringify(desktop, null, 0) +
                                    ";\nlocalStorage.setItem('desktop', JSON.stringify(desktop,null,0));";
                                res.type("text/javascript");
                                res.send(script);
                                resolve();
                            })
                                .catch(function (err) {
                                res.status(500).send(err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DesktopController_1.prototype.getGlobeImage = function (height, lat, long, alt, req, res) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.resourcesService
                    .getGlobeImageUrl(height, lat, long, alt)
                    .then(function (targetUrl) {
                    _this.resourcesService
                        .proxy(targetUrl)
                        .then(function (result) {
                        res.status(200);
                        res.header("content-type", result.contentType);
                        res.header("content-disposition", "inline; filename=" + result.url.pathname.split("/").pop());
                        res.send(result.data);
                        resolve(true);
                    })
                        .catch(function (err) {
                        res.status(500).send(err);
                        reject(err);
                    });
                });
            });
        };
        DesktopController_1.prototype.getBackground = function (width, height, req, res) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a;
                var p = null;
                var baseUrl = (_a = _this.configService.get("webProxy.baseUrl")) !== null && _a !== void 0 ? _a : req.protocol + "://" + req.hostname;
                var desktop = _this.desktopService.readFile();
                if (["daily", "image"].includes(desktop.background.type)) {
                    switch (desktop.background.url) {
                        case "nasa":
                            p = _this.resourcesService.getNasaDailyImageUrl();
                            break;
                        case "globe":
                            p = _this.resourcesService.getGlobeImageUrl(height, 0, 0, 0);
                            break;
                        case "bing":
                            p = new Promise(function (resolve, reject) {
                                resolve("http://127.0.0.1:5001/assets/img/bing.jpg");
                            });
                            break;
                        default:
                            p = new Promise(function (resolve, reject) {
                                resolve(desktop.background.url);
                            });
                            break;
                    }
                    p.then(function (targetUrl) {
                        _this.resourcesService
                            .proxy(targetUrl)
                            .then(function (result) {
                            res.status(200);
                            res.header("content-type", result.contentType);
                            res.header("content-disposition", "inline; filename=" + result.url.pathname.split("/").pop());
                            res.send(result.data);
                            resolve(true);
                        })
                            .catch(function (err) {
                            res.status(500).send(err);
                            reject(err);
                        });
                    });
                }
                else {
                    res.status(404).send();
                    resolve(false);
                }
            });
        };
        DesktopController_1.prototype.getGlobeDailyImageUrl = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.resourcesService.getGlobeImageUrl(0, 0, 0, 0)];
                });
            });
        };
        DesktopController_1.prototype.getNasaDailyImageUrl = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.resourcesService.getNasaDailyImageUrl()];
                });
            });
        };
        return DesktopController_1;
    }());
    __setFunctionName(_classThis, "DesktopController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _homepage_decorators = [(0, common_1.Get)()];
        _getdesktopjs_decorators = [(0, common_1.Get)("/desktop.js")];
        _getGlobeImage_decorators = [(0, common_1.Get)("api/desktop/background/globe")];
        _getBackground_decorators = [(0, common_1.Get)("api/desktop/background")];
        _getGlobeDailyImageUrl_decorators = [(0, common_1.Get)("api/desktop/daily/globe")];
        _getNasaDailyImageUrl_decorators = [(0, common_1.Get)("api/desktop/daily/nasa")];
        __esDecorate(_classThis, null, _homepage_decorators, { kind: "method", name: "homepage", static: false, private: false, access: { has: function (obj) { return "homepage" in obj; }, get: function (obj) { return obj.homepage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getdesktopjs_decorators, { kind: "method", name: "getdesktopjs", static: false, private: false, access: { has: function (obj) { return "getdesktopjs" in obj; }, get: function (obj) { return obj.getdesktopjs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getGlobeImage_decorators, { kind: "method", name: "getGlobeImage", static: false, private: false, access: { has: function (obj) { return "getGlobeImage" in obj; }, get: function (obj) { return obj.getGlobeImage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBackground_decorators, { kind: "method", name: "getBackground", static: false, private: false, access: { has: function (obj) { return "getBackground" in obj; }, get: function (obj) { return obj.getBackground; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getGlobeDailyImageUrl_decorators, { kind: "method", name: "getGlobeDailyImageUrl", static: false, private: false, access: { has: function (obj) { return "getGlobeDailyImageUrl" in obj; }, get: function (obj) { return obj.getGlobeDailyImageUrl; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getNasaDailyImageUrl_decorators, { kind: "method", name: "getNasaDailyImageUrl", static: false, private: false, access: { has: function (obj) { return "getNasaDailyImageUrl" in obj; }, get: function (obj) { return obj.getNasaDailyImageUrl; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DesktopController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DesktopController = _classThis;
}();
exports.DesktopController = DesktopController;

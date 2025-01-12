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
exports.IconService = void 0;
var httputilities_1 = require("@helpers/httputilities");
var common_1 = require("@nestjs/common");
var IconService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IconService = _classThis = /** @class */ (function () {
        function IconService_1() {
        }
        IconService_1.prototype.resolveIconUrl = function (catalog, slug) {
            switch (catalog.toLowerCase()) {
                case "simpleicons":
                    return "https://cdn.simpleicons.org/" + slug.toLowerCase();
                case "selfhst":
                    return ("https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/" +
                        slug.toLowerCase() +
                        ".svg");
                case "dashboard-icons":
                    return ("https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/" +
                        slug.toLowerCase() +
                        ".png");
            }
            return "";
        };
        IconService_1.prototype.query = function (slug, first) {
            var _this = this;
            var results = [];
            return new Promise(function (resolve, reject) {
                var promises = [];
                promises.push(_this.getDashboardIcon(slug));
                promises.push(_this.getSimpleIcon(slug));
                promises.push(_this.getSelfhstIcon(slug));
                promises.push(_this.getFontAwesomeIcon("brand", slug));
                if (first) {
                    Promise.any(promises)
                        .then(function (result) {
                        results.push(result);
                        resolve(results);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    Promise.allSettled(promises)
                        .then(function (result) {
                        result.forEach(function (r) {
                            if (r.status == "fulfilled") {
                                results.push(r.value);
                            }
                        });
                        resolve(results);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
            });
        };
        IconService_1.prototype.getSimpleIcon = function (slug) {
            return new Promise(function (resolve, reject) {
                var url = "https://cdn.simpleicons.org/" + slug.toLowerCase();
                var client = new httputilities_1.HttpUtilities();
                client
                    .retrieveBinary("GET", url)
                    .then(function (data) {
                    resolve({
                        headers: {
                            "Content-Type": "image/svg+xml",
                            "Content-Disposition": 'inline; filename="' + slug + '.svg"',
                        },
                        catalog: "simpleicons",
                        slug: slug,
                        url: url,
                        data: data,
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        IconService_1.prototype.getSelfhstIcon = function (slug) {
            return new Promise(function (resolve, reject) {
                var url = "https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/" +
                    slug.toLowerCase() +
                    ".svg";
                var client = new httputilities_1.HttpUtilities();
                client
                    .retrieveBinary("GET", url)
                    .then(function (data) {
                    resolve({
                        headers: {
                            "Content-Type": "image/svg+xml",
                            "Content-Disposition": 'inline; filename="' + slug + '.svg"',
                        },
                        catalog: "selfhst",
                        slug: slug,
                        url: url,
                        data: data,
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        IconService_1.prototype.getDashboardIcon = function (slug) {
            return new Promise(function (resolve, reject) {
                var url = "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/" +
                    slug.toLowerCase() +
                    ".png";
                var client = new httputilities_1.HttpUtilities();
                client
                    .retrieveBinary("GET", url)
                    .then(function (data) {
                    resolve({
                        headers: {
                            "Content-Type": "image/png",
                            "Content-Disposition": 'inline; filename="' + slug + '.png"',
                        },
                        catalog: "dashboard-icons",
                        slug: slug,
                        url: url,
                        data: data,
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        IconService_1.prototype.getFontAwesomeIcon = function (type, slug) {
            return new Promise(function (resolve, reject) {
                var url = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/svgs/" +
                    type +
                    "/" +
                    slug.toLowerCase() +
                    ".svg";
                var client = new httputilities_1.HttpUtilities();
                client
                    .retrieveBinary("GET", url)
                    .then(function (data) {
                    resolve({
                        headers: {
                            "Content-Type": "image/svg+xml",
                            "Content-Disposition": 'inline; filename="' + slug + '.svg"',
                        },
                        catalog: "fontawesome",
                        slug: slug,
                        url: url,
                        data: data,
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        return IconService_1;
    }());
    __setFunctionName(_classThis, "IconService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IconService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IconService = _classThis;
}();
exports.IconService = IconService;

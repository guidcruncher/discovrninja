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
exports.IconCDNService = void 0;
var icons_dto_1 = require("@dto/icons.dto");
var httputilities_1 = require("@helpers/httputilities");
var common_1 = require("@nestjs/common");
var IconCDNService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IconCDNService = _classThis = /** @class */ (function () {
        function IconCDNService_1(iconModel) {
            this.iconModel = iconModel;
            this.catalogs = ["simpleicons", "selfhst", "dashboard-icons"];
        }
        IconCDNService_1.prototype.resolveIconUrl = function (catalog, slug) {
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
        IconCDNService_1.prototype.resolveIndexUrl = function (catalog) {
            switch (catalog.toLowerCase()) {
                case "simpleicons":
                    return "https://data.jsdelivr.com/v1/packages/npm/simple-icons@13.17.0";
                case "selfhst":
                    return "https://data.jsdelivr.com/v1/packages/gh/selfhst/icons@master";
                case "dashboard-icons":
                    return "https://data.jsdelivr.com/v1/packages/gh/walkxcode/dashboard-icons@master";
            }
            return "";
        };
        IconCDNService_1.prototype.resolvePath = function (catalog) {
            switch (catalog.toLowerCase()) {
                case "simpleicons":
                    return "icons";
                case "selfhst":
                    return "svg";
                case "dashboard-icons":
                    return "png";
            }
            return "";
        };
        IconCDNService_1.prototype.traverseFetch = function (folder, files) {
            var _this = this;
            var result = [];
            var path = folder.split("/");
            if (folder == "") {
                files.forEach(function (f) {
                    if (f.type == "file") {
                        var name_1 = f.name;
                        if (name_1.lastIndexOf(".") > 0) {
                            name_1 = name_1.substring(0, name_1.lastIndexOf("."));
                        }
                        result.push(name_1);
                    }
                });
                return result;
            }
            var current = path.shift();
            files.forEach(function (f) {
                if (f.type == "directory" && f.name == current) {
                    result = _this.traverseFetch(path.length == 0 ? "" : path.join("/"), f.files);
                    return result;
                }
            });
            return result;
        };
        IconCDNService_1.prototype.getSlugs = function (catalog) {
            var _this = this;
            var client = new httputilities_1.HttpUtilities();
            return new Promise(function (resolve, reject) {
                client
                    .retrieve("GET", _this.resolveIndexUrl(catalog))
                    .then(function (jsonData) {
                    var data = JSON.parse(jsonData);
                    var view = {};
                    view[catalog] = _this.traverseFetch(_this.resolvePath(catalog), data.files);
                    resolve(view);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        IconCDNService_1.prototype.query = function (query, first) {
            var _this = this;
            var result = [];
            return new Promise(function (resolve, reject) {
                var model = _this.iconModel
                    .find({ slug: { $regex: query.toLowerCase() } })
                    .exec()
                    .then(function (data) {
                    data.forEach(function (d) {
                        var ir = {
                            slug: d.slug,
                            catalog: d.catalog,
                            url: _this.resolveIconUrl(d.catalog, d.slug),
                            headers: null,
                            data: null,
                        };
                        result.push(ir);
                    });
                    if (first) {
                        resolve(result);
                    }
                    else {
                        resolve(result);
                    }
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        IconCDNService_1.prototype.saveAllSlugs = function (data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var deleted = _this.iconModel
                    .deleteMany()
                    .exec()
                    .then(function () {
                    var promises = [];
                    Object.keys(data).forEach(function (catalog) {
                        data[catalog].forEach(function (slug) {
                            var dto = new icons_dto_1.IconDto();
                            dto.catalog = catalog;
                            dto.slug = slug;
                            dto.created = new Date();
                            var created = new _this.iconModel(dto);
                            promises.push(created.save());
                        });
                    });
                    Promise.allSettled(promises)
                        .then(function () {
                        resolve(true);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            });
        };
        IconCDNService_1.prototype.getAllSlugs = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = {};
                var promises = [];
                _this.catalogs.forEach(function (catalog) {
                    promises.push(_this.getSlugs(catalog));
                });
                Promise.allSettled(promises)
                    .then(function (data) {
                    data.forEach(function (d) {
                        if (d.status == "fulfilled") {
                            var key = Object.keys(d.value)[0];
                            result[key] = d.value[key];
                        }
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        return IconCDNService_1;
    }());
    __setFunctionName(_classThis, "IconCDNService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IconCDNService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IconCDNService = _classThis;
}();
exports.IconCDNService = IconCDNService;

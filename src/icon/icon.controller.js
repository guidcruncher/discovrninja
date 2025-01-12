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
exports.IconController = void 0;
var common_1 = require("@nestjs/common");
var IconController = function () {
    var _classDecorators = [(0, common_1.Controller)("api/icons")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getQuestion_decorators;
    var _getIconUrl_decorators;
    var _getIconUrlRedirect_decorators;
    var _getAllCDN_decorators;
    var _getCDN_decorators;
    var _getSimpleIcon_decorators;
    var _getSelfhstIcon_decorators;
    var _getDashboardIcon_decorators;
    var _getFontAwesomeIcon_decorators;
    var _getIcon_decorators;
    var _searchForIcon_decorators;
    var IconController = _classThis = /** @class */ (function () {
        function IconController_1(configService, iconService, iconCDNService) {
            this.configService = (__runInitializers(this, _instanceExtraInitializers), configService);
            this.iconService = iconService;
            this.iconCDNService = iconCDNService;
        }
        IconController_1.prototype.getQuestion = function (res) {
            res.headers({
                "Content-Type": "image/svg+xml",
                "Content-Disposition": 'inline; filename="question.svg"',
            });
            res.send('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>');
        };
        IconController_1.prototype.getIconUrl = function (catalog, slug) {
            var url = this.iconService.resolveIconUrl(catalog, slug);
            return url;
        };
        IconController_1.prototype.getIconUrlRedirect = function (catalog, slug, res) {
            var url = this.iconService.resolveIconUrl(catalog, slug);
            res.status(302);
            res.redirect(url);
        };
        IconController_1.prototype.getAllCDN = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.iconCDNService.getAllSlugs()];
                });
            });
        };
        IconController_1.prototype.getCDN = function (catalog) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.iconCDNService.getSlugs(catalog)];
                });
            });
        };
        IconController_1.prototype.getSimpleIcon = function (slug, res) {
            this.iconService
                .getSimpleIcon(slug)
                .then(function (result) {
                res.headers(result.headers);
                res.send(result.data);
            })
                .catch(function (err) {
                if (err.status) {
                    if (err.status == 404) {
                        res.status(404).send();
                        return;
                    }
                    res.status(err.status);
                }
                res.send(err);
            });
        };
        IconController_1.prototype.getSelfhstIcon = function (slug, res) {
            this.iconService
                .getSelfhstIcon(slug)
                .then(function (result) {
                res.headers(result.headers);
                res.send(result.data);
            })
                .catch(function (err) {
                if (err.status) {
                    if (err.status == 404) {
                        res.status(404).send();
                        return;
                    }
                    res.status(err.status);
                }
                res.send(err);
            });
        };
        IconController_1.prototype.getDashboardIcon = function (slug, res) {
            this.iconService
                .getDashboardIcon(slug)
                .then(function (result) {
                res.headers(result.headers);
                res.send(result.data);
            })
                .catch(function (err) {
                if (err.status) {
                    if (err.status == 404) {
                        res.status(404).send();
                        return;
                    }
                    res.status(err.status);
                }
                res.send(err);
            });
        };
        IconController_1.prototype.getFontAwesomeIcon = function (type, slug, res) {
            this.iconService
                .getFontAwesomeIcon(type, slug)
                .then(function (result) {
                res.headers(result.headers);
                res.send(result.data);
            })
                .catch(function (err) {
                if (err.status) {
                    if (err.status == 404) {
                        res.status(404).send();
                        return;
                    }
                    res.status(err.status);
                }
                res.send(err);
            });
        };
        IconController_1.prototype.getIcon = function (slug, res) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.iconService
                    .query(slug, true)
                    .then(function (icons) {
                    if (icons.length > 0) {
                        res.headers(icons[0].headers);
                        res.send(icons[0].data);
                    }
                    else {
                        _this.getQuestion(res);
                    }
                    resolve(true);
                })
                    .catch(function (err) {
                    _this.getQuestion(res);
                });
            });
        };
        IconController_1.prototype.searchForIcon = function (slug) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.iconCDNService
                                .query(slug, false)
                                .then(function (icons) {
                                icons.forEach(function (ico) {
                                    delete ico.data;
                                });
                                resolve(icons);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        })];
                });
            });
        };
        return IconController_1;
    }());
    __setFunctionName(_classThis, "IconController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getQuestion_decorators = [(0, common_1.Get)("question")];
        _getIconUrl_decorators = [(0, common_1.Get)("r/:catalog/:slug")];
        _getIconUrlRedirect_decorators = [(0, common_1.Get)("r/:catalog/:slug/resource")];
        _getAllCDN_decorators = [(0, common_1.Get)("cdn")];
        _getCDN_decorators = [(0, common_1.Get)("cdn/:catalog")];
        _getSimpleIcon_decorators = [(0, common_1.Get)("simpleicons/:slug")];
        _getSelfhstIcon_decorators = [(0, common_1.Get)("selfhst/:slug")];
        _getDashboardIcon_decorators = [(0, common_1.Get)("dashboard/:slug")];
        _getFontAwesomeIcon_decorators = [(0, common_1.Get)("fontawesome/:type/:slug")];
        _getIcon_decorators = [(0, common_1.Get)("query/:slug")];
        _searchForIcon_decorators = [(0, common_1.Get)("search/:slug")];
        __esDecorate(_classThis, null, _getQuestion_decorators, { kind: "method", name: "getQuestion", static: false, private: false, access: { has: function (obj) { return "getQuestion" in obj; }, get: function (obj) { return obj.getQuestion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getIconUrl_decorators, { kind: "method", name: "getIconUrl", static: false, private: false, access: { has: function (obj) { return "getIconUrl" in obj; }, get: function (obj) { return obj.getIconUrl; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getIconUrlRedirect_decorators, { kind: "method", name: "getIconUrlRedirect", static: false, private: false, access: { has: function (obj) { return "getIconUrlRedirect" in obj; }, get: function (obj) { return obj.getIconUrlRedirect; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllCDN_decorators, { kind: "method", name: "getAllCDN", static: false, private: false, access: { has: function (obj) { return "getAllCDN" in obj; }, get: function (obj) { return obj.getAllCDN; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCDN_decorators, { kind: "method", name: "getCDN", static: false, private: false, access: { has: function (obj) { return "getCDN" in obj; }, get: function (obj) { return obj.getCDN; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getSimpleIcon_decorators, { kind: "method", name: "getSimpleIcon", static: false, private: false, access: { has: function (obj) { return "getSimpleIcon" in obj; }, get: function (obj) { return obj.getSimpleIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getSelfhstIcon_decorators, { kind: "method", name: "getSelfhstIcon", static: false, private: false, access: { has: function (obj) { return "getSelfhstIcon" in obj; }, get: function (obj) { return obj.getSelfhstIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDashboardIcon_decorators, { kind: "method", name: "getDashboardIcon", static: false, private: false, access: { has: function (obj) { return "getDashboardIcon" in obj; }, get: function (obj) { return obj.getDashboardIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getFontAwesomeIcon_decorators, { kind: "method", name: "getFontAwesomeIcon", static: false, private: false, access: { has: function (obj) { return "getFontAwesomeIcon" in obj; }, get: function (obj) { return obj.getFontAwesomeIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getIcon_decorators, { kind: "method", name: "getIcon", static: false, private: false, access: { has: function (obj) { return "getIcon" in obj; }, get: function (obj) { return obj.getIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchForIcon_decorators, { kind: "method", name: "searchForIcon", static: false, private: false, access: { has: function (obj) { return "searchForIcon" in obj; }, get: function (obj) { return obj.searchForIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IconController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IconController = _classThis;
}();
exports.IconController = IconController;

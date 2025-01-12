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
exports.DiscoveryController = void 0;
var httputilities_1 = require("@helpers/httputilities");
var common_1 = require("@nestjs/common");
/**
 * The Discovery service API
 */
var DiscoveryController = function () {
    var _classDecorators = [(0, common_1.Controller)("api/discovery")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _scan_decorators;
    var _changeIcon_decorators;
    var _getDefinition_decorators;
    var _archiveDefinition_decorators;
    var _saveDefinition_decorators;
    var _saveProjectDefinition_decorators;
    var _findDefinition_decorators;
    var _scanAndSend_decorators;
    var DiscoveryController = _classThis = /** @class */ (function () {
        function DiscoveryController_1(discoveryService, configService) {
            this.discoveryService = (__runInitializers(this, _instanceExtraInitializers), discoveryService);
            this.configService = configService;
            this.discoveryService = discoveryService;
        }
        /**
      
         * Performs a service scan and returns the results.
         * @returns (DiscoveryScan) results of scan
         */
        DiscoveryController_1.prototype.scan = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.discoveryService.scan()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DiscoveryController_1.prototype.changeIcon = function (id, catalog, slug) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.discoveryService.changeIcon(id, catalog, slug)];
                });
            });
        };
        DiscoveryController_1.prototype.getDefinition = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.discoveryService.getDefinition(id)];
                });
            });
        };
        DiscoveryController_1.prototype.archiveDefinition = function (id, archived) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.discoveryService.archiveDefinition(id, archived)];
                });
            });
        };
        DiscoveryController_1.prototype.saveDefinition = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.discoveryService.saveDefinition(id, data)];
                });
            });
        };
        DiscoveryController_1.prototype.saveProjectDefinition = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.discoveryService.saveProjectDefinition(id, data)];
                });
            });
        };
        DiscoveryController_1.prototype.findDefinition = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.discoveryService.find(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DiscoveryController_1.prototype.scanAndSend = function (res) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                return _this.discoveryService
                    .scan()
                    .then(function (result) {
                    var httputilities = new httputilities_1.HttpUtilities();
                    var url = _this.configService.get("host.dnsServer.endpoint") +
                        "/api/dns/loaddatabase";
                    httputilities
                        .send("POST", url, JSON.stringify(result))
                        .then(function (response) {
                        resolve(result);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .then(function (result) {
                res.status(200).send(result);
            })
                .catch(function (err) {
                if (err.status) {
                    res.status(err.status).send(err.statusText);
                }
                else {
                    res.status(500).send(err);
                }
            });
        };
        return DiscoveryController_1;
    }());
    __setFunctionName(_classThis, "DiscoveryController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _scan_decorators = [(0, common_1.Get)("/scan")];
        _changeIcon_decorators = [(0, common_1.Get)("changeicon/:id")];
        _getDefinition_decorators = [(0, common_1.Get)("definition/:id")];
        _archiveDefinition_decorators = [(0, common_1.Get)("definition/archive/:id/:archived")];
        _saveDefinition_decorators = [(0, common_1.Post)("definition/:id")];
        _saveProjectDefinition_decorators = [(0, common_1.Post)("project/definition/:id")];
        _findDefinition_decorators = [(0, common_1.Get)("find/:id")];
        _scanAndSend_decorators = [(0, common_1.Get)("/updatedns")];
        __esDecorate(_classThis, null, _scan_decorators, { kind: "method", name: "scan", static: false, private: false, access: { has: function (obj) { return "scan" in obj; }, get: function (obj) { return obj.scan; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _changeIcon_decorators, { kind: "method", name: "changeIcon", static: false, private: false, access: { has: function (obj) { return "changeIcon" in obj; }, get: function (obj) { return obj.changeIcon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDefinition_decorators, { kind: "method", name: "getDefinition", static: false, private: false, access: { has: function (obj) { return "getDefinition" in obj; }, get: function (obj) { return obj.getDefinition; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _archiveDefinition_decorators, { kind: "method", name: "archiveDefinition", static: false, private: false, access: { has: function (obj) { return "archiveDefinition" in obj; }, get: function (obj) { return obj.archiveDefinition; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _saveDefinition_decorators, { kind: "method", name: "saveDefinition", static: false, private: false, access: { has: function (obj) { return "saveDefinition" in obj; }, get: function (obj) { return obj.saveDefinition; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _saveProjectDefinition_decorators, { kind: "method", name: "saveProjectDefinition", static: false, private: false, access: { has: function (obj) { return "saveProjectDefinition" in obj; }, get: function (obj) { return obj.saveProjectDefinition; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findDefinition_decorators, { kind: "method", name: "findDefinition", static: false, private: false, access: { has: function (obj) { return "findDefinition" in obj; }, get: function (obj) { return obj.findDefinition; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _scanAndSend_decorators, { kind: "method", name: "scanAndSend", static: false, private: false, access: { has: function (obj) { return "scanAndSend" in obj; }, get: function (obj) { return obj.scanAndSend; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DiscoveryController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DiscoveryController = _classThis;
}();
exports.DiscoveryController = DiscoveryController;

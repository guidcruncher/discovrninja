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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var AppController = function () {
    var _classDecorators = [(0, common_2.Controller)("/")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getversion_decorators;
    var _adminpage_decorators;
    var AppController = _classThis = /** @class */ (function () {
        function AppController_1(dockerService, discoveryService, iconService, composeService, resourcesService, portainerService) {
            this.dockerService = (__runInitializers(this, _instanceExtraInitializers), dockerService);
            this.discoveryService = discoveryService;
            this.iconService = iconService;
            this.composeService = composeService;
            this.resourcesService = resourcesService;
            this.portainerService = portainerService;
            this.logger = new common_1.Logger(AppController.name);
        }
        AppController_1.prototype.getversion = function (res) {
            var buildDate = new Date(0);
            buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));
            res.status(200).send({
                version: process.env.PACKAGE_VERSION,
                epochBuildate: parseInt(process.env.BUILDDATE),
                buildDate: buildDate,
            });
        };
        AppController_1.prototype.adminpage = function (res) {
            this.dockerService
                .getProjectTree()
                .then(function (projects) {
                res.view("admin.hbs", { projects: projects }, { layout: "./layouts/layout.hbs" });
            })
                .catch(function (err) {
                res.status(500).send(err);
            });
        };
        return AppController_1;
    }());
    __setFunctionName(_classThis, "AppController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getversion_decorators = [(0, common_2.Get)("api/version")];
        _adminpage_decorators = [(0, common_2.Get)("/admin/index")];
        __esDecorate(_classThis, null, _getversion_decorators, { kind: "method", name: "getversion", static: false, private: false, access: { has: function (obj) { return "getversion" in obj; }, get: function (obj) { return obj.getversion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _adminpage_decorators, { kind: "method", name: "adminpage", static: false, private: false, access: { has: function (obj) { return "adminpage" in obj; }, get: function (obj) { return obj.adminpage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppController = _classThis;
}();
exports.AppController = AppController;

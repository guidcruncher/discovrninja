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
exports.DesktopModule = void 0;
var container_module_1 = require("@container/container.module");
var data_module_1 = require("@data/data.module");
var data_schemas_1 = require("@data/data.schemas");
var common_1 = require("@nestjs/common");
var bookmarks_controller_1 = require("./bookmarks.controller");
var desktop_controller_1 = require("./desktop.controller");
var desktop_service_1 = require("./desktop.service");
var linkding_controller_1 = require("./linkding.controller");
var linkding_service_1 = require("./linkding.service");
var news_controller_1 = require("./news.controller");
var DesktopModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [container_module_1.ContainerModule, data_module_1.DataModule, data_schemas_1.Schemas.CompileModels()],
            controllers: [
                linkding_controller_1.LinkdingController,
                desktop_controller_1.DesktopController,
                bookmarks_controller_1.BookmarksController,
                news_controller_1.NewsController,
            ],
            providers: [desktop_service_1.DesktopService, linkding_service_1.LinkdingService],
            exports: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DesktopModule = _classThis = /** @class */ (function () {
        function DesktopModule_1() {
        }
        return DesktopModule_1;
    }());
    __setFunctionName(_classThis, "DesktopModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DesktopModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DesktopModule = _classThis;
}();
exports.DesktopModule = DesktopModule;

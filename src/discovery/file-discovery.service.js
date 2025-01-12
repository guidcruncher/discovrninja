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
exports.FileDiscoveryService = void 0;
var servicedefinition_1 = require("@customtypes/servicedefinition");
var common_1 = require("@nestjs/common");
var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
var FileDiscoveryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FileDiscoveryService = _classThis = /** @class */ (function () {
        function FileDiscoveryService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(FileDiscoveryService.name);
        }
        FileDiscoveryService_1.prototype.readFile = function (name) {
            var result;
            var filename = path.resolve(name);
            this.logger.log("Reading services from", filename);
            if (fs.existsSync(filename)) {
                var values = yaml.load(fs.readFileSync(filename, "utf8"));
                result = values;
            }
            else {
                this.logger.error("Service file not found", filename);
            }
            return result;
        };
        FileDiscoveryService_1.prototype.scan = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = new servicedefinition_1.ServiceDefinitionList();
                if (!_this.configService.get("discovery.file.enabled")) {
                    _this.logger.warn("Skipping file based discovery");
                    reject();
                    return;
                }
                var filename = _this.configService.get("discovery.file.filename");
                result = _this.readFile(filename);
                if (!result.services) {
                    _this.logger.warn("No services defined in file.");
                    reject();
                }
                resolve(result);
            });
        };
        return FileDiscoveryService_1;
    }());
    __setFunctionName(_classThis, "FileDiscoveryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FileDiscoveryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FileDiscoveryService = _classThis;
}();
exports.FileDiscoveryService = FileDiscoveryService;

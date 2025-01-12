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
exports.ComposeService = void 0;
var common_1 = require("@nestjs/common");
var composerize_1 = require("composerize");
var decomposerize_1 = require("decomposerize");
var fs_1 = require("fs");
var path_1 = require("path");
var ComposeService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ComposeService = _classThis = /** @class */ (function () {
        function ComposeService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(ComposeService.name);
        }
        ComposeService_1.prototype.loadProject = function (project, compose, env) {
            var _this = this;
            var projectPath = path_1.default.join(this.configService.get("docker.stackBasePath"), project);
            var composePath = path_1.default.join(projectPath, compose);
            var envPath = path_1.default.join(projectPath, env);
            var result = { compose: "", env: "" };
            return new Promise(function (resolve, reject) {
                if (!fs_1.default.existsSync(composePath)) {
                    _this.logger.error("Compose file not found", composePath);
                    reject();
                    return;
                }
                result.compose = fs_1.default.readFileSync(composePath).toString();
                if (fs_1.default.existsSync(envPath)) {
                    var envFile = fs_1.default.readFileSync(envPath).toString();
                    result.env = envFile;
                }
                else {
                    _this.logger.warn("No stack.env file found", envPath);
                }
                resolve(result);
            });
        };
        ComposeService_1.prototype.composerize = function (run) {
            return (0, composerize_1.default)(run, null, "latest", 2);
        };
        ComposeService_1.prototype.deComposerize = function (compose) {
            return (0, decomposerize_1.default)(compose.join("\n"), {
                command: "docker run",
                rm: true,
                detach: false,
                multiline: true,
                "long-args": false,
                "arg-value-seperator": " ",
            });
        };
        ComposeService_1.prototype.saveProject = function (project, compose, env, data) {
            var projectPath = path_1.default.join(this.configService.get("docker.stackBasePath"), project);
            var composePath = path_1.default.join(projectPath, compose);
            var envPath = path_1.default.join(projectPath, env);
            return new Promise(function (resolve, reject) {
                if (fs_1.default.existsSync(composePath)) {
                    fs_1.default.copyFileSync(composePath, composePath + ".bak");
                }
                fs_1.default.writeFileSync(composePath, data.compose);
                if (fs_1.default.existsSync(envPath)) {
                    fs_1.default.copyFileSync(envPath, envPath + ".bak");
                }
                fs_1.default.writeFileSync(envPath, data.env);
                resolve(true);
            });
        };
        return ComposeService_1;
    }());
    __setFunctionName(_classThis, "ComposeService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ComposeService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ComposeService = _classThis;
}();
exports.ComposeService = ComposeService;

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
exports.ErrorExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var ErrorExceptionFilter = function () {
    var _classDecorators = [(0, common_1.Catch)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ErrorExceptionFilter = _classThis = /** @class */ (function () {
        function ErrorExceptionFilter_1() {
            this.logger = new common_1.Logger(ErrorExceptionFilter.name);
        }
        ErrorExceptionFilter_1.prototype.catch = function (exception, host) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var ctx = host.switchToHttp();
            var response = ctx.getResponse();
            var request = ctx.getRequest();
            var status = exception instanceof common_1.HttpException
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            if (exception instanceof common_1.UnauthorizedException) {
                if (request.url.toLowerCase().startsWith("/api")) {
                    response.hijack();
                    response.raw.statusCode = 302;
                    response.raw.writeHead(302, { "Content-Type": "application/json" });
                    response.raw.write('{"status": 401, "message": "Unauthorized"}');
                    response.raw.end();
                }
                else {
                    this.logger.error("Redirecting to login");
                    response.hijack();
                    response.raw.statusCode = 302;
                    response.raw.writeHead(302, { location: "/login" });
                    response.raw.end();
                }
                return;
            }
            this.logger.error("Error on " + request.url, exception);
            var buildDate = new Date(0);
            buildDate.setUTCSeconds(parseInt((_a = process.env.BUILDDATE) !== null && _a !== void 0 ? _a : "0"));
            if (request.url.startsWith("/api")) {
                response.status(status).send({
                    status: status,
                    name: exception.name,
                    message: (_b = exception.message) !== null && _b !== void 0 ? _b : "Internal Server Error",
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    production: ((_c = process.env.NODE_ENV) !== null && _c !== void 0 ? _c : "") == "production",
                    insideDocker: (_d = process.env.IN_DOCKER) !== null && _d !== void 0 ? _d : false,
                    version: (_e = process.env.PACKAGE_VERSION) !== null && _e !== void 0 ? _e : "development",
                    buildDate: buildDate,
                });
            }
            else {
                response.view("error.hbs", {
                    status: status,
                    exception: exception,
                    name: exception.name,
                    message: (_f = exception.message) !== null && _f !== void 0 ? _f : "Internal Server Error",
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    production: ((_g = process.env.NODE_ENV) !== null && _g !== void 0 ? _g : "") == "production",
                    insideDocker: (_h = process.env.IN_DOCKER) !== null && _h !== void 0 ? _h : false,
                    version: (_j = process.env.PACKAGE_VERSION) !== null && _j !== void 0 ? _j : "development",
                    buildDate: buildDate,
                }, { layout: "./layouts/login.hbs" });
            }
        };
        return ErrorExceptionFilter_1;
    }());
    __setFunctionName(_classThis, "ErrorExceptionFilter");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ErrorExceptionFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ErrorExceptionFilter = _classThis;
}();
exports.ErrorExceptionFilter = ErrorExceptionFilter;

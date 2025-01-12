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
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_guard_1 = require("./auth.guard");
var decorators_1 = require("./decorators");
var AuthController = function () {
    var _classDecorators = [(0, common_1.Controller)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _loginForm_decorators;
    var _logout_decorators;
    var _postLogin_decorators;
    var _signIn_decorators;
    var _getProfile_decorators;
    var AuthController = _classThis = /** @class */ (function () {
        function AuthController_1(authService, configService) {
            this.authService = (__runInitializers(this, _instanceExtraInitializers), authService);
            this.configService = configService;
            this.logger = new common_1.Logger(AuthController.name);
        }
        AuthController_1.prototype.loginForm = function (redir, res) {
            this.authService.clearCookie(res);
            res.view("login.hbs", { redir: redir !== null && redir !== void 0 ? redir : "" }, { layout: "./layouts/login.hbs" });
        };
        AuthController_1.prototype.logout = function (res) {
            this.authService.clearCookie(res);
            res.view("postlogin.hbs", { redir: "/login" }, {});
        };
        AuthController_1.prototype.postLogin = function (token, redir, res) {
            var _a;
            var url = redir !== null && redir !== void 0 ? redir : "";
            if (url == "") {
                url = (_a = this.configService.get("authentication.baseUrl")) !== null && _a !== void 0 ? _a : "/";
            }
            this.authService.setCookie(res, token);
            res.header("Authorization", "Bearer " + token);
            res.view("postlogin.hbs", { redir: url }, {});
        };
        AuthController_1.prototype.signIn = function (res, signInDto) {
            var result = this.authService.signIn(signInDto.username, signInDto.password);
            this.authService.setCookie(res, result.access_token);
            res.header("Authorization", "Bearer " + result.access_token);
            res.send(result);
        };
        AuthController_1.prototype.getProfile = function (req) {
            return req.user;
        };
        return AuthController_1;
    }());
    __setFunctionName(_classThis, "AuthController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _loginForm_decorators = [(0, common_1.Get)("login"), (0, decorators_1.Public)()];
        _logout_decorators = [(0, decorators_1.Public)(), (0, common_1.Get)("auth/logout")];
        _postLogin_decorators = [(0, common_1.Get)("auth/postlogin"), (0, decorators_1.Public)()];
        _signIn_decorators = [(0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, common_1.Post)("auth/login"), (0, decorators_1.Public)()];
        _getProfile_decorators = [(0, common_1.UseGuards)(auth_guard_1.AuthGuard), (0, common_1.Get)("auth/profile")];
        __esDecorate(_classThis, null, _loginForm_decorators, { kind: "method", name: "loginForm", static: false, private: false, access: { has: function (obj) { return "loginForm" in obj; }, get: function (obj) { return obj.loginForm; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _logout_decorators, { kind: "method", name: "logout", static: false, private: false, access: { has: function (obj) { return "logout" in obj; }, get: function (obj) { return obj.logout; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _postLogin_decorators, { kind: "method", name: "postLogin", static: false, private: false, access: { has: function (obj) { return "postLogin" in obj; }, get: function (obj) { return obj.postLogin; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _signIn_decorators, { kind: "method", name: "signIn", static: false, private: false, access: { has: function (obj) { return "signIn" in obj; }, get: function (obj) { return obj.signIn; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProfile_decorators, { kind: "method", name: "getProfile", static: false, private: false, access: { has: function (obj) { return "getProfile" in obj; }, get: function (obj) { return obj.getProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthController = _classThis;
}();
exports.AuthController = AuthController;

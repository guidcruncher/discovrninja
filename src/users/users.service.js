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
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var crypto = require("crypto");
var fs = require("fs");
var UsersService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UsersService = _classThis = /** @class */ (function () {
        function UsersService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(UsersService.name);
        }
        UsersService_1.prototype.hashPasswordWithSalt = function (userPassword, salt) {
            this.logger.log("hashPasswordWithSalt");
            var hash = bcrypt.hashSync(userPassword, salt);
            var result = { hash: hash, salt: salt };
            return result;
        };
        UsersService_1.prototype.checkPassword = function (user, password) {
            this.logger.log("checkPassword");
            var newPassword = this.hashPasswordWithSalt(password, user.salt);
            return newPassword.hash == user.password;
        };
        UsersService_1.prototype.hashPassword = function (userPassword) {
            this.logger.log("hashPassword");
            var saltRounds = 10;
            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(userPassword, salt);
            var result = { hash: hash, salt: salt };
            return result;
        };
        UsersService_1.prototype.loadUserFile = function () {
            try {
                this.logger.log("loadUserFile");
                var filename = this.configService.get("authentication.authFile");
                this.logger.debug("authFile", filename);
                if (!fs.existsSync(filename)) {
                    var users = [];
                    users.push(this.createInitialUser());
                    fs.writeFileSync(filename, JSON.stringify(users), "utf8");
                }
                var result = JSON.parse(fs.readFileSync(filename, "utf8"));
                return result;
            }
            catch (err) {
                this.logger.error("Error in loadUserFile", err);
                return [];
            }
        };
        UsersService_1.prototype.saveUserFile = function (users) {
            try {
                this.logger.log("saveUserFile");
                var filename = this.configService.get("authentication.authFile");
                this.logger.debug("authFile", filename);
                fs.writeFileSync(filename, JSON.stringify(users), "utf8");
            }
            catch (err) {
                this.logger.error("Error in saveUserFile", err);
            }
        };
        UsersService_1.prototype.findOne = function (username) {
            this.logger.log("findOne");
            var users = this.loadUserFile();
            return users.find(function (user) { return user.username === username; });
        };
        UsersService_1.prototype.findOneById = function (userId) {
            this.logger.log("findOneById");
            var users = this.loadUserFile();
            return users.find(function (user) { return user.userId === userId; });
        };
        UsersService_1.prototype.createInitialUser = function () {
            this.logger.log("createInitialUser");
            var password = "Password123";
            var result = this.hashPassword(password);
            var user = {
                userId: "",
                username: "",
                password: "",
                salt: "",
            };
            user.userId = crypto.randomBytes(16).toString("hex");
            user.username = "admin";
            user.password = result.hash;
            user.salt = result.salt;
            return user;
        };
        UsersService_1.prototype.addUser = function (username, password) {
            this.logger.log("addUser");
            var result = this.hashPassword(password);
            var user;
            user.userId = crypto.randomBytes(16).toString("hex");
            user.username = username;
            user.password = result.hash;
            user.salt = result.salt;
            var users = this.loadUserFile();
            users.push(user);
            this.saveUserFile(users);
            return user;
        };
        UsersService_1.prototype.removeUser = function (username) {
            this.logger.log("removeUser");
            var users = this.loadUserFile();
            var index = users.map(function (e) { return e.username; }).indexOf(username);
            if (index >= 0) {
                users.splice(index, 1);
                this.saveUserFile(users);
            }
        };
        UsersService_1.prototype.changePassword = function (username, password) {
            this.logger.log("changePassword");
            var users = this.loadUserFile();
            var index = users.map(function (e) { return e.username; }).indexOf(username);
            if (index >= 0) {
                var result = this.hashPassword(password);
                users[index].password = result.hash;
                users[index].salt = result.salt;
                this.saveUserFile(users);
                return users[index];
            }
            return null;
        };
        return UsersService_1;
    }());
    __setFunctionName(_classThis, "UsersService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersService = _classThis;
}();
exports.UsersService = UsersService;

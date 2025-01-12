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
exports.ContainerStatsSchema = exports.ContainerStats = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var ContainerStats = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _created_decorators;
    var _created_initializers = [];
    var _created_extraInitializers = [];
    var _expireAt_decorators;
    var _expireAt_initializers = [];
    var _expireAt_extraInitializers = [];
    var _cpuPercent_decorators;
    var _cpuPercent_initializers = [];
    var _cpuPercent_extraInitializers = [];
    var _memoryUsage_decorators;
    var _memoryUsage_initializers = [];
    var _memoryUsage_extraInitializers = [];
    var _memoryFreePercent_decorators;
    var _memoryFreePercent_initializers = [];
    var _memoryFreePercent_extraInitializers = [];
    var _memoryLimit_decorators;
    var _memoryLimit_initializers = [];
    var _memoryLimit_extraInitializers = [];
    var ContainerStats = _classThis = /** @class */ (function () {
        function ContainerStats_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.created = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _created_initializers, void 0));
            this.expireAt = (__runInitializers(this, _created_extraInitializers), __runInitializers(this, _expireAt_initializers, void 0));
            this.cpuPercent = (__runInitializers(this, _expireAt_extraInitializers), __runInitializers(this, _cpuPercent_initializers, void 0));
            this.memoryUsage = (__runInitializers(this, _cpuPercent_extraInitializers), __runInitializers(this, _memoryUsage_initializers, void 0));
            this.memoryFreePercent = (__runInitializers(this, _memoryUsage_extraInitializers), __runInitializers(this, _memoryFreePercent_initializers, void 0));
            this.memoryLimit = (__runInitializers(this, _memoryFreePercent_extraInitializers), __runInitializers(this, _memoryLimit_initializers, void 0));
            __runInitializers(this, _memoryLimit_extraInitializers);
            this.created = new Date();
            this.expireAt = new Date();
            this.expireAt.setDate(this.created.getDate() + 10);
        }
        return ContainerStats_1;
    }());
    __setFunctionName(_classThis, "ContainerStats");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _created_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _expireAt_decorators = [(0, mongoose_1.Prop)({ Type: Date, expires: 5 })];
        _cpuPercent_decorators = [(0, mongoose_1.Prop)()];
        _memoryUsage_decorators = [(0, mongoose_1.Prop)()];
        _memoryFreePercent_decorators = [(0, mongoose_1.Prop)()];
        _memoryLimit_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _created_decorators, { kind: "field", name: "created", static: false, private: false, access: { has: function (obj) { return "created" in obj; }, get: function (obj) { return obj.created; }, set: function (obj, value) { obj.created = value; } }, metadata: _metadata }, _created_initializers, _created_extraInitializers);
        __esDecorate(null, null, _expireAt_decorators, { kind: "field", name: "expireAt", static: false, private: false, access: { has: function (obj) { return "expireAt" in obj; }, get: function (obj) { return obj.expireAt; }, set: function (obj, value) { obj.expireAt = value; } }, metadata: _metadata }, _expireAt_initializers, _expireAt_extraInitializers);
        __esDecorate(null, null, _cpuPercent_decorators, { kind: "field", name: "cpuPercent", static: false, private: false, access: { has: function (obj) { return "cpuPercent" in obj; }, get: function (obj) { return obj.cpuPercent; }, set: function (obj, value) { obj.cpuPercent = value; } }, metadata: _metadata }, _cpuPercent_initializers, _cpuPercent_extraInitializers);
        __esDecorate(null, null, _memoryUsage_decorators, { kind: "field", name: "memoryUsage", static: false, private: false, access: { has: function (obj) { return "memoryUsage" in obj; }, get: function (obj) { return obj.memoryUsage; }, set: function (obj, value) { obj.memoryUsage = value; } }, metadata: _metadata }, _memoryUsage_initializers, _memoryUsage_extraInitializers);
        __esDecorate(null, null, _memoryFreePercent_decorators, { kind: "field", name: "memoryFreePercent", static: false, private: false, access: { has: function (obj) { return "memoryFreePercent" in obj; }, get: function (obj) { return obj.memoryFreePercent; }, set: function (obj, value) { obj.memoryFreePercent = value; } }, metadata: _metadata }, _memoryFreePercent_initializers, _memoryFreePercent_extraInitializers);
        __esDecorate(null, null, _memoryLimit_decorators, { kind: "field", name: "memoryLimit", static: false, private: false, access: { has: function (obj) { return "memoryLimit" in obj; }, get: function (obj) { return obj.memoryLimit; }, set: function (obj, value) { obj.memoryLimit = value; } }, metadata: _metadata }, _memoryLimit_initializers, _memoryLimit_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContainerStats = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContainerStats = _classThis;
}();
exports.ContainerStats = ContainerStats;
exports.ContainerStatsSchema = mongoose_1.SchemaFactory.createForClass(ContainerStats);

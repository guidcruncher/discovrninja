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
exports.ServiceDefinitionList = exports.ServiceDefinition = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var ServiceDefinition = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _iconSlug_decorators;
    var _iconSlug_initializers = [];
    var _iconSlug_extraInitializers = [];
    var _iconCatalog_decorators;
    var _iconCatalog_initializers = [];
    var _iconCatalog_extraInitializers = [];
    var _containerName_decorators;
    var _containerName_initializers = [];
    var _containerName_extraInitializers = [];
    var _hostname_decorators;
    var _hostname_initializers = [];
    var _hostname_extraInitializers = [];
    var _ipaddress_decorators;
    var _ipaddress_initializers = [];
    var _ipaddress_extraInitializers = [];
    var _proxy_decorators;
    var _proxy_initializers = [];
    var _proxy_extraInitializers = [];
    var _public_decorators;
    var _public_initializers = [];
    var _public_extraInitializers = [];
    var _project_decorators;
    var _project_initializers = [];
    var _project_extraInitializers = [];
    var _firstSeen_decorators;
    var _firstSeen_initializers = [];
    var _firstSeen_extraInitializers = [];
    var _created_decorators;
    var _created_initializers = [];
    var _created_extraInitializers = [];
    var _updated_decorators;
    var _updated_initializers = [];
    var _updated_extraInitializers = [];
    var _edited_decorators;
    var _edited_initializers = [];
    var _edited_extraInitializers = [];
    var _available_decorators;
    var _available_initializers = [];
    var _available_extraInitializers = [];
    var _lastSeen_decorators;
    var _lastSeen_initializers = [];
    var _lastSeen_extraInitializers = [];
    var _lastPolled_decorators;
    var _lastPolled_initializers = [];
    var _lastPolled_extraInitializers = [];
    var _downtime_decorators;
    var _downtime_initializers = [];
    var _downtime_extraInitializers = [];
    var _archived_decorators;
    var _archived_initializers = [];
    var _archived_extraInitializers = [];
    var ServiceDefinition = _classThis = /** @class */ (function () {
        function ServiceDefinition_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.iconSlug = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _iconSlug_initializers, void 0));
            this.iconCatalog = (__runInitializers(this, _iconSlug_extraInitializers), __runInitializers(this, _iconCatalog_initializers, void 0));
            this.containerName = (__runInitializers(this, _iconCatalog_extraInitializers), __runInitializers(this, _containerName_initializers, void 0));
            this.hostname = (__runInitializers(this, _containerName_extraInitializers), __runInitializers(this, _hostname_initializers, void 0));
            this.ipaddress = (__runInitializers(this, _hostname_extraInitializers), __runInitializers(this, _ipaddress_initializers, void 0));
            this.proxy = (__runInitializers(this, _ipaddress_extraInitializers), __runInitializers(this, _proxy_initializers, void 0));
            this.public = (__runInitializers(this, _proxy_extraInitializers), __runInitializers(this, _public_initializers, void 0));
            this.project = (__runInitializers(this, _public_extraInitializers), __runInitializers(this, _project_initializers, void 0));
            this.firstSeen = (__runInitializers(this, _project_extraInitializers), __runInitializers(this, _firstSeen_initializers, void 0));
            this.created = (__runInitializers(this, _firstSeen_extraInitializers), __runInitializers(this, _created_initializers, void 0));
            this.updated = (__runInitializers(this, _created_extraInitializers), __runInitializers(this, _updated_initializers, void 0));
            this.edited = (__runInitializers(this, _updated_extraInitializers), __runInitializers(this, _edited_initializers, void 0));
            this.available = (__runInitializers(this, _edited_extraInitializers), __runInitializers(this, _available_initializers, void 0));
            this.lastSeen = (__runInitializers(this, _available_extraInitializers), __runInitializers(this, _lastSeen_initializers, void 0));
            this.lastPolled = (__runInitializers(this, _lastSeen_extraInitializers), __runInitializers(this, _lastPolled_initializers, void 0));
            this.downtime = (__runInitializers(this, _lastPolled_extraInitializers), __runInitializers(this, _downtime_initializers, void 0));
            this.archived = (__runInitializers(this, _downtime_extraInitializers), __runInitializers(this, _archived_initializers, void 0));
            __runInitializers(this, _archived_extraInitializers);
            this.name = "";
            this.ipaddress = "";
            this.containerName = "";
            this.hostname = "";
            this.proxy = "";
            this.public = "";
            this.iconCatalog = "";
            this.iconSlug = "";
            this.created = new Date();
            this.updated = new Date();
            this.edited = false;
            this.archived = false;
            this.available = false;
            this.project = "";
            this.firstSeen = null;
            this.lastSeen = null;
            this.downtime = 0;
            this.lastPolled = null;
        }
        return ServiceDefinition_1;
    }());
    __setFunctionName(_classThis, "ServiceDefinition");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _iconSlug_decorators = [(0, mongoose_1.Prop)()];
        _iconCatalog_decorators = [(0, mongoose_1.Prop)()];
        _containerName_decorators = [(0, mongoose_1.Prop)()];
        _hostname_decorators = [(0, mongoose_1.Prop)()];
        _ipaddress_decorators = [(0, mongoose_1.Prop)()];
        _proxy_decorators = [(0, mongoose_1.Prop)()];
        _public_decorators = [(0, mongoose_1.Prop)()];
        _project_decorators = [(0, mongoose_1.Prop)()];
        _firstSeen_decorators = [(0, mongoose_1.Prop)()];
        _created_decorators = [(0, mongoose_1.Prop)()];
        _updated_decorators = [(0, mongoose_1.Prop)()];
        _edited_decorators = [(0, mongoose_1.Prop)()];
        _available_decorators = [(0, mongoose_1.Prop)()];
        _lastSeen_decorators = [(0, mongoose_1.Prop)()];
        _lastPolled_decorators = [(0, mongoose_1.Prop)()];
        _downtime_decorators = [(0, mongoose_1.Prop)()];
        _archived_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _iconSlug_decorators, { kind: "field", name: "iconSlug", static: false, private: false, access: { has: function (obj) { return "iconSlug" in obj; }, get: function (obj) { return obj.iconSlug; }, set: function (obj, value) { obj.iconSlug = value; } }, metadata: _metadata }, _iconSlug_initializers, _iconSlug_extraInitializers);
        __esDecorate(null, null, _iconCatalog_decorators, { kind: "field", name: "iconCatalog", static: false, private: false, access: { has: function (obj) { return "iconCatalog" in obj; }, get: function (obj) { return obj.iconCatalog; }, set: function (obj, value) { obj.iconCatalog = value; } }, metadata: _metadata }, _iconCatalog_initializers, _iconCatalog_extraInitializers);
        __esDecorate(null, null, _containerName_decorators, { kind: "field", name: "containerName", static: false, private: false, access: { has: function (obj) { return "containerName" in obj; }, get: function (obj) { return obj.containerName; }, set: function (obj, value) { obj.containerName = value; } }, metadata: _metadata }, _containerName_initializers, _containerName_extraInitializers);
        __esDecorate(null, null, _hostname_decorators, { kind: "field", name: "hostname", static: false, private: false, access: { has: function (obj) { return "hostname" in obj; }, get: function (obj) { return obj.hostname; }, set: function (obj, value) { obj.hostname = value; } }, metadata: _metadata }, _hostname_initializers, _hostname_extraInitializers);
        __esDecorate(null, null, _ipaddress_decorators, { kind: "field", name: "ipaddress", static: false, private: false, access: { has: function (obj) { return "ipaddress" in obj; }, get: function (obj) { return obj.ipaddress; }, set: function (obj, value) { obj.ipaddress = value; } }, metadata: _metadata }, _ipaddress_initializers, _ipaddress_extraInitializers);
        __esDecorate(null, null, _proxy_decorators, { kind: "field", name: "proxy", static: false, private: false, access: { has: function (obj) { return "proxy" in obj; }, get: function (obj) { return obj.proxy; }, set: function (obj, value) { obj.proxy = value; } }, metadata: _metadata }, _proxy_initializers, _proxy_extraInitializers);
        __esDecorate(null, null, _public_decorators, { kind: "field", name: "public", static: false, private: false, access: { has: function (obj) { return "public" in obj; }, get: function (obj) { return obj.public; }, set: function (obj, value) { obj.public = value; } }, metadata: _metadata }, _public_initializers, _public_extraInitializers);
        __esDecorate(null, null, _project_decorators, { kind: "field", name: "project", static: false, private: false, access: { has: function (obj) { return "project" in obj; }, get: function (obj) { return obj.project; }, set: function (obj, value) { obj.project = value; } }, metadata: _metadata }, _project_initializers, _project_extraInitializers);
        __esDecorate(null, null, _firstSeen_decorators, { kind: "field", name: "firstSeen", static: false, private: false, access: { has: function (obj) { return "firstSeen" in obj; }, get: function (obj) { return obj.firstSeen; }, set: function (obj, value) { obj.firstSeen = value; } }, metadata: _metadata }, _firstSeen_initializers, _firstSeen_extraInitializers);
        __esDecorate(null, null, _created_decorators, { kind: "field", name: "created", static: false, private: false, access: { has: function (obj) { return "created" in obj; }, get: function (obj) { return obj.created; }, set: function (obj, value) { obj.created = value; } }, metadata: _metadata }, _created_initializers, _created_extraInitializers);
        __esDecorate(null, null, _updated_decorators, { kind: "field", name: "updated", static: false, private: false, access: { has: function (obj) { return "updated" in obj; }, get: function (obj) { return obj.updated; }, set: function (obj, value) { obj.updated = value; } }, metadata: _metadata }, _updated_initializers, _updated_extraInitializers);
        __esDecorate(null, null, _edited_decorators, { kind: "field", name: "edited", static: false, private: false, access: { has: function (obj) { return "edited" in obj; }, get: function (obj) { return obj.edited; }, set: function (obj, value) { obj.edited = value; } }, metadata: _metadata }, _edited_initializers, _edited_extraInitializers);
        __esDecorate(null, null, _available_decorators, { kind: "field", name: "available", static: false, private: false, access: { has: function (obj) { return "available" in obj; }, get: function (obj) { return obj.available; }, set: function (obj, value) { obj.available = value; } }, metadata: _metadata }, _available_initializers, _available_extraInitializers);
        __esDecorate(null, null, _lastSeen_decorators, { kind: "field", name: "lastSeen", static: false, private: false, access: { has: function (obj) { return "lastSeen" in obj; }, get: function (obj) { return obj.lastSeen; }, set: function (obj, value) { obj.lastSeen = value; } }, metadata: _metadata }, _lastSeen_initializers, _lastSeen_extraInitializers);
        __esDecorate(null, null, _lastPolled_decorators, { kind: "field", name: "lastPolled", static: false, private: false, access: { has: function (obj) { return "lastPolled" in obj; }, get: function (obj) { return obj.lastPolled; }, set: function (obj, value) { obj.lastPolled = value; } }, metadata: _metadata }, _lastPolled_initializers, _lastPolled_extraInitializers);
        __esDecorate(null, null, _downtime_decorators, { kind: "field", name: "downtime", static: false, private: false, access: { has: function (obj) { return "downtime" in obj; }, get: function (obj) { return obj.downtime; }, set: function (obj, value) { obj.downtime = value; } }, metadata: _metadata }, _downtime_initializers, _downtime_extraInitializers);
        __esDecorate(null, null, _archived_decorators, { kind: "field", name: "archived", static: false, private: false, access: { has: function (obj) { return "archived" in obj; }, get: function (obj) { return obj.archived; }, set: function (obj, value) { obj.archived = value; } }, metadata: _metadata }, _archived_initializers, _archived_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ServiceDefinition = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServiceDefinition = _classThis;
}();
exports.ServiceDefinition = ServiceDefinition;
var ServiceDefinitionList = /** @class */ (function () {
    function ServiceDefinitionList() {
        this.services = [];
    }
    ServiceDefinitionList.fromDiscoveryScan = function (input) {
        var result = new ServiceDefinitionList();
        input.entries.forEach(function (service) {
            if (service.targetAddress && service.targetAddress != "") {
                var item = new ServiceDefinition();
                item.available = service.available;
                if (item.available) {
                    item.lastSeen = new Date();
                }
                item.project = service.project;
                item.name = service.name;
                item.containerName = service.containerName;
                item.hostname = service.hostname;
                item.proxy = "";
                item.iconSlug = service.iconSlug;
                if (service.sourceAddress) {
                    item.proxy = service.sourceAddress.address;
                    var net = service.ipAddresses.find(function (a) {
                        return a.network == service.sourceAddress.network;
                    });
                    if (net) {
                        item.ipaddress = net.address;
                    }
                }
                item.public = service.targetAddress;
                result.services.push(item);
            }
        });
        result.created = new Date();
        return result;
    };
    return ServiceDefinitionList;
}());
exports.ServiceDefinitionList = ServiceDefinitionList;

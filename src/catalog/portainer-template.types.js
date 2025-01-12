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
exports.ContainerCatalog = exports.TemplateCatalog = exports.PortainerTemplate = exports.TemplateCreateResponse = exports.TemplateCreateRequest = exports.Template = exports.RepositorySetting = exports.VolumeSetting = exports.EnvSetting = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var crypto = require("crypto");
var EnvSetting = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _default_decorators;
    var _default_initializers = [];
    var _default_extraInitializers = [];
    var _set_decorators;
    var _set_initializers = [];
    var _set_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var EnvSetting = _classThis = /** @class */ (function () {
        function EnvSetting_1() {
            this.label = __runInitializers(this, _label_initializers, void 0);
            this.name = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.default = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _default_initializers, void 0));
            this.set = (__runInitializers(this, _default_extraInitializers), __runInitializers(this, _set_initializers, void 0));
            this.description = (__runInitializers(this, _set_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            __runInitializers(this, _description_extraInitializers);
            this.name = "";
            this.description = "";
            this["set"] = "";
            this["default"] = "";
        }
        return EnvSetting_1;
    }());
    __setFunctionName(_classThis, "EnvSetting");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _label_decorators = [(0, mongoose_1.Prop)()];
        _name_decorators = [(0, mongoose_1.Prop)()];
        _default_decorators = [(0, mongoose_1.Prop)()];
        _set_decorators = [(0, mongoose_1.Prop)()];
        _description_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _default_decorators, { kind: "field", name: "default", static: false, private: false, access: { has: function (obj) { return "default" in obj; }, get: function (obj) { return obj.default; }, set: function (obj, value) { obj.default = value; } }, metadata: _metadata }, _default_initializers, _default_extraInitializers);
        __esDecorate(null, null, _set_decorators, { kind: "field", name: "set", static: false, private: false, access: { has: function (obj) { return "set" in obj; }, get: function (obj) { return obj.set; }, set: function (obj, value) { obj.set = value; } }, metadata: _metadata }, _set_initializers, _set_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EnvSetting = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EnvSetting = _classThis;
}();
exports.EnvSetting = EnvSetting;
var VolumeSetting = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _bind_decorators;
    var _bind_initializers = [];
    var _bind_extraInitializers = [];
    var _container_decorators;
    var _container_initializers = [];
    var _container_extraInitializers = [];
    var VolumeSetting = _classThis = /** @class */ (function () {
        function VolumeSetting_1() {
            this.bind = __runInitializers(this, _bind_initializers, void 0);
            this.container = (__runInitializers(this, _bind_extraInitializers), __runInitializers(this, _container_initializers, void 0));
            __runInitializers(this, _container_extraInitializers);
            this.bind = "";
            this.container = "";
        }
        return VolumeSetting_1;
    }());
    __setFunctionName(_classThis, "VolumeSetting");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _bind_decorators = [(0, mongoose_1.Prop)()];
        _container_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _bind_decorators, { kind: "field", name: "bind", static: false, private: false, access: { has: function (obj) { return "bind" in obj; }, get: function (obj) { return obj.bind; }, set: function (obj, value) { obj.bind = value; } }, metadata: _metadata }, _bind_initializers, _bind_extraInitializers);
        __esDecorate(null, null, _container_decorators, { kind: "field", name: "container", static: false, private: false, access: { has: function (obj) { return "container" in obj; }, get: function (obj) { return obj.container; }, set: function (obj, value) { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VolumeSetting = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VolumeSetting = _classThis;
}();
exports.VolumeSetting = VolumeSetting;
var RepositorySetting = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _stackfile_decorators;
    var _stackfile_initializers = [];
    var _stackfile_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var RepositorySetting = _classThis = /** @class */ (function () {
        function RepositorySetting_1() {
            this.stackfile = __runInitializers(this, _stackfile_initializers, void 0);
            this.url = (__runInitializers(this, _stackfile_extraInitializers), __runInitializers(this, _url_initializers, void 0));
            __runInitializers(this, _url_extraInitializers);
            this.stackfile = "";
            this.url = "";
        }
        return RepositorySetting_1;
    }());
    __setFunctionName(_classThis, "RepositorySetting");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _stackfile_decorators = [(0, mongoose_1.Prop)()];
        _url_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _stackfile_decorators, { kind: "field", name: "stackfile", static: false, private: false, access: { has: function (obj) { return "stackfile" in obj; }, get: function (obj) { return obj.stackfile; }, set: function (obj, value) { obj.stackfile = value; } }, metadata: _metadata }, _stackfile_initializers, _stackfile_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RepositorySetting = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RepositorySetting = _classThis;
}();
exports.RepositorySetting = RepositorySetting;
var Template = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _catalogId_decorators;
    var _catalogId_initializers = [];
    var _catalogId_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _env_decorators;
    var _env_initializers = [];
    var _env_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _logo_decorators;
    var _logo_initializers = [];
    var _logo_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _platform_decorators;
    var _platform_initializers = [];
    var _platform_extraInitializers = [];
    var _ports_decorators;
    var _ports_initializers = [];
    var _ports_extraInitializers = [];
    var _restart_policy_decorators;
    var _restart_policy_initializers = [];
    var _restart_policy_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _volumes_decorators;
    var _volumes_initializers = [];
    var _volumes_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    var _repository_decorators;
    var _repository_initializers = [];
    var _repository_extraInitializers = [];
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var Template = _classThis = /** @class */ (function () {
        function Template_1() {
            this.catalogId = __runInitializers(this, _catalogId_initializers, void 0);
            this.categories = (__runInitializers(this, _catalogId_extraInitializers), __runInitializers(this, _categories_initializers, void 0));
            this.description = (__runInitializers(this, _categories_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.descriptionMD = __runInitializers(this, _description_extraInitializers);
            this.env = __runInitializers(this, _env_initializers, void 0);
            this.image = (__runInitializers(this, _env_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            this.logo = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _logo_initializers, void 0));
            this.name = (__runInitializers(this, _logo_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.platform = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _platform_initializers, void 0));
            this.ports = (__runInitializers(this, _platform_extraInitializers), __runInitializers(this, _ports_initializers, void 0));
            this.restart_policy = (__runInitializers(this, _ports_extraInitializers), __runInitializers(this, _restart_policy_initializers, void 0));
            this.title = (__runInitializers(this, _restart_policy_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.type = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.volumes = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _volumes_initializers, void 0));
            this.note = (__runInitializers(this, _volumes_extraInitializers), __runInitializers(this, _note_initializers, void 0));
            this.repository = (__runInitializers(this, _note_extraInitializers), __runInitializers(this, _repository_initializers, void 0));
            this.network = (__runInitializers(this, _repository_extraInitializers), __runInitializers(this, _network_initializers, void 0));
            this.hostname = __runInitializers(this, _network_extraInitializers);
            this.projectname = "";
            this.hostname = "";
            this.catalogId = "";
            this.categories = [];
            this.description = "";
            this.env = [];
            this.image = "";
            this.logo = "";
            this.name = "";
            this.platform = "";
            this.ports = [];
            this.restart_policy = "";
            this.title = "";
            this.type = 0;
            this.volumes = [];
            this.note = "";
            this.repository = new RepositorySetting();
            this.network = "";
        }
        return Template_1;
    }());
    __setFunctionName(_classThis, "Template");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _catalogId_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _categories_decorators = [(0, mongoose_1.Prop)()];
        _description_decorators = [(0, mongoose_1.Prop)()];
        _env_decorators = [(0, mongoose_1.Prop)({ type: function () { return [EnvSetting]; } })];
        _image_decorators = [(0, mongoose_1.Prop)()];
        _logo_decorators = [(0, mongoose_1.Prop)()];
        _name_decorators = [(0, mongoose_1.Prop)()];
        _platform_decorators = [(0, mongoose_1.Prop)()];
        _ports_decorators = [(0, mongoose_1.Prop)()];
        _restart_policy_decorators = [(0, mongoose_1.Prop)()];
        _title_decorators = [(0, mongoose_1.Prop)()];
        _type_decorators = [(0, mongoose_1.Prop)()];
        _volumes_decorators = [(0, mongoose_1.Prop)({ type: function () { return [VolumeSetting]; } })];
        _note_decorators = [(0, mongoose_1.Prop)()];
        _repository_decorators = [(0, mongoose_1.Prop)({ type: function () { return RepositorySetting; } })];
        _network_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _catalogId_decorators, { kind: "field", name: "catalogId", static: false, private: false, access: { has: function (obj) { return "catalogId" in obj; }, get: function (obj) { return obj.catalogId; }, set: function (obj, value) { obj.catalogId = value; } }, metadata: _metadata }, _catalogId_initializers, _catalogId_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _env_decorators, { kind: "field", name: "env", static: false, private: false, access: { has: function (obj) { return "env" in obj; }, get: function (obj) { return obj.env; }, set: function (obj, value) { obj.env = value; } }, metadata: _metadata }, _env_initializers, _env_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, null, _logo_decorators, { kind: "field", name: "logo", static: false, private: false, access: { has: function (obj) { return "logo" in obj; }, get: function (obj) { return obj.logo; }, set: function (obj, value) { obj.logo = value; } }, metadata: _metadata }, _logo_initializers, _logo_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _platform_decorators, { kind: "field", name: "platform", static: false, private: false, access: { has: function (obj) { return "platform" in obj; }, get: function (obj) { return obj.platform; }, set: function (obj, value) { obj.platform = value; } }, metadata: _metadata }, _platform_initializers, _platform_extraInitializers);
        __esDecorate(null, null, _ports_decorators, { kind: "field", name: "ports", static: false, private: false, access: { has: function (obj) { return "ports" in obj; }, get: function (obj) { return obj.ports; }, set: function (obj, value) { obj.ports = value; } }, metadata: _metadata }, _ports_initializers, _ports_extraInitializers);
        __esDecorate(null, null, _restart_policy_decorators, { kind: "field", name: "restart_policy", static: false, private: false, access: { has: function (obj) { return "restart_policy" in obj; }, get: function (obj) { return obj.restart_policy; }, set: function (obj, value) { obj.restart_policy = value; } }, metadata: _metadata }, _restart_policy_initializers, _restart_policy_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _volumes_decorators, { kind: "field", name: "volumes", static: false, private: false, access: { has: function (obj) { return "volumes" in obj; }, get: function (obj) { return obj.volumes; }, set: function (obj, value) { obj.volumes = value; } }, metadata: _metadata }, _volumes_initializers, _volumes_extraInitializers);
        __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
        __esDecorate(null, null, _repository_decorators, { kind: "field", name: "repository", static: false, private: false, access: { has: function (obj) { return "repository" in obj; }, get: function (obj) { return obj.repository; }, set: function (obj, value) { obj.repository = value; } }, metadata: _metadata }, _repository_initializers, _repository_extraInitializers);
        __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Template = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Template = _classThis;
}();
exports.Template = Template;
var TemplateCreateRequest = /** @class */ (function () {
    function TemplateCreateRequest() {
        this.environment = {};
        this.template = new Template();
        this.environment = {};
        this.launchOnSave = false;
    }
    return TemplateCreateRequest;
}());
exports.TemplateCreateRequest = TemplateCreateRequest;
var TemplateCreateResponse = /** @class */ (function () {
    function TemplateCreateResponse() {
    }
    return TemplateCreateResponse;
}());
exports.TemplateCreateResponse = TemplateCreateResponse;
var PortainerTemplate = /** @class */ (function () {
    function PortainerTemplate() {
    }
    return PortainerTemplate;
}());
exports.PortainerTemplate = PortainerTemplate;
var TemplateCatalog = /** @class */ (function () {
    function TemplateCatalog() {
        this.templates = [];
        this.categories = {};
        this.templates = [];
        this.categories = {};
    }
    return TemplateCatalog;
}());
exports.TemplateCatalog = TemplateCatalog;
var ContainerCatalog = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateCreated_extraInitializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateUpdated_extraInitializers = [];
    var ContainerCatalog = _classThis = /** @class */ (function () {
        function ContainerCatalog_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.url = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _url_initializers, void 0));
            this.dateCreated = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _dateCreated_initializers, void 0));
            this.dateUpdated = (__runInitializers(this, _dateCreated_extraInitializers), __runInitializers(this, _dateUpdated_initializers, void 0));
            __runInitializers(this, _dateUpdated_extraInitializers);
            this.name = "";
            this.url = "";
            this.dateCreated = new Date();
            this.dateUpdated = this.dateCreated;
            this.id = crypto.randomBytes(16).toString("hex");
        }
        return ContainerCatalog_1;
    }());
    __setFunctionName(_classThis, "ContainerCatalog");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true })];
        _name_decorators = [(0, mongoose_1.Prop)()];
        _url_decorators = [(0, mongoose_1.Prop)()];
        _dateCreated_decorators = [(0, mongoose_1.Prop)()];
        _dateUpdated_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _dateCreated_extraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _dateUpdated_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContainerCatalog = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContainerCatalog = _classThis;
}();
exports.ContainerCatalog = ContainerCatalog;

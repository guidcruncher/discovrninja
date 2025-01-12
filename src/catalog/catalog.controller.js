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
exports.CatalogController = void 0;
var common_1 = require("@nestjs/common");
var common_2 = require("@nestjs/common");
var CatalogController = function () {
    var _classDecorators = [(0, common_2.Controller)("/admin")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createstackpage_decorators;
    var _catalogpage_decorators;
    var _editpage_decorators;
    var CatalogController = _classThis = /** @class */ (function () {
        function CatalogController_1(composeService, portainerService, serviceDefinitionService, iconService) {
            this.composeService = (__runInitializers(this, _instanceExtraInitializers), composeService);
            this.portainerService = portainerService;
            this.serviceDefinitionService = serviceDefinitionService;
            this.iconService = iconService;
            this.logger = new common_1.Logger(CatalogController.name);
        }
        CatalogController_1.prototype.createstackpage = function (catalog, name, res) {
            this.portainerService
                .fetchTemplate(catalog, name)
                .then(function (template) {
                template.projectname = template.name.toLowerCase();
                template.hostname = template.name.toLowerCase();
                res.view("createstack.hbs", { catalogId: catalog, templateName: name, template: template }, { layout: "./layouts/layout.hbs" });
            })
                .catch(function (err) {
                res.status(500).send(err);
            });
        };
        CatalogController_1.prototype.catalogpage = function (id, filter, res) {
            var _this = this;
            var catalogId = id !== null && id !== void 0 ? id : "";
            this.logger.debug("catalogid", catalogId);
            this.portainerService
                .getCatalogs()
                .then(function (catalogs) {
                var _a;
                if (catalogs.length > 0) {
                    if (catalogId == "") {
                        catalogId = catalogs[0].id;
                    }
                    var catalog_1 = (_a = catalogs.find(function (f) {
                        return f.id == catalogId;
                    })) !== null && _a !== void 0 ? _a : catalogs[0];
                    _this.portainerService
                        .fetchCatalog(catalog_1.id, filter)
                        .then(function (feed) {
                        res.view("catalog.hbs", { catalogs: catalogs, selected: catalog_1, feed: feed }, { layout: "./layouts/layout.hbs" });
                    })
                        .catch(function (err) {
                        res.status(500).send(err);
                    });
                }
                else {
                    res.view("catalog.hbs", { fcatalogs: [], selected: {}, feed: [] }, { layout: "./layouts/layout.hbs" });
                }
            })
                .catch(function (err) {
                res.status(500).send(err);
            });
        };
        CatalogController_1.prototype.editpage = function (project, container, res) {
            var _this = this;
            this.serviceDefinitionService.get(container).then(function (definition) {
                var _a;
                var result = (_a = definition.pop()) !== null && _a !== void 0 ? _a : {};
                result.project = project;
                if (!result.containerName) {
                    result.containerName = container.toLowerCase();
                }
                result.iconUrl = "/api/icons/question";
                if (result.iconSlug) {
                    result.iconUrl = _this.iconService.resolveIconUrl(result.iconCatalog, result.iconSlug);
                }
                _this.composeService
                    .loadProject(project, "compose.yaml", "stack.env")
                    .then(function (configuration) {
                    res.view("edit.hbs", {
                        containerName: container,
                        projectName: project,
                        def: result,
                        project: configuration,
                    }, { layout: "./layouts/layout.hbs" });
                })
                    .catch(function (err) {
                    _this.logger.error("Error invoking container edit", err);
                    res.status(500).send(err);
                });
            });
        };
        return CatalogController_1;
    }());
    __setFunctionName(_classThis, "CatalogController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createstackpage_decorators = [(0, common_2.Get)("createstack")];
        _catalogpage_decorators = [(0, common_2.Get)("catalog")];
        _editpage_decorators = [(0, common_2.Get)("edit")];
        __esDecorate(_classThis, null, _createstackpage_decorators, { kind: "method", name: "createstackpage", static: false, private: false, access: { has: function (obj) { return "createstackpage" in obj; }, get: function (obj) { return obj.createstackpage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _catalogpage_decorators, { kind: "method", name: "catalogpage", static: false, private: false, access: { has: function (obj) { return "catalogpage" in obj; }, get: function (obj) { return obj.catalogpage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _editpage_decorators, { kind: "method", name: "editpage", static: false, private: false, access: { has: function (obj) { return "editpage" in obj; }, get: function (obj) { return obj.editpage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CatalogController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CatalogController = _classThis;
}();
exports.CatalogController = CatalogController;

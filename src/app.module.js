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
exports.AppModule = void 0;
var auth_module_1 = require("@auth/auth.module");
var app_controller_1 = require("@controllers/app.controller");
var resources_controller_1 = require("@controllers/resources.controller");
var views_controller_1 = require("@controllers/views.controller");
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var notification_service_1 = require("@services/notification.service");
var resources_service_1 = require("@services/resources.service");
var tasks_service_1 = require("@services/tasks.service");
var users_module_1 = require("@users/users.module");
var catalog_module_1 = require("./catalog/catalog.module");
var configuration_module_1 = require("./configuration/configuration.module");
var container_module_1 = require("./container/container.module");
var data_module_1 = require("./data/data.module");
var desktop_module_1 = require("./desktop/desktop.module");
var discovery_module_1 = require("./discovery/discovery.module");
var icon_module_1 = require("./icon/icon.module");
var project_module_1 = require("./project/project.module");
var resources_module_1 = require("./resources/resources.module");
/**
 * This is the main application module
 */
var AppModule = function () {
    var _classDecorators = [(0, common_1.Global)(), (0, common_1.Module)({
            imports: [
                configuration_module_1.ConfigurationModule,
                data_module_1.DataModule,
                schedule_1.ScheduleModule.forRoot(),
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                desktop_module_1.DesktopModule,
                catalog_module_1.CatalogModule,
                project_module_1.ProjectModule,
                container_module_1.ContainerModule,
                resources_module_1.ResourcesModule,
                icon_module_1.IconModule,
                discovery_module_1.DiscoveryModule,
            ],
            controllers: [app_controller_1.AppController, views_controller_1.ViewsController, resources_controller_1.ResourcesController],
            providers: [resources_service_1.ResourcesService, notification_service_1.NotificationService, tasks_service_1.TasksService],
            exports: [resources_service_1.ResourcesService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;

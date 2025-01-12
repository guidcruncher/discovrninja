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
exports.TasksService = void 0;
var fluenthttpclient_1 = require("@helpers/fluenthttpclient");
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var path = require("path");
var TasksService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _crongetdailyimages_decorators;
    var _crontriggerDiscoveryService_decorators;
    var _crontriggerTrackStats_decorators;
    var TasksService = _classThis = /** @class */ (function () {
        function TasksService_1(configService, discoveryService, dockerService, containerStatsModel) {
            this.configService = (__runInitializers(this, _instanceExtraInitializers), configService);
            this.discoveryService = discoveryService;
            this.dockerService = dockerService;
            this.containerStatsModel = containerStatsModel;
            this.logger = new common_1.Logger(TasksService.name);
        }
        TasksService_1.prototype.crongetdailyimages = function () {
            var _this = this;
            var url = "https://peapix.com/bing/feed?country=us";
            return new Promise(function (resolve, reject) {
                try {
                    _this.logger.debug("Getting daily images");
                    fluenthttpclient_1.FluentHttpClient.Get(url)
                        .Execute()
                        .then(function (result) {
                        var parsed = JSON.parse(result.value);
                        var imgurl = parsed[0].fullUrl;
                        fluenthttpclient_1.FluentHttpClient.Get(imgurl)
                            .DownloadTo(path.join(__dirname, "../", "../", "client", "public", "img", "bing.jpg"))
                            .then(function (result) {
                            resolve(imgurl);
                        })
                            .catch(function (err) {
                            _this.logger.error("Error in daily image save cron job", err);
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        _this.logger.error("Error in daily image cron job", err);
                        reject(err);
                    });
                }
                catch (err) {
                    _this.logger.error("Error in daily image cron job", err);
                    reject(err);
                }
            });
        };
        TasksService_1.prototype.crontriggerDiscoveryService = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                try {
                    _this.logger.debug("Discovery Service cron task triggered.");
                    _this.discoveryService
                        .scan()
                        .then(function (r) {
                        resolve(r);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error in discovery cron job", err);
                        reject(err);
                    });
                }
                catch (err) {
                    _this.logger.error("Error in discovery cron job", err);
                    reject(err);
                }
            });
        };
        TasksService_1.prototype.crontriggerTrackStats = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                try {
                    _this.logger.debug("Stats Service cron task triggered.");
                    _this.dockerService.getAllContainerStats().then(function (stats) {
                        var promises = [];
                        stats.forEach(function (record) {
                            var dto = {
                                name: record.name,
                                cpuPercent: record.stats.cpuPercent,
                                memoryUsage: record.stats.memoryUsage,
                                memoryFreePercent: record.stats.memoryFreePercent,
                                memoryLimit: record.stats.memoryLimit,
                                created: new Date(),
                                expireAt: new Date(),
                            };
                            dto.expireAt.setDate(dto.created.getDate() + 10);
                            var created = new _this.containerStatsModel(dto);
                            promises.push(created.save());
                        });
                        Promise.allSettled(promises)
                            .then(function () {
                            resolve(true);
                        })
                            .catch(function (err) {
                            _this.logger.error("Error in stats cron job", err);
                            reject(err);
                        });
                    });
                }
                catch (err) {
                    _this.logger.error("Error in stats cron job", err);
                    reject(err);
                }
            });
        };
        TasksService_1.prototype.initalJobs = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                try {
                    _this.logger.debug("Starting initial jobs run.");
                    var promises = [];
                    promises.push(_this.crongetdailyimages());
                    promises.push(_this.crontriggerDiscoveryService());
                    promises.push(_this.crontriggerTrackStats());
                    Promise.allSettled(promises)
                        .then(function (r) {
                        _this.logger.debug("Finished initial jobs run");
                        resolve(r);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error in initial jobs execution", err);
                        reject(err);
                    });
                }
                catch (err) {
                    _this.logger.error("Error in initial jobs execution", err);
                    reject(err);
                }
            });
        };
        return TasksService_1;
    }());
    __setFunctionName(_classThis, "TasksService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _crongetdailyimages_decorators = [(0, schedule_1.Cron)("0 5 */1 * * *")];
        _crontriggerDiscoveryService_decorators = [(0, schedule_1.Cron)("0 */15 * * * *")];
        _crontriggerTrackStats_decorators = [(0, schedule_1.Cron)("0 */5 * * * *")];
        __esDecorate(_classThis, null, _crongetdailyimages_decorators, { kind: "method", name: "crongetdailyimages", static: false, private: false, access: { has: function (obj) { return "crongetdailyimages" in obj; }, get: function (obj) { return obj.crongetdailyimages; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _crontriggerDiscoveryService_decorators, { kind: "method", name: "crontriggerDiscoveryService", static: false, private: false, access: { has: function (obj) { return "crontriggerDiscoveryService" in obj; }, get: function (obj) { return obj.crontriggerDiscoveryService; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _crontriggerTrackStats_decorators, { kind: "method", name: "crontriggerTrackStats", static: false, private: false, access: { has: function (obj) { return "crontriggerTrackStats" in obj; }, get: function (obj) { return obj.crontriggerTrackStats; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TasksService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TasksService = _classThis;
}();
exports.TasksService = TasksService;

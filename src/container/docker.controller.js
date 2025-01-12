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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerController = void 0;
var common_1 = require("@nestjs/common");
/**
 * The Docker service API
 */
var DockerController = function () {
    var _classDecorators = [(0, common_1.Controller)("api/docker")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getprojects_decorators;
    var _composerize_decorators;
    var _getcontainerjson_decorators;
    var _getContainerAvailable_decorators;
    var _getContainerdDashboard_decorators;
    var _getcontainer_decorators;
    var _getcontainers_decorators;
    var _containerstat_decorators;
    var _containerstop_decorators;
    var _containerlogs_decorators;
    var _containerstart_decorators;
    var _containerrestart_decorators;
    var _repositorysummary_decorators;
    var _repositoryquery_decorators;
    var _repositoryquerytags_decorators;
    var _checkForUpdate_decorators;
    var DockerController = _classThis = /** @class */ (function () {
        function DockerController_1(dockerService, composeService, dockerRepositoryService) {
            this.dockerService = (__runInitializers(this, _instanceExtraInitializers), dockerService);
            this.composeService = composeService;
            this.dockerRepositoryService = dockerRepositoryService;
        }
        /**
         * Retrieves the project tree and returns the results.
         * @returns Project tree
         */
        DockerController_1.prototype.getprojects = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.getProjectTree()];
                        case 1:
                            result = _a.sent();
                            delete result._s;
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DockerController_1.prototype.composerize = function (run, res) {
            var result = this.composeService.composerize(run.run);
            res.status(200).type("text/plain").send(result);
        };
        DockerController_1.prototype.getcontainerjson = function (id, res) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.dockerService
                        .getContainerCreateJson(id)
                        .then(function (cfg) {
                        res
                            .status(200)
                            .header("Content-Disposition", "attachment; filename=" + id + ".json.container")
                            .header("Content-Type", "text/plain")
                            .send(JSON.stringify(cfg, null, 4));
                    })
                        .catch(function (err) {
                        res.status(500).send(err);
                    });
                    return [2 /*return*/];
                });
            });
        };
        DockerController_1.prototype.getContainerAvailable = function (id, res) {
            this.dockerService
                .getContainerAvailable(id)
                .then(function (state) {
                res.status(state ? 200 : 503).send({ name: id, available: state });
            })
                .catch(function (err) {
                res.status(503).send(err);
            });
        };
        DockerController_1.prototype.getContainerdDashboard = function (id, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var maxcount;
                return __generator(this, function (_a) {
                    maxcount = 24;
                    if (limit) {
                        maxcount = parseInt(limit);
                    }
                    return [2 /*return*/, this.dockerService.getContainerDashboard(id, maxcount)];
                });
            });
        };
        /**
         * Retrieves the Container detail and returns the results.
         * @returns container detail
         */
        DockerController_1.prototype.getcontainer = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.dockerService
                                    .getContainer(id)
                                    .then(function (container) {
                                    _this.dockerService
                                        .checkForUpdateImage(container.Config.Image)
                                        .then(function (updateStatus) {
                                        container.UpdateStatus = updateStatus;
                                        resolve(container);
                                    })
                                        .catch(function () {
                                        resolve(container);
                                    });
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieves the Available Container listing and returns the results.
         * @returns list of availble containers
         */
        DockerController_1.prototype.getcontainers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.getContainers()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieves the Available Container stats and returns the results.
         * @returns list of availble containers
         */
        DockerController_1.prototype.containerstat = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.getAllContainerStats()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.containerstop = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.stop(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.containerlogs = function (id, res) {
            this.dockerService
                .logs(id)
                .then(function (data) {
                res.status(200).send(data);
            })
                .catch(function (err) {
                res.send(err);
            });
        };
        DockerController_1.prototype.containerstart = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.start(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.containerrestart = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.restart(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.repositorysummary = function (image) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerRepositoryService.repositorySummary(image)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.repositoryquery = function (image) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerRepositoryService.queryRepository(image)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.repositoryquerytags = function (image, os, arch) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerRepositoryService.queryRepositoryTags(image, os, arch)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        DockerController_1.prototype.checkForUpdate = function (image) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dockerService.checkForUpdateImage(image)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return DockerController_1;
    }());
    __setFunctionName(_classThis, "DockerController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getprojects_decorators = [(0, common_1.Get)("projects")];
        _composerize_decorators = [(0, common_1.Post)("composerize")];
        _getcontainerjson_decorators = [(0, common_1.Get)("container/:id/createoptions")];
        _getContainerAvailable_decorators = [(0, common_1.Get)("container/:id/available")];
        _getContainerdDashboard_decorators = [(0, common_1.Get)("dashboard/:id")];
        _getcontainer_decorators = [(0, common_1.Get)("container/:id")];
        _getcontainers_decorators = [(0, common_1.Get)("containers")];
        _containerstat_decorators = [(0, common_1.Get)("ps")];
        _containerstop_decorators = [(0, common_1.Get)("container/stop/:id")];
        _containerlogs_decorators = [(0, common_1.Get)("container/logs/:id")];
        _containerstart_decorators = [(0, common_1.Get)("container/start/:id")];
        _containerrestart_decorators = [(0, common_1.Get)("container/restart/:id")];
        _repositorysummary_decorators = [(0, common_1.Get)("repository/summary")];
        _repositoryquery_decorators = [(0, common_1.Get)("repository/query")];
        _repositoryquerytags_decorators = [(0, common_1.Get)("repository/tags")];
        _checkForUpdate_decorators = [(0, common_1.Get)("image/updatecheck")];
        __esDecorate(_classThis, null, _getprojects_decorators, { kind: "method", name: "getprojects", static: false, private: false, access: { has: function (obj) { return "getprojects" in obj; }, get: function (obj) { return obj.getprojects; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _composerize_decorators, { kind: "method", name: "composerize", static: false, private: false, access: { has: function (obj) { return "composerize" in obj; }, get: function (obj) { return obj.composerize; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getcontainerjson_decorators, { kind: "method", name: "getcontainerjson", static: false, private: false, access: { has: function (obj) { return "getcontainerjson" in obj; }, get: function (obj) { return obj.getcontainerjson; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getContainerAvailable_decorators, { kind: "method", name: "getContainerAvailable", static: false, private: false, access: { has: function (obj) { return "getContainerAvailable" in obj; }, get: function (obj) { return obj.getContainerAvailable; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getContainerdDashboard_decorators, { kind: "method", name: "getContainerdDashboard", static: false, private: false, access: { has: function (obj) { return "getContainerdDashboard" in obj; }, get: function (obj) { return obj.getContainerdDashboard; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getcontainer_decorators, { kind: "method", name: "getcontainer", static: false, private: false, access: { has: function (obj) { return "getcontainer" in obj; }, get: function (obj) { return obj.getcontainer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getcontainers_decorators, { kind: "method", name: "getcontainers", static: false, private: false, access: { has: function (obj) { return "getcontainers" in obj; }, get: function (obj) { return obj.getcontainers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _containerstat_decorators, { kind: "method", name: "containerstat", static: false, private: false, access: { has: function (obj) { return "containerstat" in obj; }, get: function (obj) { return obj.containerstat; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _containerstop_decorators, { kind: "method", name: "containerstop", static: false, private: false, access: { has: function (obj) { return "containerstop" in obj; }, get: function (obj) { return obj.containerstop; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _containerlogs_decorators, { kind: "method", name: "containerlogs", static: false, private: false, access: { has: function (obj) { return "containerlogs" in obj; }, get: function (obj) { return obj.containerlogs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _containerstart_decorators, { kind: "method", name: "containerstart", static: false, private: false, access: { has: function (obj) { return "containerstart" in obj; }, get: function (obj) { return obj.containerstart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _containerrestart_decorators, { kind: "method", name: "containerrestart", static: false, private: false, access: { has: function (obj) { return "containerrestart" in obj; }, get: function (obj) { return obj.containerrestart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _repositorysummary_decorators, { kind: "method", name: "repositorysummary", static: false, private: false, access: { has: function (obj) { return "repositorysummary" in obj; }, get: function (obj) { return obj.repositorysummary; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _repositoryquery_decorators, { kind: "method", name: "repositoryquery", static: false, private: false, access: { has: function (obj) { return "repositoryquery" in obj; }, get: function (obj) { return obj.repositoryquery; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _repositoryquerytags_decorators, { kind: "method", name: "repositoryquerytags", static: false, private: false, access: { has: function (obj) { return "repositoryquerytags" in obj; }, get: function (obj) { return obj.repositoryquerytags; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _checkForUpdate_decorators, { kind: "method", name: "checkForUpdate", static: false, private: false, access: { has: function (obj) { return "checkForUpdate" in obj; }, get: function (obj) { return obj.checkForUpdate; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DockerController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DockerController = _classThis;
}();
exports.DockerController = DockerController;

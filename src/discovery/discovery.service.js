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
exports.DiscoveryService = void 0;
var servicedefinition_1 = require("@customtypes/servicedefinition");
var stringbuilder_1 = require("@customtypes/stringbuilder");
var servicedefinition_dto_1 = require("@dto/servicedefinition.dto");
var githelper_1 = require("@helpers/githelper");
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var fs = require("fs");
var mongoose = require("mongoose");
var path = require("path");
var DiscoveryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DiscoveryService = _classThis = /** @class */ (function () {
        function DiscoveryService_1(configService, dockerDiscoveryService, fileDiscoveryService, serviceDefinitionModel, serviceDefModel) {
            this.configService = configService;
            this.dockerDiscoveryService = dockerDiscoveryService;
            this.fileDiscoveryService = fileDiscoveryService;
            this.serviceDefinitionModel = serviceDefinitionModel;
            this.serviceDefModel = serviceDefModel;
            this.logger = new common_1.Logger(DiscoveryService.name);
        }
        DiscoveryService_1.prototype.saveProjectDefinition = function (project, data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var workingDirMapped = _this.configService.get("docker.stackBasePath");
                            var workingDir = process.env.IN_DOCKER
                                ? "/docker/stacks/"
                                : workingDirMapped;
                            var filename = path.join(workingDir, project, "compose.yaml");
                            _this.logger.debug("writing", filename);
                            fs.writeFileSync(filename, data.compose.join("\n"));
                            filename = path.join(workingDir, project, "stack.env");
                            _this.logger.debug("writing", filename);
                            fs.writeFileSync(filename, data.env);
                            githelper_1.GitHelper.commit(path.join(workingDir, project), "Editor updates", {
                                name: "system",
                            })
                                .then(function (result) {
                                resolve(result);
                            })
                                .catch(function (err) {
                                _this.logger.error("Error in commit", err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.saveDefinition = function (containerName, data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var old = _this.serviceDefModel
                                .find({ containerName: containerName })
                                .exec()
                                .then(function (r) {
                                var dto = new servicedefinition_dto_1.ServiceDefinitionDto();
                                if (r && r.length > 0) {
                                    dto.ipaddress = r[0].ipaddress;
                                    dto.created = r[0].created;
                                    dto.archived = r[0].archived;
                                    dto.lastSeen = r[0].lastSeen;
                                    dto.lastPolled = r[0].lastPolled;
                                    dto.downtime = r[0].downtime;
                                    dto.project = r[0].project;
                                    dto.firstSeen = r[0].firstSeen;
                                    dto.available = r[0].available;
                                    dto.updated = new Date();
                                }
                                else {
                                    dto.created = new Date();
                                    dto.downtime = 0;
                                }
                                dto.edited = true;
                                dto.containerName = data.containerName.toLowerCase();
                                dto.hostname = data.hostname;
                                dto.name = data.name;
                                dto.project = data.project;
                                dto.proxy = data.proxy;
                                dto.public = data.public;
                                dto.project = data.project;
                                dto.firstSeen = data.firstSeen;
                                dto.iconSlug = data.iconSlug;
                                dto.iconCatalog = data.iconCatalog;
                                dto.archived = data.archived;
                                if (data.available != null) {
                                    if (data.avaiable == false && dto.available != data.available) {
                                        data.lastSeen = new Date();
                                    }
                                    dto.available = data.available;
                                }
                                _this.serviceDefinitionModel
                                    .findOneAndUpdate({ containerName: dto.containerName.toLowerCase() }, dto, { upsert: true })
                                    .then(function (result) {
                                    resolve(result);
                                })
                                    .catch(function (err) {
                                    _this.logger.error("Error saving definition", err);
                                    reject(err);
                                });
                            })
                                .catch(function (err) {
                                _this.logger.error("Error loading definition to save", err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.archiveDefinition = function (containerName, archived) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.serviceDefinitionModel
                                .findOneAndUpdate({ containerName: containerName.toLowerCase() }, { archived: archived }, { new: true })
                                .then(function (result) {
                                resolve(result);
                            })
                                .catch(function (err) {
                                _this.logger.error("Error archiving definition", err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.getDefinition = function (containerName) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var old = _this.serviceDefModel
                                .find({ containerName: containerName })
                                .lean()
                                .exec()
                                .then(function (r) {
                                resolve(r);
                            })
                                .catch(function (err) {
                                _this.logger.error("Error retrieving definition", err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.getAllDefinitions = function (excludeArchived) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var filter = {};
                            if (excludeArchived) {
                                filter = { archived: false };
                            }
                            var old = _this.serviceDefModel
                                .find(filter)
                                .lean()
                                .exec()
                                .then(function (r) {
                                resolve(r);
                            })
                                .catch(function (err) {
                                _this.logger.error("Error retrieving definition", err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.changeIcon = function (containerName, catalog, slug) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var old = _this.serviceDefModel
                                .findOneAndUpdate({ containerName: containerName }, {
                                $set: {
                                    edited: true,
                                    updated: new Date(),
                                    iconSlug: slug,
                                    iconCatalog: catalog,
                                },
                            })
                                .exec()
                                .then(function (r) {
                                resolve(r);
                            })
                                .catch(function (err) {
                                _this.logger.error("Error saving changeIcon", err);
                                reject(err);
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.storeInMongo = function (list) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var promises = [];
                            var changes = [];
                            var old = _this.serviceDefModel
                                .find()
                                .exec()
                                .then(function (icons) {
                                list.services.forEach(function (service) {
                                    var _a;
                                    var dto = new servicedefinition_dto_1.ServiceDefinitionDto();
                                    dto.name = service.name;
                                    dto.containerName = service.containerName.toLowerCase();
                                    dto.hostname = service.hostname;
                                    dto.ipaddress = service.ipaddress;
                                    dto.proxy = service.proxy;
                                    dto.archived = service.archived;
                                    dto.iconCatalog = service.iconCatalog;
                                    dto.iconSlug = service.iconSlug;
                                    dto.public = service.public;
                                    dto.project = service.project;
                                    dto.firstSeen = service.firstSeen;
                                    dto.available = service.available;
                                    dto.edited = false;
                                    dto.downtime = 0;
                                    if (service.available) {
                                        if (!dto.firstSeen) {
                                            dto.firstSeen = new Date();
                                        }
                                        dto.lastSeen = new Date();
                                    }
                                    dto.created = new Date();
                                    var ico = icons.find(function (f) {
                                        return (f.containerName.toLowerCase() == dto.containerName.toLowerCase());
                                    });
                                    if (ico) {
                                        dto.downtime = (_a = ico.downtime) !== null && _a !== void 0 ? _a : 0;
                                        dto.lastPolled = ico.lastPolled;
                                        dto.name = ico.name;
                                        dto.public = ico.public;
                                        dto.edited = ico.edited;
                                        dto.updated = new Date();
                                        dto.created = ico.created;
                                        dto.iconSlug = ico.iconSlug;
                                        dto.iconCatalog = ico.iconCatalog;
                                        dto.archived = ico.archived;
                                        dto.firstSeen = ico.firstSeen;
                                        if (!service.available) {
                                            if (dto.lastPolled) {
                                                dto.downtime +=
                                                    (new Date().getTime() - dto.lastPolled.getTime()) / 1000;
                                            }
                                        }
                                        else {
                                            if (!dto.firstSeen) {
                                                dto.firstSeen = new Date();
                                            }
                                        }
                                        dto.lastPolled = new Date();
                                        promises.push(_this.serviceDefinitionModel.findOneAndUpdate({ containerName: dto.containerName.toLowerCase() }, dto, { upsert: true }));
                                    }
                                    else {
                                        dto.created = new Date();
                                        dto.lastPolled = new Date();
                                        promises.push(_this.serviceDefinitionModel.findOneAndUpdate({ containerName: dto.containerName.toLowerCase() }, dto, { upsert: true }));
                                    }
                                });
                                mongoose.set("bufferCommands", false);
                                Promise.allSettled(promises)
                                    .then(function (result) {
                                    resolve(true);
                                })
                                    .catch(function (err) {
                                    _this.logger.error("Error saving ServiceDefinition", err);
                                    reject(err);
                                });
                            });
                        })];
                });
            });
        };
        DiscoveryService_1.prototype.find = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var client = _this.serviceDefModel
                    .find({ name: id })
                    .exec()
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (err) {
                    _this.logger.error("Error performing Service definition find", err);
                    reject(err);
                });
            });
        };
        DiscoveryService_1.prototype.updateDNS = function (services) {
            var _this = this;
            var _a;
            var basedir = (_a = process.env.DNS_CFG) !== null && _a !== void 0 ? _a : "";
            var sb = new stringbuilder_1.StringBuilder();
            var changed = false;
            if (basedir == "") {
                return;
            }
            if (!this.configService.get("webProxy.autoUpdate")) {
                return;
            }
            var filename = path.join(basedir, "hosts.conf");
            services.services
                .sort(function (a, b) {
                return a.containerName
                    .toLowerCase()
                    .localeCompare(b.containerName.toLowerCase());
            })
                .forEach(function (sd) {
                var _a, _b;
                var valid = ((_a = sd.public) !== null && _a !== void 0 ? _a : "") != "" && ((_b = sd.proxy) !== null && _b !== void 0 ? _b : "") != "";
                if (valid) {
                    var publicurl = new URL(sd.public);
                    var proxy = new URL(sd.proxy);
                    sb.appendFormat("host-record={1},{0}", _this.configService.get("webProxy.publicIpAddress"), publicurl.hostname);
                }
            });
            if (!this.compareHash(filename + ".md5", sb.toStringDelimited("\n"))) {
                fs.writeFileSync(filename, sb.toStringDelimited("\n"));
                changed = true;
            }
            if (changed) {
                // reload config
            }
        };
        DiscoveryService_1.prototype.compareHash = function (filename, newValue) {
            var newHash = crypto.createHash("md5").update(newValue).digest("hex");
            if (!fs.existsSync(filename)) {
                fs.writeFileSync(filename, newHash);
                return false;
            }
            var currentHash = fs.readFileSync(filename, "utf8");
            if (currentHash != newHash) {
                fs.writeFileSync(filename, newHash);
                return false;
            }
            return true;
        };
        DiscoveryService_1.prototype.updateCaddy = function (services) {
            var _this = this;
            var _a;
            var baseDir = (_a = process.env.CADDY_CFG) !== null && _a !== void 0 ? _a : "";
            var changed = false;
            if (baseDir == "") {
                return;
            }
            if (!this.configService.get("webProxy.autoUpdate")) {
                return;
            }
            services.services
                .sort(function (a, b) {
                return a.containerName
                    .toLowerCase()
                    .localeCompare(b.containerName.toLowerCase());
            })
                .forEach(function (sd) {
                var _a, _b;
                var valid = ((_a = sd.public) !== null && _a !== void 0 ? _a : "") != "" && ((_b = sd.proxy) !== null && _b !== void 0 ? _b : "") != "";
                if (valid) {
                    var sb = new stringbuilder_1.StringBuilder();
                    var publicurl = new URL(sd.public);
                    var proxy = new URL(sd.proxy);
                    var filename = path.join(baseDir, publicurl.hostname + ".conf");
                    var port = "";
                    if (publicurl.protocol == "https:") {
                        port = ":443";
                    }
                    sb.appendLine(publicurl.host + port + " {");
                    sb.appendLine("        reverse_proxy " + proxy.href.slice(0, -1));
                    sb.appendLine("        import /etc/caddy/includes/cors.conf");
                    sb.appendLine("}");
                    if (!_this.compareHash(filename + ".md5", sb.toString())) {
                        fs.writeFileSync(filename, sb.toString());
                        changed = true;
                    }
                }
            });
            if (changed) {
                //reload config
            }
        };
        DiscoveryService_1.prototype.scan = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = new servicedefinition_1.ServiceDefinitionList();
                var promises = [];
                result.created = new Date();
                promises.push(_this.dockerDiscoveryService.scan());
                promises.push(_this.fileDiscoveryService.scan());
                Promise.allSettled(promises)
                    .then(function (results) {
                    results.forEach(function (r) {
                        if (r.status == "fulfilled") {
                            var services = r.value.services;
                            result.services = result.services.concat(services);
                        }
                    });
                    result.services.sort(function (a, b) {
                        if (a.name) {
                            return a.name.localeCompare(b.name);
                        }
                        return 0;
                    });
                    _this.storeInMongo(result)
                        .then(function (r) {
                        _this.updateCaddy(result);
                        _this.updateDNS(result);
                        resolve(result);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error saving scan data", err);
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    _this.logger.error("Error running scan", err);
                    reject(err);
                });
            });
        };
        return DiscoveryService_1;
    }());
    __setFunctionName(_classThis, "DiscoveryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DiscoveryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DiscoveryService = _classThis;
}();
exports.DiscoveryService = DiscoveryService;

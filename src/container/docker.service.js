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
exports.DockerService = void 0;
var containercreateoptionshelper_1 = require("@helpers/containercreateoptionshelper");
var common_1 = require("@nestjs/common");
var Dockerode = require("dockerode");
var fancy_ansi_1 = require("fancy-ansi");
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * Docker connection and management
 */
var DockerService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DockerService = _classThis = /** @class */ (function () {
        function DockerService_1(dockerRepositoryService, configService, serviceDefinitionService, containerStatsModel, serviceDefModel) {
            this.dockerRepositoryService = dockerRepositoryService;
            this.configService = configService;
            this.serviceDefinitionService = serviceDefinitionService;
            this.containerStatsModel = containerStatsModel;
            this.serviceDefModel = serviceDefModel;
            this.logger = new common_1.Logger(DockerService.name);
        }
        DockerService_1.prototype.getColorLevel = function (sd) {
            var value = this.calculateUptimePercent(sd) * 100;
            var classname = "bg-danger.bg-gradient text-light";
            if (value >= 5) {
                classname = "text-danger";
            }
            if (value >= 25) {
                classname = "text-danger-emphasis";
            }
            if (value >= 45) {
                classname = "text-warning";
            }
            if (value >= 65) {
                classname = "text-success-emphasis";
            }
            if (value >= 95) {
                classname = "text-success";
            }
            return classname;
        };
        DockerService_1.prototype.isContainerAvailable = function (sd) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.getContainer(sd.containerName)
                    .then(function (ctr) {
                    sd.available = !["exited", "dead", "paused"].includes(ctr.State.Status.toLowerCase());
                    resolve(sd);
                })
                    .catch(function (err) {
                    _this.logger.error("Error checking container state", err);
                    sd.available = false;
                    resolve(sd);
                });
            });
        };
        DockerService_1.prototype.getContainerAvailable = function (name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.getContainer(name)
                    .then(function (ctr) {
                    resolve(!["exited", "dead", "paused"].includes(ctr.State.Status.toLowerCase()));
                })
                    .catch(function (err) {
                    _this.logger.error("Error checking container state", err);
                    reject(err);
                });
            });
        };
        DockerService_1.prototype.getContainerDashboard = function (id, limit) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                return _this.containerStatsModel
                    .find({ name: id })
                    .sort("-created")
                    .limit(limit)
                    .exec()
                    .then(function (results) {
                    var output = {
                        periods: [],
                        cpuPercent: [],
                        memoryUsage: [],
                        memoryFreePercent: [],
                        memoryLimit: [],
                    };
                    output.periods = results.map(function (t) {
                        return t.created;
                    });
                    output.cpuPercent = results.map(function (t) {
                        return t.cpuPercent;
                    });
                    output.memoryUsage = results.map(function (t) {
                        return t.memoryUsage;
                    });
                    output.memoryFreePercent = results.map(function (t) {
                        return t.memoryFreePercent / 100;
                    });
                    output.memoryLimit = results.map(function (t) {
                        return t.memoryLimit;
                    });
                    resolve(output);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        /**
         * Creates an a connnection to a server running Docker
         */
        DockerService_1.prototype.createDocker = function () {
            var connection = {};
            if (this.configService.get("docker.connection.socketPath") != "") {
                connection.socketPath = this.configService.get("docker.connection.socketPath");
            }
            if (this.configService.get("docker.connection.hostUri") != "") {
                var host = new URL(this.configService.get("docker.connection.hostUri"));
                connection.protocol = host.protocol;
                connection.host = host.hostname;
                connection.port = host.port == "" ? 2375 : parseInt(host.port);
            }
            if (this.configService.get("docker.connection.ca") != "") {
                if (fs_1.default.existsSync(this.configService.get("docker.connection.ca"))) {
                    connection.ca = fs_1.default.readFileSync(this.configService.get("docker.connection.ca"));
                }
            }
            if (this.configService.get("docker.connection.cert") != "") {
                if (fs_1.default.existsSync(this.configService.get("docker.connection.cert"))) {
                    connection.cert = fs_1.default.readFileSync(this.configService.get("docker.connection.cert"));
                }
            }
            if (this.configService.get("docker.connection.key") != "") {
                if (fs_1.default.existsSync(this.configService.get("docker.connection.key"))) {
                    connection.key = fs_1.default.readFileSync(this.configService.get("docker.connection.key"));
                }
            }
            return new Dockerode(connection);
        };
        DockerService_1.prototype.determineProjectPath = function (workingFolder, config) {
            if (workingFolder == "" || config == "") {
                return "";
            }
            var folder = workingFolder.split(path_1.default.sep).pop();
            var projectPath = path_1.default.join(this.configService.get("docker.stackBasePath"), folder);
            if (fs_1.default.existsSync(path_1.default.join(projectPath, config))) {
                return projectPath;
            }
            return "";
        };
        DockerService_1.prototype.formatImage = function (image) {
            var img = image;
            if (img.split("/").length < 2) {
                img = "library/" + img;
            }
            if (img.split("/").length < 3) {
                return "docker.io/" + img;
            }
            return image;
        };
        DockerService_1.prototype.formatDate = function (dte) {
            return dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
        };
        DockerService_1.prototype.daydiff = function (a, b) {
            var diff = a.getTime() - b.getTime();
            var diffDays = Math.floor(diff / 86400000);
            return diffDays;
        };
        /**
         * Gets the details of a given  container
         */
        DockerService_1.prototype.getContainer = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.inspect(function (err, data) {
                    var _a, _b, _c, _d, _e;
                    if (err) {
                        reject(err);
                    }
                    else {
                        data.Name = data.Name.substring(1);
                        data.Config.Image = _this.formatImage(data.Config.Image);
                        data.available = !["exited", "dead", "paused"].includes(data.State.Status.toLowerCase());
                        if (data.Config.Labels["com.guidcruncher.discovrninja.icon_slug"]) {
                            data.icon_slug =
                                data.Config.Labels["com.guidcruncher.discovrninja.icon_slug"];
                        }
                        data.publicUrl = data.Config.Labels["homepage.href"];
                        if (data.Config.Labels["homepage.targetaddress"]) {
                            data.publicUrl = data.Config.Labels["homepage.targetaddress"];
                        }
                        if (data.Config.Labels["com.guidcruncher.discovrninja.public"]) {
                            data.publicUrl =
                                data.Config.Labels["com.guidcruncher.discovrninja.public"];
                        }
                        data.editor = {};
                        var workdir = (_a = data.Config.Labels["com.docker.compose.project.working_dir"]) !== null && _a !== void 0 ? _a : "";
                        data.editor.config = ((_b = data.Config.Labels["com.docker.compose.project.config_files"]) !== null && _b !== void 0 ? _b : "").replace(workdir, ".");
                        data.editor.project =
                            (_c = data.Config.Labels["com.docker.compose.project"]) !== null && _c !== void 0 ? _c : "";
                        data.editor.environment = ((_d = data.Config.Labels["com.docker.compose.project.environment_file"]) !== null && _d !== void 0 ? _d : "").replace(workdir, ".");
                        data.editor.workingFolder =
                            (_e = data.Config.Labels["com.docker.compose.project.working_dir"]) !== null && _e !== void 0 ? _e : "";
                        data.editor.editable = false;
                        data.editor.projectPath = _this.determineProjectPath(data.editor.workingFolder, data.editor.config);
                        data.editor.editable = data.editor.projectPath != "";
                        _this.serviceDefinitionService
                            .get(data.Name)
                            .then(function (sd) {
                            data.icon_slug = sd[0].iconSlug;
                            data.icon_catalog = sd[0].iconCatalog;
                            resolve(data);
                        })
                            .catch(function (err) {
                            resolve(data);
                        });
                    }
                });
            });
        };
        DockerService_1.prototype.getContainerCreateJson = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.inspect(function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        var response = containercreateoptionshelper_1.ContainerCreateOptionsHelper.fromInspectInfo(data);
                        resolve(response);
                    }
                });
            });
        };
        DockerService_1.prototype.checkForUpdateImage = function (img) {
            var _this = this;
            var imgref = this.formatImage(img);
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var updateStatus = {
                    image: imgref,
                    imageCreated: "",
                    latestBuildDate: "",
                    updateDue: false,
                    delta: 0,
                    imageDigest: "",
                    repoDigest: "",
                };
                docker.getImage(imgref).inspect(function (err, image) {
                    if (err) {
                        _this.logger.error("Error checking for updates", err);
                        reject(err);
                    }
                    else {
                        if (image.RepoDigests) {
                            if (image.RepoDigests.length > 0) {
                                updateStatus.imageDigest = image.RepoDigests[0].split("@")[1];
                            }
                        }
                        updateStatus.imageCreated = _this.formatDate(new Date(Date.parse(image.Created)));
                        _this.dockerRepositoryService
                            .queryRepositoryTags(_this.formatImage(imgref), image.Os, image.Architecture)
                            .then(function (repo) {
                            updateStatus.repoDigest = repo.digest;
                            updateStatus.latestBuildDate = _this.formatDate(new Date(Date.parse(repo.last_updated)));
                            updateStatus.delta = _this.daydiff(new Date(updateStatus.latestBuildDate), new Date(updateStatus.imageCreated));
                            updateStatus.updateDue =
                                updateStatus.imageDigest != updateStatus.repoDigest;
                            resolve(updateStatus);
                        })
                            .catch(function (err) {
                            _this.logger.error("Error checking for update", err);
                            reject(err);
                        });
                    }
                });
            });
        };
        DockerService_1.prototype.stop = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.stop(function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        };
        DockerService_1.prototype.logs = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.logs({ stdout: true, stderr: true, tail: 100 }, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        var fancyAnsi = new fancy_ansi_1.FancyAnsi();
                        var text = data.toString("ascii");
                        var result = fancyAnsi.toHtml(text);
                        resolve(result.replace(/(?:\r\n|\r|\n)/g, "<br>"));
                    }
                });
            });
        };
        DockerService_1.prototype.start = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.start(function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        };
        DockerService_1.prototype.restart = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.stop(function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        container.start(function (err, data) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(data);
                            }
                        });
                    }
                });
            });
        };
        /**
         * Gets the statistics for a given container
         */
        DockerService_1.prototype.getContainerStats = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                var container = docker.getContainer(id);
                container.stats({ stream: false }, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        };
        /**
         * Returns a list of ruunning containers
         */
        DockerService_1.prototype.getContainers = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                docker.listContainers(function (err, containers) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(containers);
                    }
                });
            });
        };
        /**
         * Returns a list of docker compose projects and their associated containers
         */
        DockerService_1.prototype.getProjectTree = function () {
            var _this = this;
            var projects = {};
            return new Promise(function (resolve, reject) {
                var docker = _this.createDocker();
                docker.listContainers({ all: true, size: false }, function (err, containers) {
                    var promises = [];
                    containers.forEach(function (container) {
                        promises.push(_this.getContainer(container.Id));
                    });
                    Promise.allSettled(promises)
                        .then(function (results) {
                        results.forEach(function (promise) {
                            var _a, _b, _c, _d;
                            if (promise.status == "fulfilled") {
                                var container = promise.value;
                                var project = container.Config.Labels["com.docker.compose.project"];
                                if (typeof projects[project] === "undefined") {
                                    var workdir = (_a = container.Config.Labels["com.docker.compose.project.working_dir"]) !== null && _a !== void 0 ? _a : "";
                                    projects[project] = {
                                        config: ((_b = container.Config.Labels["com.docker.compose.project.config_files"]) !== null && _b !== void 0 ? _b : "").replace(workdir, "."),
                                        environment: ((_c = container.Config.Labels["com.docker.compose.project.environment_file"]) !== null && _c !== void 0 ? _c : "").replace(workdir, "."),
                                        workingFolder: (_d = container.Config.Labels["com.docker.compose.project.working_dir"]) !== null && _d !== void 0 ? _d : "",
                                        containers: [],
                                    };
                                    var projectPath = _this.determineProjectPath(projects[project].workingFolder, projects[project].config);
                                    projects[project].editable = projectPath != "";
                                    if (projects[project].editable) {
                                        var folder = projectPath.split(path_1.default.sep).pop();
                                        projects[project].projectPath = folder;
                                    }
                                }
                                projects[project].containers.push({
                                    containerName: container.Name,
                                    hostname: container.Config.Hostname,
                                    projectName: project,
                                    editable: projects[project].editable,
                                });
                            }
                        });
                        var keys = Object.keys(projects);
                        var sortedProjects = {};
                        keys.sort();
                        for (var i = 0; i < keys.length; i++) {
                            var k = keys[i];
                            sortedProjects[k] = projects[k];
                        }
                        resolve(sortedProjects);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            });
        };
        DockerService_1.prototype.calculateCpuPercent = function (metric) {
            var cpuDelta = metric.cpu_stats.cpu_usage.total_usage -
                metric.precpu_stats.cpu_usage.total_usage;
            var systemDelta = metric.cpu_stats.system_cpu_usage - metric.precpu_stats.system_cpu_usage;
            var onlineCPUs = metric.cpu_stats.online_cpus;
            var cpuPercent = 0.0;
            if (onlineCPUs == 0.0) {
                onlineCPUs = metric.cpu_stats.cpu_usage.percpu_usage;
            }
            if (systemDelta > 0.0 && cpuDelta > 0.0) {
                cpuPercent = (cpuDelta / systemDelta) * onlineCPUs;
            }
            return cpuPercent;
        };
        DockerService_1.prototype.formatBytes = function (bytes, decimals) {
            if (decimals === void 0) { decimals = 2; }
            if (!+bytes)
                return "0 Bytes";
            var k = 1024;
            var dm = decimals < 0 ? 0 : decimals;
            var sizes = [
                "Bytes",
                "KiB",
                "MiB",
                "GiB",
                "TiB",
                "PiB",
                "EiB",
                "ZiB",
                "YiB",
            ];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
        };
        DockerService_1.prototype.getDefinition = function (containerName) {
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
        DockerService_1.prototype.calculateUptime = function (sd) {
            var _a;
            if (!sd.firstSeen) {
                return 0;
            }
            var totalTime = (new Date().getTime() - new Date(sd.firstSeen).getTime()) / 1000;
            return totalTime - ((_a = sd.downtime) !== null && _a !== void 0 ? _a : 0);
        };
        DockerService_1.prototype.calculateUptimePercent = function (sd) {
            var _a;
            if (!sd.firstSeen) {
                return 0;
            }
            var totalTime = (new Date().getTime() - new Date(sd.firstSeen).getTime()) / 1000;
            var ratio = 100 / (totalTime == 0 ? 1 : totalTime);
            return ((totalTime - ((_a = sd.downtime) !== null && _a !== void 0 ? _a : 0)) * ratio) / 100;
        };
        DockerService_1.prototype.getStateCss = function (state) {
            switch (state) {
                case "created":
                    return "dw-state text-warning fa-regular fa-square-plus";
                case "running":
                    return "dw-state text-success fa-solid fa-person-running";
                case "restarting":
                    return "dw-state text-warning fa-solid fa-power-off";
                case "exited":
                    return "dw-state text-danger fa-solid fa-arrow-right-from-bracket";
                case "paused":
                    return "dw-state text-info fa-solid fa-pause";
                case "dead":
                    return "dw-state text-danger fa-solid fa-face-dizzy";
                case "configured":
                    return "dw-state text-info fa-solid fa-gears";
            }
        };
        DockerService_1.prototype.calculateUsage = function (record, container) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.getContainerStats(container.Id)
                    .then(function (detail) {
                    record.stats.cpuPercent = _this.calculateCpuPercent(detail);
                    record.cpuAlert = record.stats.cpuPercent > 1;
                    record.stats.cpuPercentStr = Intl.NumberFormat("default", {
                        style: "percent",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(record.stats.cpuPercent);
                    record.stats.memoryUsageStr = _this.formatBytes(detail.memory_stats.usage);
                    var memoryPercent = (100 / detail.memory_stats.limit) *
                        (detail.memory_stats.limit - detail.memory_stats.usage);
                    record.stats.memoryFreePercent = memoryPercent;
                    record.memoryAlert = memoryPercent < 0.1;
                    record.stats.memoryFreePercentStr = Intl.NumberFormat("default", {
                        style: "percent",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(memoryPercent / 100);
                    record.stats.memoryUsage = detail.memory_stats.usage;
                    record.stats.memoryLimitStr = _this.formatBytes(detail.memory_stats.limit);
                    record.stats.memoryLimit = detail.memory_stats.limit;
                    resolve(record);
                })
                    .catch(function () {
                    resolve(record);
                });
            });
        };
        /**
         * Gets statistics for all running containers
         */
        DockerService_1.prototype.getAllContainerStats = function () {
            var _this = this;
            var data = [];
            return new Promise(function (resolve, reject) {
                var promises = [];
                var definitions = [];
                var containers = [];
                var docker = _this.createDocker();
                promises.push(new Promise(function (resolve, reject) {
                    _this.serviceDefinitionService
                        .all(true)
                        .then(function (definitions) {
                        resolve({ source: "definitions", result: definitions });
                    })
                        .catch(function (err) {
                        _this.logger.error("Error in getcontainerstats definitions", err);
                        reject(err);
                    });
                }));
                promises.push(new Promise(function (resolve, reject) {
                    docker.listContainers({ all: true, size: false }, function (err, containers) {
                        if (err) {
                            _this.logger.error("Error in getcontainerststs listcontainers", err);
                            reject(err);
                        }
                        else {
                            resolve({ source: "containers", result: containers });
                        }
                    });
                }));
                Promise.allSettled(promises).then(function (results) {
                    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                        var result = results_1[_i];
                        if (result.status == "fulfilled") {
                            switch (result.value.source) {
                                case "definitions":
                                    definitions = result.value.result;
                                    break;
                                case "containers":
                                    containers = result.value.result;
                                    break;
                            }
                        }
                    }
                    promises = [];
                    var _loop_1 = function (container) {
                        var record = _this.createRecordFromContainer(container);
                        var idx = definitions.findIndex(function (s) {
                            return s.containerName == record.name;
                        });
                        if (idx >= 0) {
                            var sd = definitions[idx];
                            record.publicUrl = sd.public;
                            record.uptimeSeconds = _this.calculateUptime(sd);
                            record.uptimeSecondsPercent = _this.calculateUptimePercent(sd).toLocaleString(undefined, {
                                style: "percent",
                                minimumFractionDigits: 2,
                            });
                            record.colorLevel = _this.getColorLevel(sd);
                        }
                        promises.push(new Promise(function (resolve, reject) {
                            _this.getContainer(container.Id)
                                .then(function (detail) {
                                var _a;
                                record.project =
                                    (_a = detail.Config.Labels["com.docker.compose.project"]) !== null && _a !== void 0 ? _a : "";
                                record.hostName = detail.Config.Hostname;
                                if (record.publicUrl == "") {
                                    record.publicUrl = detail.publicUrl;
                                }
                                _this.calculateUsage(record, container)
                                    .then(function (result) {
                                    resolve(result);
                                })
                                    .catch(function (err) {
                                    resolve(record);
                                });
                            })
                                .catch(function (err) {
                                _this.calculateUsage(record, container)
                                    .then(function (result) {
                                    resolve(result);
                                })
                                    .catch(function (err) {
                                    resolve(record);
                                });
                            });
                        }));
                    };
                    for (var _a = 0, containers_1 = containers; _a < containers_1.length; _a++) {
                        var container = containers_1[_a];
                        _loop_1(container);
                    }
                    Promise.allSettled(promises).then(function (results) {
                        for (var _i = 0, results_2 = results; _i < results_2.length; _i++) {
                            var result = results_2[_i];
                            if (result.status == "fulfilled") {
                                data.push(result.value);
                            }
                        }
                        var _loop_2 = function (definition) {
                            var i = data.findIndex(function (d) {
                                return d.name == definition.containerName;
                            });
                            if (i < 0) {
                                var record = _this.createRecordFromDefinition(definition);
                                record.status = "configured";
                                record.configured = true;
                                record.state = "configured";
                                record.stateCss = _this.getStateCss(record.state);
                                data.push(record);
                            }
                            resolve(data.sort(function (a, b) {
                                return a.name.localeCompare(b.name);
                            }));
                        };
                        for (var _a = 0, definitions_1 = definitions; _a < definitions_1.length; _a++) {
                            var definition = definitions_1[_a];
                            _loop_2(definition);
                        }
                    });
                });
            });
        };
        DockerService_1.prototype.createRecordFromContainer = function (c) {
            var r = this.createRecord(c.Id, c.Names[0].substring(1));
            r.hostName = "";
            r.image = this.formatImage(c.Image);
            r.cmd = c.Command;
            r.created = new Date(c.Created * 1000);
            r.state = c.State;
            r.stateCss = this.getStateCss(c.State);
            r.status = c.Status;
            r.ports = c.Ports;
            if (r.status.toLowerCase().includes("exited")) {
                r.shutdown = true;
            }
            if (r.status.toLowerCase().includes("unhealthy")) {
                r.healthy = false;
            }
            return r;
        };
        DockerService_1.prototype.createRecordFromDefinition = function (c) {
            var r = this.createRecord("", c.containerName);
            r.shutdown = true;
            r.healthy = false;
            r.publicUrl = c.public;
            r.uptimeSecondsPercent = "-";
            r.colorLevel = this.getColorLevel(c);
            r.project = c.project;
            r.firstSeen = c.firstSeen;
            return r;
        };
        DockerService_1.prototype.createRecord = function (id, name) {
            var record = {
                id: id,
                name: name,
                hostName: "",
                image: "",
                cmd: "",
                created: new Date(),
                firstSeen: null,
                state: "",
                stateCss: "",
                status: "",
                shutdown: false,
                healthy: true,
                cpuAlert: false,
                memoryAlert: false,
                configured: false,
                ports: [],
                publicUrl: "",
                project: "",
                uptimeSeconds: 0,
                uptimeSecondsPercent: "",
                colorLevel: "text-body",
                stats: {
                    cpuPercent: 0.0,
                    cpuPercentStr: "",
                    memoryUsageStr: "",
                    memoryUsage: 0,
                    memoryFreePercentStr: "",
                    memoryFreePercent: 0,
                    memoryLimitStr: "",
                    memoryLimit: 0,
                },
            };
            return record;
        };
        return DockerService_1;
    }());
    __setFunctionName(_classThis, "DockerService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DockerService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DockerService = _classThis;
}();
exports.DockerService = DockerService;

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
exports.PortainerService = void 0;
var stringbuilder_1 = require("@customtypes/stringbuilder");
var fluenthttpclient_1 = require("@helpers/fluenthttpclient");
var githelper_1 = require("@helpers/githelper");
var common_1 = require("@nestjs/common");
var composerize_1 = require("composerize");
var crypto = require("crypto");
var compose = require("docker-compose");
var fs = require("fs");
var path = require("path");
var showdown = require("showdown");
var portainer_helper_1 = require("./portainer.helper");
var portainer_template_types_1 = require("./portainer-template.types");
var PortainerService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PortainerService = _classThis = /** @class */ (function () {
        function PortainerService_1(configService, serviceDefinitionService, iconCDNService, templateModel, containerCatalogModel) {
            this.configService = configService;
            this.serviceDefinitionService = serviceDefinitionService;
            this.iconCDNService = iconCDNService;
            this.templateModel = templateModel;
            this.containerCatalogModel = containerCatalogModel;
            this.logger = new common_1.Logger(PortainerService.name);
        }
        PortainerService_1.prototype.getCatalogs = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = [];
                var data = _this.containerCatalogModel
                    .find()
                    .lean()
                    .exec()
                    .then(function (r) {
                    result = r;
                    resolve(result);
                })
                    .catch(function (err) {
                    _this.logger.error("Error in getcatalogs", err);
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.readCatalog = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.containerCatalogModel
                    .findOne({ id: id })
                    .lean()
                    .exec()
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (err) {
                    _this.logger.error("Error reading catalog", err);
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.writeCatalog = function (catalog) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a;
                if (((_a = catalog.id) !== null && _a !== void 0 ? _a : "") == "") {
                    catalog.id = crypto.randomBytes(16).toString("hex");
                }
                _this.containerCatalogModel
                    .findOneAndUpdate({ id: catalog.id }, catalog, { upsert: true })
                    .then(function (result) {
                    resolve(catalog);
                })
                    .catch(function (err) {
                    _this.logger.error("Error saving catalog", err);
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.fetchTemplate = function (id, name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.templateModel
                    .findOne({ name: { $eq: name }, catalogId: { $eq: id } })
                    .lean()
                    .exec()
                    .then(function (r) {
                    var converter = new showdown.Converter();
                    r.noteMD = r.note;
                    r.descriptionMD = r.description;
                    r.description = converter.makeHtml(r.description);
                    r.note = converter.makeHtml(r.note);
                    resolve(r);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.fetchCatalog = function (id, category) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var filter = { catalogId: { $eq: id } };
                if (category) {
                    filter = { catalogId: { $eq: id }, categories: category };
                }
                _this.templateModel
                    .find(filter)
                    .lean()
                    .sort({ title: 1 })
                    .exec()
                    .then(function (res) {
                    var cat = new portainer_template_types_1.TemplateCatalog();
                    var converter = new showdown.Converter();
                    res.forEach(function (r) {
                        r.noteMD = r.note;
                        r.descriptionMD = r.description;
                        r.note = converter.makeHtml(r.note);
                        r.description = converter.makeHtml(r.description);
                        cat.templates.push(r);
                        if (r.categories) {
                            r.categories.forEach(function (c) {
                                if (cat.categories[c]) {
                                    cat.categories[c] += 1;
                                }
                                else {
                                    cat.categories[c] = 1;
                                }
                            });
                        }
                    });
                    resolve(cat);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.importCatalog = function (c) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var client = fluenthttpclient_1.FluentHttpClient.Get(c.url)
                    .Execute()
                    .then(function (response) {
                    var catalog = portainer_helper_1.PortainerHelper.Parse(response.value);
                    _this.templateModel
                        .deleteMany({ catalogId: { $eq: c.id } })
                        .then(function () {
                        catalog.templates.forEach(function (t) {
                            t.catalogId = c.id;
                        });
                        _this.templateModel.insertMany(catalog.templates).then(function (r) {
                            resolve(catalog.templates);
                        });
                    });
                })
                    .catch(function (err) {
                    _this.logger.error("Error downloading template feed", err);
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.createStack = function (project, workingDir, workingDirMapped, cfg) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var dockerRun = _this.toDockerRun(cfg);
                var baseDir = path.join(workingDir, project);
                var sb = new stringbuilder_1.StringBuilder();
                var workingDirMappedProj = path.join(workingDirMapped, project);
                if (!fs.existsSync(baseDir)) {
                    fs.mkdirSync(baseDir, { recursive: true });
                }
                var filename = path.join(baseDir, "run.sh");
                fs.writeFileSync(filename, "#!/bin/sh\n\n" + dockerRun.cmd);
                filename = path.join(baseDir, "stack.env");
                fs.writeFileSync(filename, dockerRun.environment);
                filename = path.join(baseDir, "compose.yaml");
                var compose = (0, composerize_1.default)(dockerRun.cmd, null, "latest", 2);
                compose = compose.replace("name: <your project name>", "name: " + project);
                fs.writeFileSync(filename, compose);
                sb.append("#!/bin/sh\n");
                sb.appendFormat('docker compose -p "{0}" \\', project);
                sb.appendFormat("    --env-file {0}/stack.env \\", workingDirMappedProj);
                sb.appendFormat("    -f {0}/compose.yaml \\", workingDirMappedProj);
                sb.appendFormat("    --project-directory {0} \\", workingDirMappedProj);
                sb.append("    $@");
                filename = path.join(baseDir, "compose.sh");
                fs.writeFileSync(filename, sb.toStringDelimited("\n"));
                sb.clear();
                sb.appendFormat("# {0}", cfg.template.title);
                sb.append("");
                sb.append(cfg.template.descriptionMD);
                sb.append("");
                sb.append(cfg.template.noteMD);
                filename = path.join(baseDir, "README.md");
                fs.writeFileSync(filename, sb.toStringDelimited("\n"));
                githelper_1.GitHelper.createGitRepo(baseDir, { name: "system" })
                    .then(function (result) {
                    _this.iconCDNService
                        .query(cfg.template.name, true)
                        .then(function (icon) {
                        var def = {
                            name: cfg.template.name,
                            containerName: cfg.template.name,
                            hostname: cfg.template.name,
                            proxy: dockerRun.serviceUrl,
                            public: dockerRun.publicUrl,
                            iconSlug: cfg.template.name,
                            iconCatalog: "",
                            archived: false,
                            available: false,
                        };
                        if (icon) {
                            def.iconSlug = icon[0].slug;
                            def.iconCatalog = icon[0].catalog;
                        }
                        _this.serviceDefinitionService
                            .save(cfg.template.name, def)
                            .then(function (r) {
                            resolve(dockerRun);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.launchStack = function (project, workingDir, workingDirMapped, cfg) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                compose
                    .upAll({ cwd: workingDir, log: true, config: "compose.yaml" })
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (err) {
                    _this.logger.error("Error in launchStack", err);
                    reject(err);
                });
            });
        };
        PortainerService_1.prototype.toDockerRun = function (cfg) {
            var _a, _b;
            try {
                var res = {
                    publicUrl: "",
                    serviceUrl: "",
                    cmd: "",
                    environment: "",
                };
                var t = cfg.template;
                var environment_1 = cfg.environment;
                var sb_1 = new stringbuilder_1.StringBuilder();
                var sbenv_1 = new stringbuilder_1.StringBuilder();
                var publicUrl = (_a = this.configService.get("webProxy.publicUrlFormat")) !== null && _a !== void 0 ? _a : "";
                var serviceUrl = (_b = this.configService.get("webProxy.serviceUrlFormat")) !== null && _b !== void 0 ? _b : "";
                sb_1.appendFormat("docker run --name {0}", t.name);
                sb_1.appendFormat("--hostname {0}", t.name);
                publicUrl = publicUrl.replace("{name}", t.name);
                serviceUrl = serviceUrl.replace("{name}", t.name);
                if (t.ports) {
                    if (t.ports.length == 1) {
                        var port = t.ports[0].split(":");
                        serviceUrl = serviceUrl.replace("{port}", port[0]);
                        publicUrl = publicUrl.replace("{port}", port[0]);
                    }
                    else {
                        serviceUrl = serviceUrl.replace(":{port}", "");
                        publicUrl = publicUrl.replace(":{port}", "");
                    }
                }
                else {
                    serviceUrl = serviceUrl.replace(":{port}", "");
                    publicUrl = publicUrl.replace(":{port}", "");
                }
                res.serviceUrl = serviceUrl;
                res.publicUrl = publicUrl;
                if (t.restart_policy != "") {
                    sb_1.appendFormat("--restart {0}", t.restart_policy);
                }
                sb_1.append("--env-file ./stack.env");
                if (t.env) {
                    t.env.forEach(function (env) {
                        if (environment_1[env.name]) {
                            sbenv_1.appendFormat("{0}='{1}'", env.name, environment_1[env.name]);
                        }
                        else {
                            if (env.set) {
                                sbenv_1.appendFormat("{0}='{1}'", env.name, env.set);
                            }
                            else {
                                if (env.default) {
                                    sbenv_1.appendFormat("{0}='{1}'", env.name, env.default);
                                }
                            }
                        }
                    });
                }
                if (t.ports) {
                    t.ports.forEach(function (port) {
                        sb_1.appendFormat("-p {0}", port);
                    });
                }
                if (t.volumes) {
                    t.volumes.forEach(function (volume) {
                        sb_1.appendFormat("-v {0}:{1}", volume.bind, volume.container);
                    });
                }
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.title='{0}'", t.title);
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.name='{0}'", t.name);
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.logo='{0}'", t.logo);
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.icon_slug='{0}'", t.name);
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.public='{0}'", publicUrl);
                sb_1.appendFormat("--label com.guidcruncher.discovrninja.proxy='{0}'", serviceUrl);
                sb_1.appendFormat("{0}", t.image);
                res.cmd = sb_1.toStringDelimited(" \\\n");
                res.environment = sbenv_1.toStringDelimited("\n");
                return res;
            }
            catch (err) {
                this.logger.error("Error creating Docker run command from template", err);
                throw err;
            }
        };
        return PortainerService_1;
    }());
    __setFunctionName(_classThis, "PortainerService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PortainerService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PortainerService = _classThis;
}();
exports.PortainerService = PortainerService;

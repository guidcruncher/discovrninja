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
exports.DockerRepositoryService = void 0;
var common_1 = require("@nestjs/common");
/**
 * Docker Repository connection and management
 */
var DockerRepositoryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DockerRepositoryService = _classThis = /** @class */ (function () {
        function DockerRepositoryService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(DockerRepositoryService.name);
            this.repositories = [
                {
                    name: "docker.io",
                    api: "https://hub.docker.com/v2",
                    loginUrl: "https://hub.docker.com/v2/users/login/",
                    authorization: "JWT",
                    queryEndpoint: "/repositories/[image]",
                    tagsEndpoint: "/repositories/[image]/tags/[tag]",
                    login: function (username, password) {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var url = _this.loginUrl;
                            var payload = {
                                username: username,
                                password: password,
                            };
                            fetch(url, {
                                method: "POST",
                                body: JSON.stringify(payload),
                                headers: {
                                    Accepts: "application/json",
                                    "Content-Type": "application/json",
                                },
                            })
                                .then(function (response) {
                                if (!response.ok) {
                                    return reject({
                                        status: response.status,
                                        text: response.statusText,
                                    });
                                }
                                return response.json();
                            })
                                .then(function (data) {
                                if (data) {
                                    if (data.token) {
                                        resolve(data.token);
                                        return;
                                    }
                                }
                                reject({ status: 401, text: "Invalid Credentials" });
                            });
                        });
                    },
                },
                {
                    name: "ghcr.io",
                    api: "https://ghcr.io/api/v2",
                    loginUrl: "https://ghcr.io/token?scope=repository",
                    authorization: "Bearer",
                    queryEndpoint: "/[image]/manifests/[tag]",
                    tagsEndpoint: "/[image]/manifests/[tag]",
                    login: function (username, password, target) {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var url = _this.loginUrl + ":" + target + ":pull";
                            fetch(url, { method: "GET" })
                                .then(function (response) {
                                if (!response.ok) {
                                    return reject({
                                        status: response.status,
                                        text: response.statusText,
                                    });
                                }
                                return response.json();
                            })
                                .then(function (data) {
                                if (data) {
                                    if (data.token) {
                                        resolve(data.token);
                                        return;
                                    }
                                }
                                reject({ status: 401, text: "Invalid Credentials" });
                            });
                        });
                    },
                },
                {
                    name: "lscr.io",
                    api: "https://lscr.io/api/v2",
                    loginUrl: "https://lscr.io/token?scope=repository",
                    authorization: "Bearer",
                    queryEndpoint: "/[image]/manifests/[tag]",
                    tagsEndpoint: "/[image]/manifests/[tag]",
                    login: function (username, password, target) {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var url = _this.loginUrl + ":" + target + ":pull";
                            fetch(url, { method: "GET" })
                                .then(function (response) {
                                if (!response.ok) {
                                    return reject({
                                        status: response.status,
                                        text: response.statusText,
                                    });
                                }
                                return response.json();
                            })
                                .then(function (data) {
                                if (data) {
                                    if (data.token) {
                                        resolve(data.token);
                                        return;
                                    }
                                }
                                reject({ status: 401, text: "Invalid Credentials" });
                            });
                        });
                    },
                },
                {
                    name: "quay.io",
                    api: "https://quay.io/api/v1",
                    loginUrl: "",
                    authorization: "",
                    queryEndpoint: "/repository/[image]",
                    tagsEndpoint: "/repository/[image]/tags/[tag]",
                    login: null,
                },
            ];
        }
        DockerRepositoryService_1.prototype.getImageUrl = function (image) {
            var imageParts = image.split(":");
            if (image.split("/").length <= 2) {
                return "docker.io/" + imageParts[0];
            }
            return imageParts[0];
        };
        DockerRepositoryService_1.prototype.getImagePath = function (image) {
            var items = image.split("/");
            var url = "";
            if (items.length <= 2) {
                url = "library/" + items[1];
            }
            else {
                url = items.splice(1).join("/");
            }
            return url.split(":")[0];
        };
        DockerRepositoryService_1.prototype.getImagePathTag = function (image) {
            var items = image.split("/");
            var url = "";
            if (items.length <= 2) {
                url = "library/" + items[1];
            }
            else {
                url = items.splice(1).join("/");
            }
            var segments = url.split(":");
            if (segments.length <= 1) {
                return "latest";
            }
            return segments[1];
        };
        DockerRepositoryService_1.prototype.getRepositorySettings = function (image) {
            var imageUrl = this.getImageUrl(image);
            var imageRepository = imageUrl.split("/")[0];
            return this.repositories.find(function (repository) { return repository.name == imageRepository; });
        };
        DockerRepositoryService_1.prototype.login = function (repository, username, password, target) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (repository.loginUrl == "") {
                    _this.logger.debug("Login not needed for " + repository.name);
                    resolve("");
                    return;
                }
                if (username == null || username == undefined) {
                    _this.logger.debug("No credentials supplied for repository " + repository.name);
                    reject("No credentials");
                    return;
                }
                repository
                    .login(username, password, target)
                    .then(function (token) { return resolve(token); })
                    .catch(function (err) {
                    _this.logger.error("Repository logon error", err);
                    reject(err);
                });
            });
        };
        DockerRepositoryService_1.prototype.queryRepository = function (image) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a, _b;
                var imageUrl = _this.getImageUrl(image);
                var repository = _this.getRepositorySettings(image);
                if (repository == null) {
                    reject("No repository");
                    return;
                }
                var _query = function (token) {
                    var url = repository.api +
                        repository.queryEndpoint
                            .replace("[image]", _this.getImagePath(imageUrl))
                            .replace("[tag]", _this.getImagePathTag(imageUrl));
                    _this.logger.debug("Repository " + url);
                    if (repository.authorization) {
                        var args = {};
                        args.method = "GET";
                        args.headers = {
                            Authorization: repository.authorization + " " + token,
                        };
                        _this.logger.debug("Repository query " + url);
                        fetch(url, args)
                            .then(function (response) {
                            if (!response.ok) {
                                return reject({
                                    status: response.status,
                                    text: response.statusText,
                                });
                            }
                            return response.json();
                        })
                            .then(function (data) {
                            if (data) {
                                data.imageName = image;
                                resolve(data);
                                return;
                            }
                            resolve(null);
                        });
                    }
                    else {
                        fetch(url, { method: "GET" })
                            .then(function (response) {
                            if (!response.ok) {
                                return reject({
                                    status: response.status,
                                    text: response.statusText,
                                });
                            }
                            return response.json();
                        })
                            .then(function (data) {
                            if (data) {
                                data.imageName = image;
                                resolve(data);
                                return;
                            }
                            resolve(null);
                        });
                    }
                };
                if (repository.authorization != "") {
                    var userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
                    var username = "";
                    var password = "";
                    username =
                        (_a = _this.configService.get("docker.repositories." + userEnvPrefix + ".username")) !== null && _a !== void 0 ? _a : "";
                    password =
                        (_b = _this.configService.get("docker.repositories." + userEnvPrefix + ".password")) !== null && _b !== void 0 ? _b : "";
                    _this.logger.debug("Looking for credentials for " +
                        repository.name +
                        " via repositories." +
                        userEnvPrefix);
                    _this.login(repository, username, password, imageUrl)
                        .then(function (token) {
                        _query(token);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error on repository login", err);
                        resolve(null);
                    });
                }
                else {
                    _query("");
                }
            });
        };
        DockerRepositoryService_1.prototype.queryRepositoryTags = function (image, os, arch) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a, _b;
                var imageUrl = _this.getImageUrl(image);
                var repository = _this.getRepositorySettings(image);
                if (repository == null) {
                    reject("No repository");
                    return;
                }
                var _query = function (token) {
                    var url = repository.api +
                        repository.tagsEndpoint
                            .replace("[image]", _this.getImagePath(imageUrl))
                            .replace("[tag]", _this.getImagePathTag(imageUrl));
                    if (repository.authorization) {
                        var args = {};
                        args.method = "GET";
                        args.headers = {
                            Authorization: repository.authorization + " " + token,
                        };
                        fetch(url, args)
                            .then(function (response) {
                            if (!response.ok) {
                                return reject({
                                    status: response.status,
                                    text: response.statusText,
                                });
                            }
                            return response.json();
                        })
                            .then(function (data) {
                            if (data) {
                                var result = [];
                                result = data.images.filter(function (img) {
                                    return img.os == os && img.architecture == arch;
                                });
                                data.images = result;
                                data.imageName = image;
                                resolve(data);
                                return;
                            }
                            resolve(null);
                        });
                    }
                    else {
                        fetch(url, { method: "GET" })
                            .then(function (response) {
                            if (!response.ok) {
                                return reject({
                                    status: response.status,
                                    text: response.statusText,
                                });
                            }
                            return response.json();
                        })
                            .then(function (data) {
                            if (data) {
                                data.imageName = image;
                                resolve(data);
                                return;
                            }
                            resolve(null);
                        });
                    }
                };
                if (repository.authorization != "") {
                    var userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
                    var username = "";
                    var password = "";
                    username =
                        (_a = _this.configService.get("docker.repositories." + userEnvPrefix + ".username")) !== null && _a !== void 0 ? _a : "";
                    password =
                        (_b = _this.configService.get("docker.repositories." + userEnvPrefix + ".password")) !== null && _b !== void 0 ? _b : "";
                    _this.login(repository, username, password, imageUrl)
                        .then(function (token) {
                        _query(token);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error on repository login", err);
                        resolve(null);
                    });
                }
                else {
                    _query("");
                }
            });
        };
        DockerRepositoryService_1.prototype.repositorySummary = function (image) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a, _b;
                var imageUrl = _this.getImageUrl(image);
                var repository = _this.getRepositorySettings(image);
                if (repository == null) {
                    _this.logger.error("Unsupported or unknown repository  " + image);
                    reject("No repository");
                    return;
                }
                var userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
                var username = "";
                var password = "";
                username =
                    (_a = _this.configService.get("docker.repositories." + userEnvPrefix + ".username")) !== null && _a !== void 0 ? _a : "";
                password =
                    (_b = _this.configService.get("docker.repositories." + userEnvPrefix + ".password")) !== null && _b !== void 0 ? _b : "";
                _this.login(repository, username, password, imageUrl)
                    .then(function (token) {
                    var url = repository.api +
                        repository.queryEndpoint
                            .replace("[image]", _this.getImagePath(imageUrl))
                            .replace("[tag]", _this.getImagePathTag(imageUrl));
                    var args = {};
                    args.method = "GET";
                    if (token != "") {
                        args.headers = {
                            Authorization: repository.authorization + " " + token,
                        };
                    }
                    fetch(url, args)
                        .then(function (response) {
                        if (!response.ok) {
                            return reject({
                                status: response.status,
                                text: response.statusText,
                            });
                        }
                        return response.json();
                    })
                        .then(function (data) {
                        if (data) {
                            resolve({
                                type: "repositorydata",
                                name: data.name ? data.name : "",
                                description: data.description ? data.description : "",
                            });
                        }
                        else {
                            reject("No results");
                        }
                    });
                })
                    .catch(function (err) {
                    _this.logger.error("Error in repository summary", err);
                    reject(err);
                });
            });
        };
        return DockerRepositoryService_1;
    }());
    __setFunctionName(_classThis, "DockerRepositoryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DockerRepositoryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DockerRepositoryService = _classThis;
}();
exports.DockerRepositoryService = DockerRepositoryService;

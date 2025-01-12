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
exports.DockerDiscoveryService = void 0;
var node_crypto_1 = require("node:crypto");
var common_1 = require("@nestjs/common");
var discoveryscan_1 = require("@customtypes/discoveryscan");
var servicedefinition_1 = require("@customtypes/servicedefinition");
var iputilities_1 = require("@helpers/iputilities");
/**
 * Docker service discovery
 */
var DockerDiscoveryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DockerDiscoveryService = _classThis = /** @class */ (function () {
        function DockerDiscoveryService_1(dockerService, configService) {
            this.dockerService = dockerService;
            this.configService = configService;
            this.logger = new common_1.Logger(DockerDiscoveryService.name);
        }
        /**
         * Performs a docker discovery container scan and returns the results
         */
        DockerDiscoveryService_1.prototype.scan = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.internalScan()
                    .then(function (results) {
                    var services = servicedefinition_1.ServiceDefinitionList.fromDiscoveryScan(results);
                    resolve(services);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        DockerDiscoveryService_1.prototype.internalScan = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.configService.get("discovery.docker.enabled")) {
                    _this.logger.warn("Skipping Docker based discovery");
                    reject();
                    return;
                }
                var result = new discoveryscan_1.DiscoveryScan();
                var docker = _this.dockerService.createDocker();
                docker.listContainers({ all: true, size: false }, function (err, containers) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        var promises_1 = [];
                        containers.forEach(function (container) {
                            promises_1.push(_this.dockerService.getContainer(container.Id));
                        });
                        Promise.allSettled(promises_1).then(function (results) {
                            var addressPromises = [];
                            results.forEach(function (promise) {
                                var _a;
                                if (promise.status == "fulfilled") {
                                    var container = promise.value;
                                    var networkMode = container.HostConfig.NetworkMode;
                                    var record = {
                                        project: "",
                                        name: container.Config.Labels["homepage.name"],
                                        containerName: container.Name,
                                        hostname: container.Config.Hostname,
                                        iconSlug: "",
                                        available: container.available,
                                        ports: _this.resolvePorts(container.Config.ExposedPorts),
                                        sourceAddress: { network: "", address: "", preferred: false },
                                        targetAddress: container.Config.Labels["homepage.href"],
                                        ipAddresses: _this.resolveNetworks(container.NetworkSettings, container.HostConfig.NetworkMode),
                                    };
                                    if (container.Config.Labels["com.guidcruncher.discovrninja.title"]) {
                                        record.name =
                                            container.Config.Labels["com.guidcruncher.discovrninja.title"];
                                    }
                                    if (container.Config.Labels["com.guidcruncher.discovrninja.icon_slug"]) {
                                        record.iconSlug =
                                            container.Config.Labels["com.guidcruncher.discovrninja.icon_slug"];
                                    }
                                    if (container.Config.Labels["com.guidcruncher.discovrninja.public"]) {
                                        record.targetAddress =
                                            container.Config.Labels["com.guidcruncher.discovrninja.public"];
                                    }
                                    record.project =
                                        (_a = container.Config.Labels["com.docker.compose.project"]) !== null && _a !== void 0 ? _a : "";
                                    if (container.Config.Labels["homepage.targetaddress"]) {
                                        record.targetAddress =
                                            container.Config.Labels["homepage.targetaddress"];
                                    }
                                    if (container.Config.Labels["com.guidcruncher.discovrninja.proxy"]) {
                                        record.sourceAddress.address =
                                            container.Config.Labels["com.guidcruncher.discovrninja.proxy"];
                                        record.sourceAddress.preferred = true;
                                        result.entries.push(record);
                                    }
                                    else {
                                        if (networkMode.startsWith("container:")) {
                                            var containerId_1 = networkMode.split(":")[1];
                                            var parentContainer = results
                                                .filter(function (a) { return a.status == "fulfilled"; })
                                                .map(function (b) { return b.value; })
                                                .find(function (c) { return c.Id == containerId_1; });
                                            record.ipAddresses = _this.resolveNetworks(parentContainer.NetworkSettings, parentContainer.HostConfig.NetworkMode);
                                            addressPromises.push(_this.resolveSourceAddress(record, parentContainer));
                                        }
                                        else {
                                            addressPromises.push(_this.resolveSourceAddress(record, container));
                                        }
                                    }
                                }
                            });
                            Promise.allSettled(addressPromises).then(function (results) {
                                var fulfilled = results.filter(function (res) { return res.status === "fulfilled"; });
                                fulfilled.forEach(function (value) {
                                    result.entries.push(value.value);
                                });
                                result.entries.sort(function (a, b) {
                                    return a.containerName.localeCompare(b.containerName);
                                });
                                result.hash = (0, node_crypto_1.createHash)("sha256")
                                    .update(JSON.stringify(result.entries))
                                    .digest("base64");
                                resolve(result);
                            });
                        });
                    }
                });
            });
        };
        DockerDiscoveryService_1.prototype.getScheme = function (port) {
            if (port == "443") {
                return "https:";
            }
            return "http:";
        };
        DockerDiscoveryService_1.prototype.resolveSourceAddress = function (entry, container) {
            var _this = this;
            var iputils = new iputilities_1.IpUtilities();
            var networks = this.resolveNetworks(container.NetworkSettings, container.HostConfig.NetworkMode);
            return new Promise(function (resolve, reject) {
                var hostIpAddress = iputils.getHostIpAddress();
                var result = entry;
                if (entry.ports.length == 0) {
                    resolve(result);
                }
                var promises = [];
                var preferredNetwork = networks.find(function (n) { return n.preferred; });
                entry.ports.forEach(function (port) {
                    entry.ipAddresses.forEach(function (addr) {
                        if (addr.preferred || !preferredNetwork) {
                            var url = {
                                preferred: addr.preferred,
                                address: "",
                                network: addr.network,
                            };
                            var scheme = _this.getScheme(port);
                            if (addr.address == "") {
                                addr.address = hostIpAddress;
                            }
                            if (scheme == "http:") {
                                url.address = "http://" + addr.address + ":" + port;
                                promises.push(iputils.checkUrlLive(url));
                            }
                            else {
                                url.address = scheme + "//" + addr.address + ":" + port;
                                promises.push(iputils.checkUrlLive(url));
                            }
                        }
                    });
                });
                Promise.any(promises)
                    .then(function (result) {
                    entry.sourceAddress = result;
                    if (result.network != "host") {
                        var uri = new URL(result.address);
                        entry.sourceAddress.address =
                            uri.protocol +
                                "//" +
                                entry.hostname +
                                (uri.port == "" ? "" : ":" + uri.port);
                    }
                    resolve(entry);
                })
                    .catch(function () {
                    entry.sourceAddress.address = "";
                    entry.sourceAddress.network = "";
                    resolve(entry);
                });
            });
        };
        DockerDiscoveryService_1.prototype.resolveNetworks = function (networksettings, networkMode) {
            var results = [];
            var iputils = new iputilities_1.IpUtilities();
            for (var _i = 0, _a = Object.keys(networksettings.Networks); _i < _a.length; _i++) {
                var key = _a[_i];
                var network = networksettings.Networks[key];
                var address = {
                    preferred: networkMode == network.NetworkID,
                    network: key,
                    address: network.IPAddress,
                };
                if (key == "host") {
                    address.preferred = true;
                    address.address = iputils.getHostIpAddress();
                }
                results.push(address);
            }
            return results;
        };
        DockerDiscoveryService_1.prototype.resolvePorts = function (ports) {
            var results = [];
            if (ports) {
                Object.keys(ports).forEach(function (key) {
                    if (!key.includes("udp")) {
                        var currentPort = key.replace("/tcp", "");
                        if (!results.includes(currentPort)) {
                            results.push(currentPort);
                        }
                    }
                });
            }
            return results;
        };
        return DockerDiscoveryService_1;
    }());
    __setFunctionName(_classThis, "DockerDiscoveryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DockerDiscoveryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DockerDiscoveryService = _classThis;
}();
exports.DockerDiscoveryService = DockerDiscoveryService;

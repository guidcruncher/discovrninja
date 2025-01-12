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
exports.LinkdingService = void 0;
var fluenthttpclient_1 = require("@helpers/fluenthttpclient");
var common_1 = require("@nestjs/common");
var rss_parser_1 = require("rss-parser");
var LinkdingService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LinkdingService = _classThis = /** @class */ (function () {
        function LinkdingService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(LinkdingService.name);
        }
        LinkdingService_1.prototype.countTags = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = {};
                var feedUrl = _this.configService.get("externalservices.linkding.feedUrl");
                _this.getTags()
                    .then(function (tags) {
                    tags.forEach(function (tag) {
                        result[tag.trim()] = 0;
                    });
                    var parser = new rss_parser_1.default();
                    parser
                        .parseURL(feedUrl)
                        .then(function (feed) {
                        feed.items.forEach(function (item) {
                            if (item.categories) {
                                item.categories.forEach(function (cat) {
                                    result[cat.trim()] += 1;
                                });
                            }
                        });
                        resolve(result);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error parsing Linkding bookmark feed", err);
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    _this.logger.error("Error in counttTags", err);
                    reject(err);
                });
            });
        };
        LinkdingService_1.prototype.getBookmarks = function (tag) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var _a;
                var result = [];
                var url = _this.configService.get("externalservices.linkding.apiUrl");
                var apiKey = _this.configService.get("externalservices.linkding.apiToken");
                var feedUrl = _this.configService.get("externalservices.linkding.feedUrl");
                var hostname = (_a = _this.configService.get("externalservices.linkding.hostname")) !== null && _a !== void 0 ? _a : "";
                var applyHostName = function (url) {
                    if (url == "") {
                        return "";
                    }
                    var u = new URL(url);
                    var s = new URL(hostname);
                    u.host = s.host;
                    u.port = s.port;
                    u.protocol = s.protocol;
                    return u.href;
                };
                var client = fluenthttpclient_1.FluentHttpClient.Get(url + "/bookmarks?limit=65535&q=" + encodeURIComponent("#" + tag))
                    .Authorization("Token", apiKey)
                    .Execute()
                    .then(function (response) {
                    var obj = JSON.parse(response.value);
                    if (hostname != "") {
                        obj.results.forEach(function (l) {
                            if (l.preview_image_url) {
                                l.preview_image_url = applyHostName(l.preview_image_url);
                            }
                            if (l.favicon_url) {
                                l.favicon_url = applyHostName(l.favicon_url);
                            }
                        });
                    }
                    resolve(obj);
                })
                    .catch(function (err) {
                    _this.logger.error("Error in getbookmarks", err);
                    reject(err);
                });
            });
        };
        LinkdingService_1.prototype.getTags = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result = [];
                var url = _this.configService.get("externalservices.linkding.apiUrl");
                var apiKey = _this.configService.get("externalservices.linkding.apiToken");
                var feedUrl = _this.configService.get("externalservices.linkding.feedUrl");
                var client = fluenthttpclient_1.FluentHttpClient.Get(url + "/tags")
                    .Authorization("Token", apiKey)
                    .Execute()
                    .then(function (response) {
                    var obj = JSON.parse(response.value);
                    obj.results.forEach(function (tag) {
                        result.push(tag.name);
                    });
                    resolve(result.sort());
                })
                    .catch(function (err) {
                    _this.logger.error("Error in getTags", err);
                    reject(err);
                });
            });
        };
        return LinkdingService_1;
    }());
    __setFunctionName(_classThis, "LinkdingService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LinkdingService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LinkdingService = _classThis;
}();
exports.LinkdingService = LinkdingService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientResult = exports.FluentHttpClient = exports.DownloadResult = void 0;
var common_1 = require("@nestjs/common");
var fs = require("fs");
var DownloadResult = /** @class */ (function () {
    function DownloadResult() {
    }
    return DownloadResult;
}());
exports.DownloadResult = DownloadResult;
var HttpClientResult = /** @class */ (function () {
    function HttpClientResult() {
        this.contentType = "";
        this.contentDisposition = "";
        this.value = "";
    }
    return HttpClientResult;
}());
exports.HttpClientResult = HttpClientResult;
var FluentHttpClient = /** @class */ (function () {
    function FluentHttpClient(method, url) {
        this._method = "";
        this._url = "";
        this._headers = {};
        this._timeout = 1000;
        this._parameters = {};
        this._body = {};
        this.logger = new common_1.Logger(FluentHttpClient.name);
        this._method = method.toUpperCase();
        this._url = url;
        this._timeout = 5000;
        this._hasbody = ["PUT", "POST"].includes(this._method);
        this._headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }
    FluentHttpClient.Get = function (url) {
        return new FluentHttpClient("GET", url);
    };
    FluentHttpClient.Put = function (url) {
        return new FluentHttpClient("PUT", url);
    };
    FluentHttpClient.Post = function (url) {
        return new FluentHttpClient("POST", url);
    };
    FluentHttpClient.prototype.Parameters = function (parameters) {
        this._parameters = parameters;
        return this;
    };
    FluentHttpClient.prototype.AddParameters = function (name, value) {
        this._parameters[name] = value;
        return this;
    };
    FluentHttpClient.prototype.Body = function (body, contentType) {
        this._body = body;
        if (contentType) {
            this.ContentType(contentType);
        }
        else {
            this.ContentType("application/json");
        }
        return this;
    };
    FluentHttpClient.prototype.Header = function (kvobj) {
        var _this = this;
        if (!this._headers) {
            this._headers = {};
        }
        var self = this;
        Object.keys(kvobj).forEach(function (k) {
            _this._headers[k] = kvobj[k];
        });
        return this;
    };
    FluentHttpClient.prototype.Authorization = function (scheme, credentials) {
        return this.Header({ Authorization: scheme + " " + credentials });
    };
    FluentHttpClient.prototype.ContentType = function (type) {
        return this.Header({ "Content-Type": type.toLowerCase() });
    };
    FluentHttpClient.prototype.Accepts = function (type) {
        return this.Header({ Accepts: type.toLowerCase() });
    };
    FluentHttpClient.prototype.deSerializeBody = function (contentType, body) {
        if (contentType.toLowerCase().includes("json")) {
            return JSON.parse(body);
        }
        if (contentType.toLowerCase().includes("xml")) {
            var ser = new DOMParser();
            return ser.parseFromString(body, contentType.toLowerCase());
        }
        return body;
    };
    FluentHttpClient.prototype.serializeBody = function () {
        var _this = this;
        var contentType = this._headers["Content-Type"];
        if (contentType.includes("json")) {
            return JSON.stringify(this._body);
        }
        if (contentType.includes("xml")) {
            var ser = new XMLSerializer();
            return ser.serializeToString(this._body);
        }
        if (contentType.includes("forms")) {
            var items_1 = [];
            Object.keys(this._body).forEach(function (k) {
                items_1.push(k + "=" + encodeURIComponent(_this._body[k]));
            });
            return items_1.join("&");
        }
        return JSON.stringify(this._body);
    };
    FluentHttpClient.prototype.createUrl = function () {
        var _this = this;
        var url = this._url;
        Object.keys(this._parameters).forEach(function (k) {
            var re = new RegExp("\\s{" + k + "}\\s", "g");
            url = url.replace(re, _this._parameters[k]);
            re = new RegExp("\\s:" + k + "\\s", "g");
            url = url.replace(re, _this._parameters[k]);
        });
        return url;
    };
    FluentHttpClient.prototype.createFetch = function () {
        if (this._hasbody) {
            return fetch(this.createUrl(), {
                method: this._method,
                signal: AbortSignal.timeout(this._timeout),
                headers: this._headers,
                body: this.serializeBody(),
            });
        }
        return fetch(this.createUrl(), {
            method: this._method,
            signal: AbortSignal.timeout(this._timeout),
            headers: this._headers,
        });
    };
    FluentHttpClient.prototype.Execute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var result_1 = new HttpClientResult();
                _this.createFetch()
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        result_1.url = new URL(response.url);
                        result_1.contentDisposition = response.headers.get("Content-Disposition");
                        result_1.contentType = response.headers.get("Content-Type");
                        return response.text();
                    }
                })
                    .then(function (data) {
                    result_1.value = data;
                    resolve(result_1);
                })
                    .catch(function (error) {
                    if (error instanceof Error) {
                        reject({ statusText: error.message, status: 500, error: error });
                    }
                    else {
                        reject({
                            statusText: "Unexpected error",
                            status: 500,
                            error: null,
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    reject({ statusText: error.message, status: 500, error: error });
                }
                else {
                    reject({ statusText: "Unexpected error", status: 500, error: null });
                }
            }
        });
    };
    FluentHttpClient.prototype.Response = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.createFetch()
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        return response.text();
                    }
                })
                    .then(function (data) {
                    resolve(JSON.parse(data));
                })
                    .catch(function (error) {
                    if (error instanceof Error) {
                        reject({ statusText: error.message, status: 500, error: error });
                    }
                    else {
                        reject({
                            statusText: "Unexpected error",
                            status: 500,
                            error: null,
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    reject({ statusText: error.message, status: 500, error: error });
                }
                else {
                    reject({ statusText: "Unexpected error", status: 500, error: null });
                }
            }
        });
    };
    FluentHttpClient.prototype.Download = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var result_2 = new DownloadResult();
                _this.createFetch()
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        result_2.url = new URL(response.url);
                        result_2.contentDisposition = response.headers.get("Content-Disposition");
                        result_2.contentType = response.headers.get("Content-Type");
                        return response.arrayBuffer();
                    }
                })
                    .then(function (buffer) {
                    result_2.data = new Uint8Array(buffer);
                    resolve(result_2);
                })
                    .catch(function (error) {
                    if (error instanceof Error) {
                        reject({ statusText: error.message, status: 500, error: error });
                    }
                    else {
                        reject({
                            statusText: "Unexpected error",
                            status: 500,
                            error: null,
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    reject({ statusText: error.message, status: 500, error: error });
                }
                else {
                    reject({ statusText: "Unexpected error", status: 500, error: null });
                }
            }
        });
    };
    FluentHttpClient.prototype.DownloadTo = function (filename) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var result_3 = new DownloadResult();
                _this.createFetch()
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        result_3.url = new URL(response.url);
                        result_3.contentDisposition = response.headers.get("Content-Disposition");
                        result_3.contentType = response.headers.get("Content-Type");
                        return response.arrayBuffer();
                    }
                })
                    .then(function (buffer) {
                    result_3.data = new Uint8Array(buffer);
                    fs.createWriteStream(filename).write(result_3.data);
                    resolve(result_3);
                })
                    .catch(function (error) {
                    if (error instanceof Error) {
                        reject({ statusText: error.message, status: 500, error: error });
                    }
                    else {
                        reject({
                            statusText: "Unexpected error",
                            status: 500,
                            error: null,
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    reject({ statusText: error.message, status: 500, error: error });
                }
                else {
                    reject({ statusText: "Unexpected error", status: 500, error: null });
                }
            }
        });
    };
    return FluentHttpClient;
}());
exports.FluentHttpClient = FluentHttpClient;

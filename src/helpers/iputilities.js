"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpUtilities = void 0;
var axios_1 = require("axios");
var dns = require("dns");
var os = require("os");
/**
 * IP helper utilities
 */
var IpUtilities = /** @class */ (function () {
    function IpUtilities() {
    }
    IpUtilities.prototype.uniqueArray = function (array) {
        return Array.from(array.reduce(function (set, e) { return set.add(e); }, new Set()));
    };
    /**
     * Resolves hostname to IP using operating system resolver
     * @returns IP Address
     */
    IpUtilities.prototype.getIpAddress = function (hostname) {
        return new Promise(function (resolve, reject) {
            var options = { family: 4 };
            dns.lookup(hostname, options, function (err, addr) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(addr);
                }
            });
        });
    };
    /**
     * Gets the Host IP address
     * @returns IP Address
     */
    IpUtilities.prototype.getHostIpAddress = function () {
        var networkInterfaces = os.networkInterfaces();
        for (var _i = 0, _a = Object.keys(networkInterfaces); _i < _a.length; _i++) {
            var interfaceName = _a[_i];
            var networkInterface = networkInterfaces[interfaceName];
            if (networkInterface) {
                for (var _b = 0, networkInterface_1 = networkInterface; _b < networkInterface_1.length; _b++) {
                    var net = networkInterface_1[_b];
                    if (net.family === "IPv4" && !net.internal) {
                        return net.address;
                    }
                }
            }
        }
        return "";
    };
    IpUtilities.prototype.retrieve = function (method, url) {
        return new Promise(function (resolve, reject) {
            try {
                var instance = axios_1.default.create();
                instance
                    .get(url, { method: "GET", timeout: 5000 })
                    .then(function (response) {
                    resolve("");
                })
                    .catch(function (err) {
                    if (err.status) {
                        resolve("");
                    }
                    else {
                        reject(err);
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * Performs a HTTP HEAD Request to determine if a url is alive.
     * @returns request results
     */
    IpUtilities.prototype.checkUrlLive = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.retrieve("GET", url.address)
                .then(function (res) {
                resolve(url);
            })
                .catch(function (err) {
                reject();
            });
        });
    };
    return IpUtilities;
}());
exports.IpUtilities = IpUtilities;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryEntry = void 0;
/**
 * Represents results of a service scan
 */
var DiscoveryEntry = /** @class */ (function () {
    function DiscoveryEntry() {
        this.available = false;
        this.name = "";
        this.ports = [];
        this.sourceAddress = { network: "", address: "", preferred: false };
        this.targetAddress = "";
        this.containerName = "";
        this.hostname = "";
        this.ipAddresses = [];
    }
    return DiscoveryEntry;
}());
exports.DiscoveryEntry = DiscoveryEntry;

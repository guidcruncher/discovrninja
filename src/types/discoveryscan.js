"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryScan = void 0;
/**
 * Represents results of a service scan
 */
var DiscoveryScan = /** @class */ (function () {
    function DiscoveryScan() {
        this.created = new Date();
        this.hash = "";
        this.entries = [];
    }
    return DiscoveryScan;
}());
exports.DiscoveryScan = DiscoveryScan;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsEntryStore = void 0;
/**
 * Represents a DNS Entry datastore
 */
var DnsEntryStore = /** @class */ (function () {
    function DnsEntryStore() {
        this._keys = [];
        this._values = [];
        this._store = {};
        this._store = {};
        this._keys = [];
        this._values = [];
    }
    /**
     * Gets a singleton instance of the store
     */
    DnsEntryStore.getInstance = function () {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new DnsEntryStore();
        return this._instance;
    };
    /**
     * Adds a DNS Entry to the store
     */
    DnsEntryStore.prototype.add = function (key, value) {
        this._store[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    /**
     * Removes a DNS Entry to the store
     */
    DnsEntryStore.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this._store[key];
    };
    /**
     * Exports the DNS Store to a JSON Document
     */
    DnsEntryStore.prototype.export = function () {
        return JSON.stringify({ keys: this._keys, values: this._values });
    };
    /**
     * Impors the DNS Store from a JSON Document
     */
    DnsEntryStore.prototype.import = function (keys, values) {
        this.clear();
        this._keys = keys;
        this._values = values;
        for (var i = 0; i < keys.length; i++) {
            this._store[keys[i]] = values[i];
        }
    };
    /**
     * Returns a list of store Domains
     */
    DnsEntryStore.prototype.keys = function () {
        return this._keys;
    };
    /**
     * Returns the content of the DNS Store
     */
    DnsEntryStore.prototype.values = function () {
        return this._values;
    };
    /**
     * Clears the DNS Store
     */
    DnsEntryStore.prototype.clear = function () {
        this._store = {};
        this._keys = [];
        this._values = [];
    };
    /**
     * Returns true if the given key exists in the DNS Store
     */
    DnsEntryStore.prototype.containsKey = function (key) {
        if (typeof this._store[key] === "undefined") {
            return false;
        }
        return true;
    };
    /*
     * Returns  the exist copy of the DNS Store
     */
    DnsEntryStore.prototype.store = function () {
        return this._store;
    };
    /**
     * Returns the associated DNS Record for the given key
     */
    DnsEntryStore.prototype.find = function (key) {
        var index = this._keys.indexOf(key);
        if (index < 0) {
            return null;
        }
        return this._values[index];
    };
    return DnsEntryStore;
}());
exports.DnsEntryStore = DnsEntryStore;

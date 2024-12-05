import { DnsEntry } from "@customtypes/dnsentry";

/**
 * Represents a DNS Entry datastore
 */
export class DnsEntryStore {
  private static _instance: DnsEntryStore;

  private _keys: string[] = [];

  private _values: DnsEntry[] = [];

  private _store = {};

  constructor() {
    this._store = {};
    this._keys = [];
    this._values = [];
  }

  /**
   * Gets a singleton instance of the store
   */
  public static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new DnsEntryStore();
    return this._instance;
  }

  /**
   * Adds a DNS Entry to the store
   */
  public add(key: string, value: DnsEntry): void {
    this._store[key] = value;
    this._keys.push(key);
    this._values.push(value);
  }

  /**
   * Removes a DNS Entry to the store
   */
  public remove(key: string): void {
    const index = this._keys.indexOf(key, 0);
    this._keys.splice(index, 1);
    this._values.splice(index, 1);

    delete this._store[key];
  }

  /**
   * Exports the DNS Store to a JSON Document
   */
  public export(): string {
    return JSON.stringify({ keys: this._keys, values: this._values });
  }

  /**
   * Impors the DNS Store from a JSON Document
   */
  public import(keys: string[], values: any[]): void {
    this.clear();
    this._keys = keys;
    this._values = values;

    for (let i = 0; i < keys.length; i++) {
      this._store[keys[i]] = values[i];
    }
  }

  /**
   * Returns a list of store Domains
   */
  public keys(): string[] {
    return this._keys;
  }

  /**
   * Returns the content of the DNS Store
   */
  public values(): DnsEntry[] {
    return this._values;
  }

  /**
   * Clears the DNS Store
   */
  public clear(): void {
    this._store = {};
    this._keys = [];
    this._values = [];
  }

  /**
   * Returns true if the given key exists in the DNS Store
   */
  public containsKey(key: string): boolean {
    if (typeof this._store[key] === "undefined") {
      return false;
    }

    return true;
  }

  /*
   * Returns  the exist copy of the DNS Store
   */
  public store(): any {
    return this._store;
  }

  /**
   * Returns the associated DNS Record for the given key
   */
  public find(key: string): DnsEntry {
    const index = this._keys.indexOf(key);
    if (index < 0) {
      return null;
    }
    return this._values[index];
  }
}

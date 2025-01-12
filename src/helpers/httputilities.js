"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUtilities = void 0;
/**
 * Helper functions for making HTTP requests
 */
var HttpUtilities = /** @class */ (function () {
    function HttpUtilities() {
    }
    /**
     * Performs a HTTP Request without posted data
     * @returns request results
     */
    HttpUtilities.prototype.retrieve = function (method, url) {
        return new Promise(function (resolve, reject) {
            try {
                fetch(url, {
                    method: method,
                    signal: AbortSignal.timeout(5000),
                })
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
                    .then(function (result) { return resolve(result); })
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
    HttpUtilities.prototype.retrieveBinary = function (method, url) {
        return new Promise(function (resolve, reject) {
            try {
                fetch(url, {
                    method: method,
                    signal: AbortSignal.timeout(5000),
                })
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        return response.arrayBuffer();
                    }
                })
                    .then(function (result) { return resolve(new Uint8Array(result)); })
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
    /**
     * Performs a HTTP Request without posted data
     * @returns request results as a generic
     */
    HttpUtilities.prototype.retrieveGeneric = function (method, url) {
        return new Promise(function (resolve, reject) {
            try {
                fetch(url, {
                    method: method,
                    signal: AbortSignal.timeout(5000),
                })
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        return response.json();
                    }
                })
                    .then(function (result) { return resolve(result); })
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
    /**
     * Performs a HTTP Request with posted data
     * @returns request results
     */
    HttpUtilities.prototype.send = function (method, url, data) {
        return new Promise(function (resolve, reject) {
            try {
                fetch(url, {
                    method: method,
                    body: data,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    signal: AbortSignal.timeout(5000),
                })
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
                    .then(function (result) { return resolve(result); })
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
    /**
     * Performs a HTTP Request with posted data as a generic
     * @returns request results as a generic
     */
    HttpUtilities.prototype.sendGeneric = function (method, url, data) {
        return new Promise(function (resolve, reject) {
            try {
                fetch(url, {
                    method: method,
                    body: JSON.stringify(data),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    signal: AbortSignal.timeout(5000),
                })
                    .then(function (response) {
                    if (!response.ok) {
                        reject({
                            statusText: response.statusText,
                            status: response.status,
                            error: null,
                        });
                    }
                    else {
                        return response.json();
                    }
                })
                    .then(function (result) { return resolve(result); })
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
    return HttpUtilities;
}());
exports.HttpUtilities = HttpUtilities;

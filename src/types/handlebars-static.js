"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlebarsFactory = exports.Handlebars = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var Handlebars = /** @class */ (function () {
    function Handlebars() {
        this.Engine = require("handlebars");
    }
    Handlebars.prototype.getPartials = function () {
        var instance = this;
        var clientBase = path_1.default.join(process.cwd(), "client");
        var templatesPath = path_1.default.join(clientBase, "views");
        var partialsDir = path_1.default.join(templatesPath, "partials");
        var partials = {};
        fs_1.default.readdirSync(partialsDir, { withFileTypes: true })
            .filter(function (file) {
            return path_1.default.extname(file.name) === ".hbs";
        })
            .forEach(function (file) {
            var basename = path_1.default.basename(file.name, ".hbs");
            var filePath = path_1.default.join(partialsDir, file.name);
            partials[basename] = path_1.default.relative(templatesPath, filePath);
        });
        //instance.Engine.partials = partials;
        return partials;
    };
    Handlebars.prototype.registerHelpers = function () {
        var instance = this;
        var clientBase = path_1.default.join(process.cwd(), "client");
        var helpersDir = path_1.default.join(clientBase, "helpers");
        fs_1.default.readdirSync(helpersDir, { withFileTypes: true })
            .filter(function (file) {
            return path_1.default.extname(file.name) === ".js";
        })
            .forEach(function (file) {
            var filePath = path_1.default.join(helpersDir, file.name);
            var r = require(filePath);
            r(instance.Engine);
        });
    };
    Handlebars.prototype.reloadViewEngine = function (app) {
        // TODO
    };
    Handlebars.prototype.setViewEngine = function (app) {
        var instance = this;
        var clientBase = path_1.default.join(process.cwd(), "client");
        this.registerHelpers();
        app.setViewEngine({
            engine: {
                handlebars: instance.Engine,
            },
            templates: path_1.default.join(clientBase, "views"),
            options: {
                layoutsDir: path_1.default.join(clientBase, "views", "layouts"),
                partials: instance.getPartials(),
            },
        });
    };
    return Handlebars;
}());
exports.Handlebars = Handlebars;
var HandlebarsFactory = /** @class */ (function () {
    function HandlebarsFactory() {
    }
    HandlebarsFactory.getInstance = function () {
        if (this._instance) {
            return this._instance;
        }
        this.initialise();
        return this._instance;
    };
    HandlebarsFactory.initialise = function () {
        this._instance = new Handlebars();
        this._instance.registerHelpers();
        this._instance.getPartials();
        return this._instance;
    };
    return HandlebarsFactory;
}());
exports.HandlebarsFactory = HandlebarsFactory;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
var node_cluster_1 = require("node:cluster");
var node_os_1 = require("node:os");
var node_process_1 = require("node:process");
var handlebars_static_1 = require("@customtypes/handlebars-static");
var compress_1 = require("@fastify/compress");
var secure_session_1 = require("@fastify/secure-session");
var exception_filter_1 = require("@helpers/exception.filter");
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var core_1 = require("@nestjs/core");
var platform_fastify_1 = require("@nestjs/platform-fastify");
var swagger_1 = require("@nestjs/swagger");
var tasks_service_1 = require("@services/tasks.service");
var path_1 = require("path");
var app_module_1 = require("./app.module");
function startServers(app, config, log) {
    return __awaiter(this, void 0, void 0, function () {
        var serverPort, serverHost, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    log.debug("Starting Application Web Server");
                    serverPort = parseInt(config.get("host.appServer.listenPort"));
                    serverHost = config.get("host.appServer.listenAddress");
                    if (node_process_1.default.env.IN_DOCKER) {
                        serverHost = "127.0.0.1";
                        serverPort = 5001;
                    }
                    return [4 /*yield*/, app.listen(serverPort, serverHost)];
                case 1:
                    _d.sent();
                    _b = (_a = log).debug;
                    _c = "Application is running on: ".concat;
                    return [4 /*yield*/, app.getUrl()];
                case 2:
                    _b.apply(_a, [_c.apply("Application is running on: ", [_d.sent()])]);
                    return [2 /*return*/];
            }
        });
    });
}
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var hideBin, app, clientBase, log, config, tasks, nodeEnv, Handlebars, swaggerConfig, documentFactory;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    hideBin = require("yargs/helpers").hideBin;
                    return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({}))];
                case 1:
                    app = _c.sent();
                    return [4 /*yield*/, app.register(secure_session_1.default, {
                            secret: "89e197b0213b6c63147f8916153eaf8e87d72c1cd1a3b7b1dc0c1a249a7f9519737472854072b6df9ee55ad054676e38c7cddecd6b4cebe5ba0db85ba64e49d8a2afc6137dc0f8da6981d8c7efb19105eb945fdefc17424853bd73c79968b56ec913c80a16540f5cf34a5698b68c3390e2ac7e0c86de425f0f82846deb3225e1",
                            salt: "09282eec307cahtf",
                        })];
                case 2:
                    _c.sent();
                    // await app.register(fastifyCookie, {
                    //   secret:
                    //    "f7a4169f410ec82678c101af2a7b8b3799bd97599e47fb55aa38faca285c9d1f2215d989ef6331bb210e56a93729257cb31e695275f1815ad7e719ed0b58a936",
                    // });
                    return [4 /*yield*/, app.register(compress_1.default, { encodings: ["gzip", "deflate"] })];
                case 3:
                    // await app.register(fastifyCookie, {
                    //   secret:
                    //    "f7a4169f410ec82678c101af2a7b8b3799bd97599e47fb55aa38faca285c9d1f2215d989ef6331bb210e56a93729257cb31e695275f1815ad7e719ed0b58a936",
                    // });
                    _c.sent();
                    app.enableCors();
                    clientBase = (_a = node_process_1.default.env.CLIENT_BASE) !== null && _a !== void 0 ? _a : path_1.default.join(__dirname, "..", "client");
                    app.useStaticAssets({
                        root: path_1.default.join(clientBase, "public"),
                        prefix: "/assets/",
                        cacheControl: false,
                        etag: false,
                        decorateReply: true,
                    });
                    log = new common_1.Logger("Bootstrap");
                    config = app.get(config_1.ConfigService);
                    tasks = app.get(tasks_service_1.TasksService);
                    nodeEnv = (_b = node_process_1.default.env.NODE_ENV) !== null && _b !== void 0 ? _b : "development";
                    app.useGlobalFilters(new exception_filter_1.ErrorExceptionFilter());
                    Handlebars = handlebars_static_1.HandlebarsFactory.getInstance();
                    Handlebars.setViewEngine(app);
                    log.debug("Building Swagger API Documentation");
                    swaggerConfig = new swagger_1.DocumentBuilder()
                        .setTitle("DiscovrNinja API")
                        .setDescription("The DiscovrNinja service API")
                        .build();
                    documentFactory = function () {
                        return swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
                    };
                    swagger_1.SwaggerModule.setup("api/docs", app, documentFactory);
                    tasks.initalJobs().then(function (r) {
                        if (config.get("host.cluster.enabled") == true) {
                            log.debug("Enabling Worker process clustering");
                            if (node_cluster_1.default.isPrimary) {
                                var numCPUs = (0, node_os_1.availableParallelism)();
                                var workerProcessCount = parseInt(config.get("host.cluster.workerProcessCount"));
                                log.debug("Enabling clustering using " +
                                    workerProcessCount +
                                    " Worker processs");
                                log.debug("Number of CPU cores available " + numCPUs);
                                if (workerProcessCount > numCPUs) {
                                    log.warn("Worker Process Count is greater than Number of CPU Cores. Restricing count to CPU core count");
                                    workerProcessCount = numCPUs;
                                }
                                log.debug("Primary cluster node running on PID " + node_process_1.default.pid);
                                for (var i = 0; i < workerProcessCount; i++) {
                                    node_cluster_1.default.fork();
                                }
                                node_cluster_1.default.on("exit", function (worker, code, signal) {
                                    log.debug("Worker process PID " + worker.process.pid + " has exited.");
                                });
                            }
                            else {
                                log.debug("Starting servers on worker process PID " + node_process_1.default.pid);
                                startServers(app, config, log);
                            }
                        }
                        else {
                            log.debug("Starting servers on process PID " + node_process_1.default.pid);
                            startServers(app, config, log);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();

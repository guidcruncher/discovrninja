"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionSchema = void 0;
var servicedefinition_1 = require("@customtypes/servicedefinition");
var mongoose_1 = require("@nestjs/mongoose");
exports.ServiceDefinitionSchema = mongoose_1.SchemaFactory.createForClass(servicedefinition_1.ServiceDefinition);

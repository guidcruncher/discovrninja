"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionListSchema = void 0;
var servicedefinition_1 = require("@customtypes/servicedefinition");
var mongoose_1 = require("@nestjs/mongoose");
exports.ServiceDefinitionListSchema = mongoose_1.SchemaFactory.createForClass(servicedefinition_1.ServiceDefinitionList);

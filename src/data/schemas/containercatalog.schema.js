"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerCatalogSchema = void 0;
var portainer_template_types_1 = require("@catalog/portainer-template.types");
var mongoose_1 = require("@nestjs/mongoose");
exports.ContainerCatalogSchema = mongoose_1.SchemaFactory.createForClass(portainer_template_types_1.ContainerCatalog);

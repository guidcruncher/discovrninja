"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = void 0;
var portainer_template_types_1 = require("@catalog/portainer-template.types");
var servicedefinition_1 = require("@customtypes/servicedefinition");
var mongoose_1 = require("@nestjs/mongoose");
var containercatalog_schema_1 = require("@schemas/containercatalog.schema");
var containerstats_schema_1 = require("@schemas/containerstats.schema");
var icons_schema_1 = require("@schemas/icons.schema");
var portainer_schema_1 = require("@schemas/portainer.schema");
var servicedefinition_schema_1 = require("@schemas/servicedefinition.schema");
var Schemas = /** @class */ (function () {
    function Schemas() {
    }
    Schemas.CompileModels = function () {
        return mongoose_1.MongooseModule.forFeature([
            { name: servicedefinition_1.ServiceDefinition.name, schema: servicedefinition_schema_1.ServiceDefinitionSchema },
            { name: portainer_template_types_1.Template.name, schema: portainer_schema_1.TemplateSchema },
            { name: containerstats_schema_1.ContainerStats.name, schema: containerstats_schema_1.ContainerStatsSchema },
            { name: icons_schema_1.Icon.name, schema: icons_schema_1.IconSchema },
            { name: portainer_template_types_1.ContainerCatalog.name, schema: containercatalog_schema_1.ContainerCatalogSchema },
        ]);
    };
    return Schemas;
}());
exports.Schemas = Schemas;

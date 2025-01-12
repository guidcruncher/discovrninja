"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateSchema = exports.RepositorySettingSchema = exports.EnvSettingSchema = exports.VolumeSettingSchema = void 0;
var portainer_template_types_1 = require("@catalog/portainer-template.types");
var mongoose_1 = require("@nestjs/mongoose");
exports.VolumeSettingSchema = mongoose_1.SchemaFactory.createForClass(portainer_template_types_1.VolumeSetting);
exports.EnvSettingSchema = mongoose_1.SchemaFactory.createForClass(portainer_template_types_1.EnvSetting);
exports.RepositorySettingSchema = mongoose_1.SchemaFactory.createForClass(portainer_template_types_1.RepositorySetting);
exports.TemplateSchema = mongoose_1.SchemaFactory.createForClass(portainer_template_types_1.Template);

import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { ServiceDefinitionService } from "./service-definition.service";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get("host.mongo.url"),
        dbName: "discovrninja",
      }),
    }),
    Schemas.CompileModels(),
  ],
  controllers: [],
  providers: [ServiceDefinitionService],
  exports: [MongooseModule, ServiceDefinitionService],
})
export class DataModule {}

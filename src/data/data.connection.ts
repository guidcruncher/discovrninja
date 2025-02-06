import { Injectable } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
const mongoose = require("mongoose");

@Injectable()
export class MongoConnection {
  constructor(
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
  ) {}

  public static setup() {
    return MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get("host.mongo.url"),
        dbName: config.get("host.mongo.database") ?? "discovrninja",
      }),
    });
  }

  public connect(): Connection {
    const url = this.configService.get("host.mongo.url");
    const dbName =
      this.configService.get("host.mongo.database") ?? "discovrninja";
    let fullUrl = url + dbName;
    if (!url.endsWith("/")) {
      fullUrl = url + "/" + dbName;
    }
    return mongoose.connect(fullUrl, { authSource: "admin" });
  }
}

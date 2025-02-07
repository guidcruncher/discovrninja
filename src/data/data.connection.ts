import { Injectable } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection, ClientSession } from "mongoose";
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

async transaction <T>(cb: (session: ClientSession) => Promise<T>): Promise<T> {
const session = await this.connection.startSession();

try {
session.startTransaction();
const result = await cb(session);
await session.commitTransaction();
return result;
} catch (err) {
await session.abortTransaction();
throw err;
} finally {
await session.endSession();
}
}

async getSession() : Promise<ClientSession> {
return await this.connection.startSession();
}
}


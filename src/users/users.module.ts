import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

import configuration from "../config/configuration";
import { UsersService } from "./users.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: {
            transport: {
              target: "pino-pretty",
              options: { singleLine: true },
            },
            useLevel: config.get("host.logging.level"),
          },
        };
      },
    }),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

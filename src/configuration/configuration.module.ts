import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

import { ConfigReader } from "./configuration.reader";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ConfigReader.Read],
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
  controllers: [],
  providers: [],
  exports: [ ConfigModule, LoggerModule ],
})
export class ConfigurationModule {}

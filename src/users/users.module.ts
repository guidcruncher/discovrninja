import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

import { UsersService } from "./users.service";

@Module({
  imports: [
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

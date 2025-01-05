import { AppHost } from "@customtypes/apphost";
import { Module } from "@nestjs/common";

@Module({
  providers: [AppHost],
  exports: [AppHost],
})
export class AppHostModule {}

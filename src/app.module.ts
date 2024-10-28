import { Module } from "@nestjs/common";
import { AppController } from "@controllers/app.controller";
import { AppService } from "@services/app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ScheduleModule } from "@nestjs/schedule";
import { join } from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveStaticOptions: {
        cacheControl: false,
        etag: false,
      },
      serveRoot: "/documentation/",
      rootPath: join(__dirname, "..", "docs"),
    }),
    ServeStaticModule.forRoot({
      serveStaticOptions: {
        cacheControl: false,
        etag: false,
        // @ts-expect-error Fastify option which is missing in nestjs typings
        decorateReply: false,
      },
      rootPath: join(__dirname, "..", "client", "dist"),
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

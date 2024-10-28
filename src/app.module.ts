import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

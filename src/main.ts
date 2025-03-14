import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import process from "node:process";

import { AppModule } from "@app/app.module";
import { ErrorExceptionFilter } from "@app/exception.filter";
import { HandlebarsFactory } from "@customtypes/handlebars-static";
import compression from "@fastify/compress";
import secureSession from "@fastify/secure-session";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as fs from "fs";
import path from "path";

async function startServers(app: any, config: any, log: any) {
  log.debug("Starting Application Web Server");
  let serverPort: number = parseInt(config.get("host.appServer.listenPort"));
  let serverHost: string = config.get("host.appServer.listenAddress");

  if (process.env.IN_DOCKER) {
    serverHost = "0.0.0.0";
    serverPort = 5001;
  }

  app.listen(serverPort, serverHost);
}

async function bootstrap() {
  const { hideBin } = require("yargs/helpers");

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({}),
  );

  await app.register(secureSession, {
    secret:
      "89e197b0213b6c63147f8916153eaf8e87d72c1cd1a3b7b1dc0c1a249a7f9519737472854072b6df9ee55ad054676e38c7cddecd6b4cebe5ba0db85ba64e49d8a2afc6137dc0f8da6981d8c7efb19105eb945fdefc17424853bd73c79968b56ec913c80a16540f5cf34a5698b68c3390e2ac7e0c86de425f0f82846deb3225e1",
    salt: "09282eec307cahtf",
  });

  // await app.register(fastifyCookie, {
  //   secret:
  //    "f7a4169f410ec82678c101af2a7b8b3799bd97599e47fb55aa38faca285c9d1f2215d989ef6331bb210e56a93729257cb31e695275f1815ad7e719ed0b58a936",
  // });

  await app.register(compression, { encodings: ["gzip", "deflate"] });

  app.enableCors();

  const clientBase =
    process.env.CLIENT_BASE ?? path.join(__dirname, "..", "client");

  const log = new Logger("Bootstrap");
  const config: ConfigService = app.get(ConfigService);
  const nodeEnv: string = process.env.NODE_ENV ?? "development";

  app.useStaticAssets({
    root: path.join(clientBase, "public"),
    prefix: "/assets/",
    cacheControl: false,
    etag: false,
    decorateReply: true,
  });

  if (config.get("desktop.enableLocalIconCache") == true) {
    let dirPath = config.get("desktop.localIconCacheFolder");

    if (process.env.IN_DOCKER) {
      dirPath = "/iconcache";
    }

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    app.useStaticAssets({
      root: dirPath,
      prefix: "/icons/",
      cacheControl: false,
      etag: false,
      decorateReply: false,
    });
  }

  app.useGlobalFilters(new ErrorExceptionFilter());

  const Handlebars = HandlebarsFactory.getInstance();
  Handlebars.setViewEngine(app);

  log.debug("Building Swagger API Documentation");
  const swaggerConfig = new DocumentBuilder()
    .setTitle("DiscovrNinja API")
    .setDescription("The DiscovrNinja service API")
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/docs", app, documentFactory);

  if (config.get("host.cluster.enabled") == true) {
    log.debug("Enabling Worker process clustering");

    if (cluster.isPrimary) {
      const numCPUs = availableParallelism();
      let workerProcessCount = parseInt(
        config.get("host.cluster.workerProcessCount"),
      );
      log.debug(
        "Enabling clustering using " + workerProcessCount + " Worker processs",
      );
      log.debug("Number of CPU cores available " + numCPUs);

      if (workerProcessCount > numCPUs) {
        log.warn(
          "Worker Process Count is greater than Number of CPU Cores. Restricing count to CPU core count",
        );
        workerProcessCount = numCPUs;
      }

      log.debug("Primary cluster node running on PID " + process.pid);
      for (let i = 0; i < workerProcessCount; i++) {
        cluster.fork();
      }

      cluster.on("exit", (worker, code, signal) => {
        log.debug("Worker process PID " + worker.process.pid + " has exited.");
      });
    } else {
      log.debug("Starting servers on worker process PID " + process.pid);
      startServers(app, config, log);
    }
  } else {
    log.debug("Starting servers on process PID " + process.pid);
    startServers(app, config, log);
  }
}

bootstrap();

export { bootstrap };

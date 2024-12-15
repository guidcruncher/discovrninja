import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import process from "node:process";

import { HandlebarsFactory } from "@customtypes/handlebars-static";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { TasksService } from "@services/tasks.service";
import fs from "fs";
import path from "path";

import { AppModule } from "./app.module";

async function startServers(app: any, config: any, log: any) {
  log.debug("Starting Application Web Server");
  const serverPort: number = parseInt(config.get("host.appServer.listenPort"));
  const serverHost: string = config.get("host.appServer.listenAddress");
  
  if (process.env.IN_DOCKER) {
    serverHost = "127.0.0.1";
  }

  await app.listen(serverPort, serverHost);
  log.debug(`Application is running on: ${await app.getUrl()}`);
}

async function bootstrap() {
  const { hideBin } = require("yargs/helpers");

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({}),
  );

  app.enableCors();

  app.useStaticAssets({
    root: path.join(__dirname, "..", "client", "public"),
    prefix: "/assets/",
    cacheControl: false,
    etag: false,
    decorateReply: true,
  });

  const log = new Logger("Bootstrap");
  const config: ConfigService = app.get(ConfigService);
  const tasks: TasksService = app.get(TasksService);
  const nodeEnv: string = process.env.NODE_ENV ?? "development";

  const getPartials = () => {
    const templatesPath = path.join(__dirname, "..", "client", "views");
    const partialsDir = path.join(templatesPath, "partials");
    const partials = {};
    fs.readdirSync(partialsDir, { withFileTypes: true })
      .filter((file) => {
        return path.extname(file.name) === ".hbs";
      })
      .forEach((file) => {
        const basename = path.basename(file.name, ".hbs");
        const filePath = path.join(partialsDir, file.name);
        partials[basename] = path.relative(templatesPath, filePath);
      });
    return partials;
  };

  const Handlebars = HandlebarsFactory.getInstance();

  app.setViewEngine({
    engine: {
      handlebars: Handlebars,
    },
    templates: path.join(__dirname, "..", "client", "views"),
    // layout: "./templates/layout.hbs",
    options: {
      layoutsDir: path.join(__dirname, "..", "client", "views", "layouts"),
      partials: getPartials(),
    },
  });

  log.debug("Building Swagger API Documentation");
  const swaggerConfig = new DocumentBuilder()
    .setTitle("DiscovrNinja API")
    .setDescription("The DiscovrNinja service API")
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/docs", app, documentFactory);

  tasks.initalJobs().then((r) => {
    if (config.get("host.cluster.enabled") == true) {
      log.debug("Enabling Worker process clustering");

      if (cluster.isPrimary) {
        const numCPUs = availableParallelism();
        let workerProcessCount = parseInt(
          config.get("host.cluster.workerProcessCount"),
        );
        log.debug(
          "Enabling clustering using " +
            workerProcessCount +
            " Worker processs",
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
          log.debug(
            "Worker process PID " + worker.process.pid + " has exited.",
          );
        });
      } else {
        log.debug("Starting servers on worker process PID " + process.pid);
        startServers(app, config, log);
      }
    } else {
      log.debug("Starting servers on process PID " + process.pid);
      startServers(app, config, log);
    }
  });
}

bootstrap();

export { bootstrap };

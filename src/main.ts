import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { apiReference } from "@scalar/nestjs-api-reference"
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

async function bootstrap() {

   const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle("DiscovrNinja API")
    .setDescription("The DiscovrNinja service API")
    .setVersion("1.0")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = SwaggerModule.createDocument(app, config);
//  SwaggerModule.setup("docs", app, documentFactory);

  app.use(
    "/documentation/api",
    apiReference({
      withFastify: true,
      theme: "purple",
      spec: {
        content: document,
      },
    }),
  );

  const serverPort: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 5001;
  const serverHost: string = process.env.HOST ?? "0.0.0.0";

  await app.listen(serverPort, serverHost);
}

bootstrap();

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { root, discovery } from "@routes/routes";

import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = Fastify({ logger: true });

const swaggerOptions = {
  swagger: {
    consumes: ["application/json"],
    info: {
      description: "DiscovrNinja API.",
      title: "DiscovrNinja",
      version: "1.0.0",
    },
    openapi: "3.0.0",
    produces: ["application/json"],
    schemes: ["http", "https"],
    tags: [{ description: "Default", name: "Default" }],
  },
};

const swaggerUiOptions = {
  exposeRoute: true,
  routePrefix: "/docs",
};

server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

server.register(root);
server.register(discovery);

const start = async () => {
  try {
    await server.listen({ host: "0.0.0.0", port: 5000 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

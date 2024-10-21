import AutoLoad from "@fastify/autoload";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify";
import path from "path";

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

const app = Fastify({
  logger: true,
});

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register(AutoLoad, {
  dir: path.join(__dirname, "routes"),
  options: {},
});

app.ready();

app.listen({ host: "0.0.0.0", port: 5000 }, (err, address) => {
  if (err) {
    throw err;
  }
  // console.log("Server is now listening on ${address}");
});

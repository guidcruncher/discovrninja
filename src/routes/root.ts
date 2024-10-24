export function root(fastify, opts) {
  fastify.get("/", (request, reply) => {
    reply.code(200).send({});
  });
}

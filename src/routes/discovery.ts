import { DockerDiscoveryAgent } from "@discovery/dockerdiscoveryagent";

export function discovery(fastify, opts) {
  fastify.get(
    "/discover",
    {
      schema: {
        description: "Performs a service discovery and return the results.",
        tags: [],
        summary: "Performs a service discovery and return the results.",
        security: [],
        params: {},
      },
    },
    (request, reply) => {
      const agent = new DockerDiscoveryAgent();
      agent
        .scan()
        .then((result) => {
          reply.code(200).send(result);
        })
        .catch((err) => {
          reply.code(500).send(err);
        });
    },
  );
}

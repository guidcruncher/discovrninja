import { DockerDiscoveryAgent } from "discovery/dockerdiscoveryagent";

export default (fastify, opts) => {
  fastify.get("/", (request, reply) => {
    const agent = new DockerDiscoveryAgent();

    agent
      .scan()
      .then((result) => {
        reply.code(200).send(result);
      })
      .catch((err) => {
        reply.code(500).send(err);
      });
  });
};

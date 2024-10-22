import { DockerDiscoveryAgent } from "discovery/dockerdiscoveryagent";

module.exports = (fastify, opts) => {
  fastify.get("/", (request, reply) => {
    return { root: true };
  });
};

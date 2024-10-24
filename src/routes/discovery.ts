import { DockerDiscoveryAgent } from "@discovery/dockerdiscoveryagent";
import { IpUtilities } from "@dns/iputilities";

export function discovery(fastify, opts) {
  fastify.get(
    "/discover",
    {
      schema: {
        description: "Performs a service discovery and return the results.",
        summary: "Performs a service discovery and return the results.",
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

  fastify.get(
    "/discover/source/hosts",
    {
      schema: {
        description: "Performs a service discovery and returns host file.",
        summary: "Return the hosts file from a scan.",
      },
    },
    (request, reply) => {
      const agent = new DockerDiscoveryAgent();
      const iputilities = new IpUtilities();
      agent
        .scan()
        .then((result) => {
          reply.code(200).send(iputilities.convertSourceToHosts(result));
        })
        .catch((err) => {
          reply.code(500).send(err);
        });
    },
  );
}

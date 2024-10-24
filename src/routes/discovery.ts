import { DockerDiscoveryAgent } from "@discovery/dockerdiscoveryagent";
import { IpUtilities } from "@dns/iputilities";
import { CaddyServerUtility } from "@web/caddyserver";

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
        summary: "Return the source hosts file from a scan.",
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

  fastify.get(
    "/discover/target/hosts",
    {
      schema: {
        description: "Performs a service discovery and returns host file.",
        summary: "Return the target hosts file from a scan.",
      },
    },
    (request, reply) => {
      const agent = new DockerDiscoveryAgent();
      const iputilities = new IpUtilities();
      agent
        .scan()
        .then((result) => {
          reply.code(200).send(iputilities.convertTargetToHosts(result));
        })
        .catch((err) => {
          reply.code(500).send(err);
        });
    },
  );

  fastify.get(
    "/discover/web/config",
    {
      schema: {
        description:
          "Performs a service discovery and returns Caddy server configuration.",
        summary:
          "Return the Caddy server configuration for the service discovery scan.",
      },
    },
    (request, reply) => {
      const agent = new DockerDiscoveryAgent();
      const caddyServer = new CaddyServerUtility();
      agent
        .scan()
        .then((result) => {
          reply.code(200).send(caddyServer.getServerConfiguration(result));
        })
        .catch((err) => {
          reply.code(500).send(err);
        });
    },
  );
}

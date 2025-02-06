import { ContainerCreateOptions, ContainerInspectInfo } from "dockerode";

import { ContainerCreateOptionsHelper } from "./ContainerCreateOptionsHelper";

describe("ContainerCreateOptionsHelper", () => {
  describe("fromInspectInfo", () => {
    it("should correctly map properties from ContainerInspectInfo to ContainerCreateOptions", () => {
      const inspectInfo: ContainerInspectInfo = {
        Name: "/containerName",
        Platform: "linux",
        Config: {
          Hostname: "container-hostname",
          Domainname: "container-domain",
          User: "root",
          AttachStdin: true,
          AttachStdout: true,
          AttachStderr: true,
          Tty: false,
          OpenStdin: true,
          StdinOnce: false,
          Env: ["VAR1=value1", "VAR2=value2"],
          Cmd: ["node", "app.js"],
          Entrypoint: ["node"],
          Image: "node:14",
          Labels: { key: "value" },
          Volumes: { "/data": {} },
          WorkingDir: "/usr/src/app",
          ExposedPorts: { "8080/tcp": {} },
          OnBuild: ["RUN npm install"],
        },
        NetworkSettings: {
          MacAddress: "02:42:ac:11:00:02",
          Networks: {
            bridge: {
              IPAddress: "172.17.0.2",
            },
          },
        },
        HostConfig: { Memory: 512000000 },
      };

      const expectedCreateOptions: ContainerCreateOptions = {
        name: "/containerName",
        platform: "linux",
        Hostname: "container-hostname",
        Domainname: "container-domain",
        User: "root",
        AttachStdin: true,
        AttachStdout: true,
        AttachStderr: true,
        Tty: false,
        OpenStdin: true,
        StdinOnce: false,
        Env: ["VAR1=value1", "VAR2=value2"],
        Cmd: ["node", "app.js"],
        Entrypoint: ["node"],
        Image: "node:14",
        Labels: { key: "value" },
        Volumes: { "/data": {} },
        WorkingDir: "/usr/src/app",
        ExposedPorts: { "8080/tcp": {} },
        OnBuild: ["RUN npm install"],
        MacAddress: "02:42:ac:11:00:02",
        HostConfig: { Memory: 512000000 },
        NetworkingConfig: {
          bridge: {
            IPAddress: "172.17.0.2",
          },
        },
      };

      const result = ContainerCreateOptionsHelper.fromInspectInfo(inspectInfo);

      expect(result).toEqual(expectedCreateOptions);
    });

    it("should handle missing or undefined properties gracefully", () => {
      const inspectInfo: ContainerInspectInfo = {
        Name: "/containerName",
        Platform: undefined,
        Config: {
          Hostname: undefined,
          Domainname: undefined,
          User: undefined,
          AttachStdin: undefined,
          AttachStdout: undefined,
          AttachStderr: undefined,
          Tty: undefined,
          OpenStdin: undefined,
          StdinOnce: undefined,
          Env: undefined,
          Cmd: undefined,
          Entrypoint: undefined,
          Image: undefined,
          Labels: undefined,
          Volumes: undefined,
          WorkingDir: undefined,
          ExposedPorts: undefined,
          OnBuild: undefined,
        },
        NetworkSettings: {
          MacAddress: undefined,
          Networks: undefined,
        },
        HostConfig: undefined,
      };

      const expectedCreateOptions: ContainerCreateOptions = {
        name: "/containerName",
        platform: undefined,
        Hostname: undefined,
        Domainname: undefined,
        User: undefined,
        AttachStdin: undefined,
        AttachStdout: undefined,
        AttachStderr: undefined,
        Tty: undefined,
        OpenStdin: undefined,
        StdinOnce: undefined,
        Env: undefined,
        Cmd: undefined,
        Entrypoint: undefined,
        Image: undefined,
        Labels: undefined,
        Volumes: undefined,
        WorkingDir: undefined,
        ExposedPorts: undefined,
        OnBuild: undefined,
        MacAddress: undefined,
        HostConfig: undefined,
        NetworkingConfig: undefined,
      };

      const result = ContainerCreateOptionsHelper.fromInspectInfo(inspectInfo);

      expect(result).toEqual(expectedCreateOptions);
    });

    it("should return an empty object when given an empty ContainerInspectInfo object", () => {
      const inspectInfo: ContainerInspectInfo = {} as any;

      const result = ContainerCreateOptionsHelper.fromInspectInfo(inspectInfo);

      expect(result).toEqual({});
    });
  });
});

import { DockerService } from "@container/docker.service";
import { DiscoveryEntry } from "@customtypes/discoveryentry";
import { DiscoveryScan } from "@customtypes/discoveryscan";
import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { IpUtilities } from "@helpers/iputilities";
import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import Dockerode from "dockerode";

import { DockerDiscoveryService } from "./docker-discovery.service"; // Adjust the path accordingly

// Mock dependencies
jest.mock("@container/docker.service");
jest.mock("@helpers/iputilities");
jest.mock("dockerode");

describe("DockerDiscoveryService", () => {
  let service: DockerDiscoveryService;
  let dockerServiceMock: jest.Mocked<DockerService>;
  let configServiceMock: jest.Mocked<ConfigService>;
  let dockerodeMock: jest.Mocked<Dockerode>;

  beforeEach(async () => {
    dockerServiceMock = {
      createDocker: jest.fn().mockReturnValue(new Dockerode()),
      getContainer: jest.fn(),
    };

    configServiceMock = {
      get: jest.fn().mockReturnValue(true), // Mock discovery enabled
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DockerDiscoveryService,
        { provide: DockerService, useValue: dockerServiceMock },
        { provide: ConfigService, useValue: configServiceMock },
      ],
    }).compile();

    service = module.get<DockerDiscoveryService>(DockerDiscoveryService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("scan", () => {
    it("should scan and return service definitions", async () => {
      const mockScanResult = new DiscoveryScan();
      mockScanResult.entries = [new DiscoveryEntry()];
      const mockServices =
        ServiceDefinitionList.fromDiscoveryScan(mockScanResult);

      // Mock internalScan to return a mocked result
      jest.spyOn(service, "internalScan").mockResolvedValue(mockScanResult);

      const result = await service.scan();
      expect(result).toEqual(mockServices);
    });

    it("should reject if internalScan fails", async () => {
      // Mock internalScan to reject with an error
      jest
        .spyOn(service, "internalScan")
        .mockRejectedValue(new Error("Scan failed"));

      await expect(service.scan()).rejects.toThrowError("Scan failed");
    });
  });

  describe("internalScan", () => {
    it("should handle scanning when Docker discovery is enabled", async () => {
      const mockContainers = [
        {
          Id: "container1",
          Config: { Labels: {} },
          NetworkSettings: {},
          HostConfig: { NetworkMode: "bridge" },
        },
      ];

      // Mock Dockerode's listContainers method
      dockerodeMock = new Dockerode() as jest.Mocked<Dockerode>;
      dockerodeMock.listContainers = jest.fn((options, callback) =>
        callback(null, mockContainers),
      );

      const mockContainer = {
        Id: "container1",
        Config: { Labels: {} },
        NetworkSettings: {},
        HostConfig: { NetworkMode: "bridge" },
      };

      // Mock the response for getContainer
      dockerServiceMock.getContainer.mockResolvedValue(mockContainer);

      const result = await service.internalScan();
      expect(result.entries.length).toBeGreaterThan(0);
      expect(dockerodeMock.listContainers).toHaveBeenCalledWith(
        { all: true, size: false },
        expect.any(Function),
      );
    });

    it("should reject with an error if Docker API call fails", async () => {
      // Simulate a Docker error in listContainers
      dockerodeMock = new Dockerode() as jest.Mocked<Dockerode>;
      dockerodeMock.listContainers = jest.fn((options, callback) =>
        callback(new Error("Docker error"), null),
      );

      await expect(service.internalScan()).rejects.toThrowError("Docker error");
    });

    it("should reject if discovery is not enabled", async () => {
      // Mock configService to return false for discovery.docker.enabled
      configServiceMock.get.mockReturnValueOnce(false);

      const result = await service.internalScan();
      expect(result).toBeUndefined();
    });
  });

  describe("resolveSourceAddress", () => {
    it("should resolve source address correctly", async () => {
      const mockContainer = {
        Id: "container1",
        Config: {
          Labels: {
            "com.guidcruncher.discovrninja.proxy": "proxy-address",
          },
        },
        NetworkSettings: {},
        HostConfig: { NetworkMode: "bridge" },
      };

      const mockEntry = new DiscoveryEntry();
      mockEntry.containerName = "test-container";

      const ipUtilsMock = {
        getHostIpAddress: jest.fn().mockReturnValue("127.0.0.1"),
      };
      IpUtilities.mockImplementation(() => ipUtilsMock);

      const result = await service.resolveSourceAddress(
        mockEntry,
        mockContainer,
      );
      expect(result.sourceAddress.address).toBe("proxy-address");
    });

    it("should resolve source address for network mode container", async () => {
      const mockContainer = {
        Id: "container1",
        Config: { Labels: {} },
        NetworkSettings: { Networks: { bridge: { IPAddress: "192.168.1.1" } } },
        HostConfig: { NetworkMode: "container:parent-container" },
      };

      const parentContainer = {
        NetworkSettings: { Networks: { bridge: { IPAddress: "192.168.1.2" } } },
        HostConfig: { NetworkMode: "bridge" },
      };

      // Mock the method for resolving networks
      jest
        .spyOn(service, "resolveNetworks")
        .mockReturnValue([
          { address: "192.168.1.2", network: "bridge", preferred: true },
        ]);

      const mockEntry = new DiscoveryEntry();
      mockEntry.containerName = "test-container";

      const ipUtilsMock = {
        getHostIpAddress: jest.fn().mockReturnValue("127.0.0.1"),
      };
      IpUtilities.mockImplementation(() => ipUtilsMock);

      const result = await service.resolveSourceAddress(
        mockEntry,
        mockContainer,
      );
      expect(result.sourceAddress.address).toBe("http://127.0.0.1:80");
    });
  });

  describe("resolveNetworks", () => {
    it("should resolve network addresses correctly", () => {
      const mockContainer = {
        NetworkSettings: {
          Networks: {
            bridge: { IPAddress: "192.168.1.1" },
            host: { IPAddress: "127.0.0.1" },
          },
        },
        HostConfig: { NetworkMode: "bridge" },
      };

      const result = service.resolveNetworks(
        mockContainer.NetworkSettings,
        "bridge",
      );
      expect(result.length).toBe(2);
      expect(result[0].address).toBe("192.168.1.1");
      expect(result[1].address).toBe("127.0.0.1");
    });
  });

  describe("getScheme", () => {
    it("should return http scheme for non-443 ports", () => {
      const result = service.getScheme("80");
      expect(result).toBe("http:");
    });

    it("should return https scheme for port 443", () => {
      const result = service.getScheme("443");
      expect(result).toBe("https:");
    });
  });
});

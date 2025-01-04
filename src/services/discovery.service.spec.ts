import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { DiscoveryService } from "@services/discovery.service";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import { Model } from "mongoose";

jest.mock("@services/docker.discovery.service");
jest.mock("@services/file.discovery.service");
jest.mock("@nestjs/mongoose");
jest.mock("@nestjs/common", () => ({
  Logger: {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
  },
}));

describe("DiscoveryService", () => {
  let discoveryService: DiscoveryService;
  let dockerDiscoveryService: DockerDiscoveryService;
  let fileDiscoveryService: FileDiscoveryService;
  let serviceDefModel: Model<ServiceDefinition>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DiscoveryService,
        DockerDiscoveryService,
        FileDiscoveryService,
        {
          provide: getModelToken(ServiceDefinition.name),
          useValue: {
            find: jest.fn(),
            findOneAndUpdate: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    discoveryService = module.get<DiscoveryService>(DiscoveryService);
    dockerDiscoveryService = module.get<DockerDiscoveryService>(
      DockerDiscoveryService,
    );
    fileDiscoveryService =
      module.get<FileDiscoveryService>(FileDiscoveryService);
    serviceDefModel = module.get<Model<ServiceDefinition>>(
      getModelToken(ServiceDefinition.name),
    );
  });

  describe("saveDefinition", () => {
    it("should save a service definition to the database", async () => {
      const containerName = "mock-container";
      const data = {
        containerName,
        hostname: "mock-hostname",
        name: "mock-name",
        proxy: "mock-proxy",
        public: true,
        iconSlug: "mock-icon",
        iconCatalog: "mock-catalog",
      };

      const mockExistingDefinition = [
        { ipaddress: "192.168.0.1", created: new Date() },
      ];
      const mockUpdatedDefinition = {
        ...data,
        updated: new Date(),
        edited: true,
      };

      serviceDefModel.find = jest
        .fn()
        .mockResolvedValue(mockExistingDefinition);
      serviceDefModel.findOneAndUpdate = jest
        .fn()
        .mockResolvedValue(mockUpdatedDefinition);

      const result = await discoveryService.saveDefinition(containerName, data);

      expect(serviceDefModel.find).toHaveBeenCalledWith({
        containerName: containerName,
      });
      expect(serviceDefModel.findOneAndUpdate).toHaveBeenCalledWith(
        { containerName: data.containerName.toLowerCase() },
        expect.objectContaining({
          containerName: data.containerName.toLowerCase(),
        }),
        { upsert: true },
      );
      expect(result).toEqual(mockUpdatedDefinition);
    });

    it("should handle error when saving definition", async () => {
      const containerName = "mock-container";
      const data = { containerName, hostname: "mock-hostname" };
      serviceDefModel.find = jest
        .fn()
        .mockRejectedValue(new Error("Database error"));

      await expect(
        discoveryService.saveDefinition(containerName, data),
      ).rejects.toThrowError("Database error");
    });
  });

  describe("getDefinition", () => {
    it("should return the service definition for a given containerName", async () => {
      const containerName = "mock-container";
      const mockDefinition = [{ name: "mock-service", containerName }];

      serviceDefModel.find = jest.fn().mockResolvedValue(mockDefinition);

      const result = await discoveryService.getDefinition(containerName);

      expect(serviceDefModel.find).toHaveBeenCalledWith({ containerName });
      expect(result).toEqual(mockDefinition);
    });

    it("should handle error when retrieving definition", async () => {
      const containerName = "mock-container";
      serviceDefModel.find = jest
        .fn()
        .mockRejectedValue(new Error("Database error"));

      await expect(
        discoveryService.getDefinition(containerName),
      ).rejects.toThrowError("Database error");
    });
  });

  describe("getAllDefinitions", () => {
    it("should return all service definitions", async () => {
      const mockDefinitions = [{ name: "service1" }, { name: "service2" }];
      serviceDefModel.find = jest.fn().mockResolvedValue(mockDefinitions);

      const result = await discoveryService.getAllDefinitions();

      expect(serviceDefModel.find).toHaveBeenCalledWith({});
      expect(result).toEqual(mockDefinitions);
    });
  });

  describe("changeIcon", () => {
    it("should change the icon for a service", async () => {
      const containerName = "mock-container";
      const catalog = "mock-catalog";
      const slug = "mock-slug";

      const mockUpdatedDefinition = {
        containerName,
        iconCatalog: catalog,
        iconSlug: slug,
        edited: true,
        updated: new Date(),
      };

      serviceDefModel.findOneAndUpdate = jest
        .fn()
        .mockResolvedValue(mockUpdatedDefinition);

      const result = await discoveryService.changeIcon(
        containerName,
        catalog,
        slug,
      );

      expect(serviceDefModel.findOneAndUpdate).toHaveBeenCalledWith(
        { containerName: containerName },
        expect.objectContaining({ iconCatalog: catalog, iconSlug: slug }),
      );
      expect(result).toEqual(mockUpdatedDefinition);
    });

    it("should handle error when changing icon", async () => {
      const containerName = "mock-container";
      const catalog = "mock-catalog";
      const slug = "mock-slug";

      serviceDefModel.findOneAndUpdate = jest
        .fn()
        .mockRejectedValue(new Error("Database error"));

      await expect(
        discoveryService.changeIcon(containerName, catalog, slug),
      ).rejects.toThrowError("Database error");
    });
  });

  describe("scan", () => {
    it("should run a scan and store the result in MongoDB", async () => {
      const mockServiceList = new ServiceDefinitionList();
      mockServiceList.services = [{ name: "service1" }, { name: "service2" }];

      dockerDiscoveryService.scan = jest
        .fn()
        .mockResolvedValue({ services: mockServiceList.services });
      fileDiscoveryService.scan = jest
        .fn()
        .mockResolvedValue({ services: mockServiceList.services });

      discoveryService.storeInMongo = jest.fn().mockResolvedValue(true);

      const result = await discoveryService.scan();

      expect(dockerDiscoveryService.scan).toHaveBeenCalled();
      expect(fileDiscoveryService.scan).toHaveBeenCalled();
      expect(discoveryService.storeInMongo).toHaveBeenCalledWith(
        mockServiceList,
      );
      expect(result).toEqual(mockServiceList);
    });

    it("should handle errors during scan", async () => {
      dockerDiscoveryService.scan = jest
        .fn()
        .mockRejectedValue(new Error("Docker scan failed"));
      fileDiscoveryService.scan = jest.fn().mockResolvedValue({ services: [] });

      await expect(discoveryService.scan()).rejects.toThrowError(
        "Docker scan failed",
      );
    });
  });
});

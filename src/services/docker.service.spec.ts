import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { ContainerStats } from "@schemas/containerstats.schema";
import { DockerRepositoryService } from "@services/docker.repository.service";
import Dockerode from "dockerode";
import { Model } from "mongoose";

import { DockerService } from "./docker.service";

// Mocking external modules
jest.mock("fs");
jest.mock("path");
jest.mock("@helpers/containercreateoptionshelper");
jest.mock("@services/docker.repository.service");
jest.mock("@nestjs/config");

describe("DockerService", () => {
  let dockerService: DockerService;
  let dockerRepositoryService: DockerRepositoryService;
  let configService: ConfigService;
  let containerStatsModel: Model<ContainerStats>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DockerService,
        {
          provide: DockerRepositoryService,
          useValue: {
            queryRepositoryTags: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockImplementation((key: string) => ""),
          },
        },
        {
          provide: Model,
          useValue: {
            find: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    dockerService = module.get<DockerService>(DockerService);
    dockerRepositoryService = module.get<DockerRepositoryService>(
      DockerRepositoryService,
    );
    configService = module.get<ConfigService>(ConfigService);
    containerStatsModel = module.get<Model<ContainerStats>>(Model);
  });

  it("should be defined", () => {
    expect(dockerService).toBeDefined();
  });

  describe("getContainerDashboard", () => {
    it("should return formatted container dashboard data", async () => {
      const mockResults = [
        {
          created: new Date(),
          cpuPercent: 10,
          memoryUsage: 1024,
          memoryFreePercent: 20,
          memoryLimit: 2048,
        },
      ];

      jest.spyOn(containerStatsModel, "find").mockReturnValueOnce({
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValueOnce(mockResults),
      } as any);

      const result = await dockerService.getContainerDashboard(
        "container-id",
        10,
      );

      expect(result).toEqual({
        periods: [mockResults[0].created],
        cpuPercent: [mockResults[0].cpuPercent],
        memoryUsage: [mockResults[0].memoryUsage],
        memoryFreePercent: [mockResults[0].memoryFreePercent / 100],
        memoryLimit: [mockResults[0].memoryLimit],
      });
    });

    it("should throw an error if database query fails", async () => {
      jest.spyOn(containerStatsModel, "find").mockReturnValueOnce({
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockRejectedValueOnce(new Error("DB Error")),
      } as any);

      await expect(
        dockerService.getContainerDashboard("container-id", 10),
      ).rejects.toThrow("DB Error");
    });
  });

  describe("getContainer", () => {
    it("should return container details", async () => {
      const mockContainerData = {
        Name: "/container-name",
        Config: {
          Image: "ubuntu",
          Labels: {},
        },
      };

      const mockDockerode = {
        getContainer: jest.fn().mockReturnThis(),
        inspect: jest
          .fn()
          .mockImplementation((cb) => cb(null, mockContainerData)),
      };

      jest
        .spyOn(dockerService, "createDocker")
        .mockReturnValueOnce(mockDockerode as any);

      const result = await dockerService.getContainer("container-id");

      expect(result).toEqual({
        ...mockContainerData,
        Name: "container-name",
        Config: {
          Image: "docker.io/library/ubuntu",
          Labels: {},
        },
        publicUrl: null,
        editor: {
          config: "",
          project: "",
          environment: "",
          workingFolder: "",
          editable: false,
          projectPath: "",
        },
      });
    });

    it("should handle errors and reject", async () => {
      const mockDockerode = {
        getContainer: jest.fn().mockReturnThis(),
        inspect: jest
          .fn()
          .mockImplementation((cb) =>
            cb(new Error("Container not found"), null),
          ),
      };

      jest
        .spyOn(dockerService, "createDocker")
        .mockReturnValueOnce(mockDockerode as any);

      await expect(dockerService.getContainer("container-id")).rejects.toThrow(
        "Container not found",
      );
    });
  });

  describe("createDocker", () => {
    it("should create a Dockerode instance with socketPath", () => {
      jest.spyOn(configService, "get").mockImplementation((key: string) => {
        if (key === "docker.connection.socketPath")
          return "/var/run/docker.sock";
        return "";
      });

      const result = dockerService.createDocker();
      expect(result).toBeInstanceOf(Dockerode);
      expect(result).toHaveProperty("socketPath", "/var/run/docker.sock");
    });

    it("should create a Dockerode instance with hostUri", () => {
      jest.spyOn(configService, "get").mockImplementation((key: string) => {
        if (key === "docker.connection.hostUri") return "http://localhost:2375";
        return "";
      });

      const result = dockerService.createDocker();
      expect(result).toBeInstanceOf(Dockerode);
      expect(result).toHaveProperty("protocol", "http:");
      expect(result).toHaveProperty("host", "localhost");
      expect(result).toHaveProperty("port", 2375);
    });
  });

  describe("stop", () => {
    it("should stop a container", async () => {
      const mockDockerode = {
        getContainer: jest.fn().mockReturnThis(),
        stop: jest.fn().mockImplementation((cb) => cb(null, "stopped")),
      };

      jest
        .spyOn(dockerService, "createDocker")
        .mockReturnValueOnce(mockDockerode as any);

      const result = await dockerService.stop("container-id");
      expect(result).toBe("stopped");
    });

    it("should throw an error if stopping fails", async () => {
      const mockDockerode = {
        getContainer: jest.fn().mockReturnThis(),
        stop: jest
          .fn()
          .mockImplementation((cb) => cb(new Error("Failed to stop"), null)),
      };

      jest
        .spyOn(dockerService, "createDocker")
        .mockReturnValueOnce(mockDockerode as any);

      await expect(dockerService.stop("container-id")).rejects.toThrow(
        "Failed to stop",
      );
    });
  });

  // Additional test cases for other methods can be added here...
});

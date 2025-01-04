import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import * as fetchMock from "jest-fetch-mock";

import { DockerRepositoryService } from "./docker-repository.service";

jest.mock("jest-fetch-mock", () => require("jest-fetch-mock"));
fetchMock.enableMocks();

describe("DockerRepositoryService", () => {
  let service: DockerRepositoryService;
  let configService: ConfigService;
  let logger: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DockerRepositoryService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue("mock-value"),
          },
        },
      ],
    }).compile();

    service = module.get<DockerRepositoryService>(DockerRepositoryService);
    configService = module.get<ConfigService>(ConfigService);
    logger = module.get<Logger>(Logger);
  });

  beforeEach(() => {
    fetchMock.resetMocks(); // Reset fetch mocks before each test
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("queryRepository", () => {
    it("should return repository data for docker.io", async () => {
      const image = "node:latest";
      const response = { name: "node", description: "Node.js image" };

      fetchMock.mockResponseOnce(JSON.stringify(response), { status: 200 });

      const data = await service.queryRepository(image);

      expect(data).toBeDefined();
      expect(data.imageName).toBe(image);
      expect(data.name).toBe("node");
      expect(data.description).toBe("Node.js image");
    });

    it("should return error when repository is not found", async () => {
      const image = "unknown/repo:latest";

      fetchMock.mockResponseOnce("", { status: 404 });

      await expect(service.queryRepository(image)).rejects.toThrowError(
        "No repository",
      );
    });
  });

  describe("queryRepositoryTags", () => {
    it("should return tags for valid image", async () => {
      const image = "node:latest";
      const os = "linux";
      const arch = "amd64";
      const response = {
        images: [{ os, architecture: arch }],
      };

      fetchMock.mockResponseOnce(JSON.stringify(response), { status: 200 });

      const data = await service.queryRepositoryTags(image, os, arch);

      expect(data).toBeDefined();
      expect(data.images.length).toBeGreaterThan(0);
    });

    it("should return empty array if no matching tags found", async () => {
      const image = "node:latest";
      const os = "windows";
      const arch = "x64";
      const response = {
        images: [{ os: "linux", architecture: "amd64" }],
      };

      fetchMock.mockResponseOnce(JSON.stringify(response), { status: 200 });

      const data = await service.queryRepositoryTags(image, os, arch);

      expect(data).toBeDefined();
      expect(data.images.length).toBe(0);
    });
  });

  describe("repositorySummary", () => {
    it("should return summary for valid repository", async () => {
      const image = "node:latest";
      const response = {
        name: "node",
        description: "Node.js image",
      };

      fetchMock.mockResponseOnce(JSON.stringify(response), { status: 200 });

      const data = await service.repositorySummary(image);

      expect(data).toBeDefined();
      expect(data.name).toBe("node");
      expect(data.description).toBe("Node.js image");
    });

    it("should return error if repository is not found", async () => {
      const image = "unknown/repo:latest";

      fetchMock.mockResponseOnce("", { status: 404 });

      await expect(service.repositorySummary(image)).rejects.toThrowError(
        "No repository",
      );
    });
  });

  describe("login", () => {
    it("should resolve with token if login is successful", async () => {
      const repository = {
        name: "docker.io",
        loginUrl: "https://hub.docker.com/v2/users/login/",
      };
      const username = "user";
      const password = "password";

      const mockToken = "mock-token";
      fetchMock.mockResponseOnce(JSON.stringify({ token: mockToken }), {
        status: 200,
      });

      const token = await service["login"](
        repository,
        username,
        password,
        "image",
      );

      expect(token).toBe(mockToken);
    });

    it("should reject with error if login fails", async () => {
      const repository = {
        name: "docker.io",
        loginUrl: "https://hub.docker.com/v2/users/login/",
      };
      const username = "user";
      const password = "password";

      fetchMock.mockResponseOnce(
        JSON.stringify({ status: 401, text: "Invalid Credentials" }),
        { status: 401 },
      );

      await expect(
        service["login"](repository, username, password, "image"),
      ).rejects.toThrowError("Invalid Credentials");
    });

    it("should resolve with empty token if login URL is empty", async () => {
      const repository = { name: "quay.io", loginUrl: "" };
      const username = "user";
      const password = "password";

      const token = await service["login"](
        repository,
        username,
        password,
        "image",
      );

      expect(token).toBe("");
    });
  });
});

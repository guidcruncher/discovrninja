/* eslint-disable @typescript-eslint/no-empty-function */
import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { DiscoveryService } from "@services/discovery.service";
import fs from "fs";
import path from "path";

import { ComposeService } from "./compose.service"; // Replace with your file path

jest.mock("fs");
jest.mock("composerize", () => jest.fn(() => "mock-composerized-output"));
jest.mock("decomposerize", () => jest.fn(() => "mock-decomposerized-output"));

describe("ComposeService", () => {
  let service: ComposeService;
  let configServiceMock: jest.Mocked<ConfigService>;

  const mockStackBasePath = "/mock/docker/stacks";

  beforeEach(async () => {
    configServiceMock = {
      get: jest.fn().mockImplementation((key: string) => {
        if (key === "docker.stackBasePath") {
          return mockStackBasePath;
        }
        return null;
      }),
    } as unknown as jest.Mocked<ConfigService>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComposeService,
        { provide: ConfigService, useValue: configServiceMock },
        { provide: DiscoveryService, useValue: {} }, // Mock DiscoveryService if needed
      ],
    }).compile();

    service = module.get<ComposeService>(ComposeService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("loadProject", () => {
    it("should load compose and env files if they exist", async () => {
      const project = "test-project";
      const composeFile = "docker-compose.yml";
      const envFile = "stack.env";
      const projectPath = path.join(mockStackBasePath, project);
      const composePath = path.join(projectPath, composeFile);
      const envPath = path.join(projectPath, envFile);

      jest.spyOn(fs, "existsSync").mockImplementation((filePath) => {
        return filePath === composePath || filePath === envPath;
      });
      jest.spyOn(fs, "readFileSync").mockImplementation((filePath) => {
        if (filePath === composePath) {
          return "mock-compose-content";
        } else if (filePath === envPath) {
          return "mock-env-content";
        }
        return null;
      });

      const result = await service.loadProject(project, composeFile, envFile);

      expect(result).toEqual({
        compose: "mock-compose-content",
        env: "mock-env-content",
      });
      expect(fs.existsSync).toHaveBeenCalledWith(composePath);
      expect(fs.existsSync).toHaveBeenCalledWith(envPath);
      expect(fs.readFileSync).toHaveBeenCalledWith(composePath);
      expect(fs.readFileSync).toHaveBeenCalledWith(envPath);
    });

    it("should warn if env file does not exist", async () => {
      const project = "test-project";
      const composeFile = "docker-compose.yml";
      const envFile = "stack.env";
      const projectPath = path.join(mockStackBasePath, project);
      const composePath = path.join(projectPath, composeFile);
      const envPath = path.join(projectPath, envFile);

      jest.spyOn(fs, "existsSync").mockImplementation((filePath) => {
        return filePath === composePath;
      });
      jest.spyOn(fs, "readFileSync").mockImplementation((filePath) => {
        if (filePath === composePath) {
          return "mock-compose-content";
        }
        return null;
      });
      jest.spyOn(service["logger"], "warn");

      const result = await service.loadProject(project, composeFile, envFile);

      expect(result).toEqual({
        compose: "mock-compose-content",
        env: "",
      });
      expect(fs.existsSync).toHaveBeenCalledWith(composePath);
      expect(fs.existsSync).toHaveBeenCalledWith(envPath);
      expect(fs.readFileSync).toHaveBeenCalledWith(composePath);
      expect(service["logger"].warn).toHaveBeenCalledWith(
        "No stack.env file found",
        envPath,
      );
    });

    it("should reject if compose file does not exist", async () => {
      const project = "test-project";
      const composeFile = "docker-compose.yml";
      const envFile = "stack.env";
      const projectPath = path.join(mockStackBasePath, project);
      const composePath = path.join(projectPath, composeFile);

      jest.spyOn(fs, "existsSync").mockReturnValue(false);
      jest.spyOn(service["logger"], "error");

      await expect(
        service.loadProject(project, composeFile, envFile),
      ).rejects.toBeUndefined();

      expect(fs.existsSync).toHaveBeenCalledWith(composePath);
      expect(service["logger"].error).toHaveBeenCalledWith(
        "Compose file not found",
        composePath,
      );
    });
  });

  describe("composerize", () => {
    it("should convert docker run command to compose", () => {
      const runCommand = "docker run --name test-container test-image";

      const result = service.composerize(runCommand);

      expect(result).toBe("mock-composerized-output");
    });
  });

  describe("deComposerize", () => {
    it("should convert compose file to docker run command", () => {
      const composeContent = "mock-compose-content";

      const result = service.deComposerize(composeContent);

      expect(result).toBe("mock-decomposerized-output");
    });
  });

  describe("saveProject", () => {
    it("should backup and save compose and env files", async () => {
      const project = "test-project";
      const composeFile = "docker-compose.yml";
      const envFile = "stack.env";
      const projectPath = path.join(mockStackBasePath, project);
      const composePath = path.join(projectPath, composeFile);
      const envPath = path.join(projectPath, envFile);
      const data = { compose: "new-compose-content", env: "new-env-content" };

      jest.spyOn(fs, "existsSync").mockImplementation((filePath) => {
        return filePath === composePath || filePath === envPath;
      });
      jest.spyOn(fs, "copyFileSync").mockImplementation(() => {});
      jest.spyOn(fs, "writeFileSync").mockImplementation(() => {});

      const result = await service.saveProject(
        project,
        composeFile,
        envFile,
        data,
      );

      expect(result).toBe(true);
      expect(fs.copyFileSync).toHaveBeenCalledWith(
        composePath,
        composePath + ".bak",
      );
      expect(fs.copyFileSync).toHaveBeenCalledWith(envPath, envPath + ".bak");
      expect(fs.writeFileSync).toHaveBeenCalledWith(composePath, data.compose);
      expect(fs.writeFileSync).toHaveBeenCalledWith(envPath, data.env);
    });
  });
});

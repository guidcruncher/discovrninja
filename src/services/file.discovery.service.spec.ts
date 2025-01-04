import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";

import { FileDiscoveryService } from "./file-discovery.service";

// Mock fs, yaml, path, and ConfigService
jest.mock("fs");
jest.mock("js-yaml");
jest.mock("path");

describe("FileDiscoveryService", () => {
  let service: FileDiscoveryService;
  let configServiceMock: jest.Mocked<ConfigService>;

  beforeEach(async () => {
    configServiceMock = {
      get: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FileDiscoveryService,
        { provide: ConfigService, useValue: configServiceMock },
      ],
    }).compile();

    service = module.get<FileDiscoveryService>(FileDiscoveryService);
  });

  describe("scan", () => {
    it("should reject when file discovery is disabled in the config", async () => {
      configServiceMock.get.mockImplementation((key: string) => {
        if (key === "discovery.file.enabled") return false;
      });

      await expect(service.scan()).rejects.toBeUndefined();
    });

    it("should resolve with service definitions when file exists and is valid", async () => {
      const mockServiceDefinition = { services: [{ name: "service1" }] };
      const mockFileContent = YAML.stringify(mockServiceDefinition);
      const mockFilename = "/path/to/service/file.yaml";

      configServiceMock.get.mockImplementation((key: string) => {
        if (key === "discovery.file.enabled") return true;
        if (key === "discovery.file.filename") return mockFilename;
      });

      // Mock fs.existsSync and fs.readFileSync
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);
      (yaml.load as jest.Mock).mockReturnValue(mockServiceDefinition);
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      const result = await service.scan();

      expect(result).toEqual(mockServiceDefinition);
      expect(fs.existsSync).toHaveBeenCalledWith(mockFilename);
      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilename, "utf8");
      expect(yaml.load).toHaveBeenCalledWith(mockFileContent);
    });

    it("should reject when file does not exist", async () => {
      const mockFilename = "/path/to/service/file.yaml";

      configServiceMock.get.mockImplementation((key: string) => {
        if (key === "discovery.file.enabled") return true;
        if (key === "discovery.file.filename") return mockFilename;
      });

      // Mock fs.existsSync to return false (file not found)
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      await expect(service.scan()).rejects.toBeUndefined();

      expect(fs.existsSync).toHaveBeenCalledWith(mockFilename);
    });

    it("should reject when YAML parsing fails", async () => {
      const mockFilename = "/path/to/service/file.yaml";

      configServiceMock.get.mockImplementation((key: string) => {
        if (key === "discovery.file.enabled") return true;
        if (key === "discovery.file.filename") return mockFilename;
      });

      const mockFileContent = "invalid yaml content";
      // Mock fs.existsSync and fs.readFileSync
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      // Mock YAML to throw an error during parsing
      (yaml.load as jest.Mock).mockImplementation(() => {
        throw new Error("YAML parsing error");
      });

      await expect(service.scan()).rejects.toThrow("YAML parsing error");
    });

    it("should handle unexpected errors gracefully", async () => {
      const mockFilename = "/path/to/service/file.yaml";

      configServiceMock.get.mockImplementation((key: string) => {
        if (key === "discovery.file.enabled") return true;
        if (key === "discovery.file.filename") return mockFilename;
      });

      // Mock fs.existsSync and simulate an error in fs.readFileSync
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockImplementation(() => {
        throw new Error("File read error");
      });
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      await expect(service.scan()).rejects.toThrow("File read error");
    });
  });

  describe("readFile", () => {
    it("should return service definitions when file exists", () => {
      const mockFileContent = "services:\n  - name: service1";
      const mockServiceDefinition = { services: [{ name: "service1" }] };
      const mockFilename = "/path/to/service/file.yaml";

      // Mock fs.existsSync, fs.readFileSync, and yaml.load
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);
      (yaml.load as jest.Mock).mockReturnValue(mockServiceDefinition);
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      const result = service["readFile"](mockFilename);

      expect(result).toEqual(mockServiceDefinition);
      expect(fs.existsSync).toHaveBeenCalledWith(mockFilename);
      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilename, "utf8");
      expect(yaml.load).toHaveBeenCalledWith(mockFileContent);
    });

    it("should return undefined when file does not exist", () => {
      const mockFilename = "/path/to/service/file.yaml";

      // Mock fs.existsSync to return false (file not found)
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      (path.resolve as jest.Mock).mockReturnValue(mockFilename);

      const result = service["readFile"](mockFilename);

      expect(result).toBeUndefined();
      expect(fs.existsSync).toHaveBeenCalledWith(mockFilename);
    });
  });
});

import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { DesktopService } from "@services/desktop.service";
import * as fs from "fs";
import * as yaml from "js-yaml";

jest.mock("fs");
jest.mock("js-yaml");
jest.mock("@nestjs/config");

describe("DesktopService", () => {
  let desktopService: DesktopService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DesktopService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    desktopService = module.get<DesktopService>(DesktopService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe("readFile", () => {
    it("should read file successfully if it exists", () => {
      const mockFilePath = "/path/to/file.yaml";
      const mockYamlContent = { desktop: "mock desktop content" };
      (configService.get as jest.Mock).mockReturnValue(mockFilePath);
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue("desktop: mock content");
      (yaml.load as jest.Mock).mockReturnValue(mockYamlContent);

      const result = desktopService["readFile"](); // Access private method

      expect(fs.existsSync).toHaveBeenCalledWith(mockFilePath);
      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, "utf8");
      expect(yaml.load).toHaveBeenCalledWith("desktop: mock content");
      expect(result).toEqual(mockYamlContent);
    });

    it("should return an empty object if the file does not exist", () => {
      const mockFilePath = "/path/to/file.yaml";
      (configService.get as jest.Mock).mockReturnValue(mockFilePath);
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      const result = desktopService["readFile"](); // Access private method

      expect(fs.existsSync).toHaveBeenCalledWith(mockFilePath);
      expect(result).toEqual({});
    });
  });

  describe("renderDesktop", () => {
    it("should call readFile and return the desktop content", () => {
      const mockFilePath = "/path/to/file.yaml";
      const mockYamlContent = { desktop: "mock desktop content" };
      (configService.get as jest.Mock).mockReturnValue(mockFilePath);
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readFileSync as jest.Mock).mockReturnValue("desktop: mock content");
      (yaml.load as jest.Mock).mockReturnValue(mockYamlContent);

      const result = desktopService.renderDesktop();

      expect(result).toEqual(mockYamlContent);
    });

    it("should return an empty object if the file does not exist", () => {
      const mockFilePath = "/path/to/file.yaml";
      (configService.get as jest.Mock).mockReturnValue(mockFilePath);
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      const result = desktopService.renderDesktop();

      expect(result).toEqual({});
    });
  });
});

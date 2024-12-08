import { HttpUtilities } from "@helpers/httputilities";
import { InjectModel } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Icon } from "@schemas/icons.schema";
import { IconResult } from "@services/icon.service";
import { Model } from "mongoose";

import { IconCDNService } from "./icon.cdn.service";

jest.mock("@helpers/httputilities");
jest.mock("@nestjs/mongoose");
jest.mock("@schemas/icons.schema");
jest.mock("@dto/icons.dto");

describe("IconCDNService", () => {
  let service: IconCDNService;
  let httpUtilitiesMock: jest.Mocked<HttpUtilities>;
  let iconModelMock: jest.Mocked<Model<Icon>>;

  beforeEach(async () => {
    // Mocking HttpUtilities and Model<Icon>
    httpUtilitiesMock = new HttpUtilities() as jest.Mocked<HttpUtilities>;
    iconModelMock = {
      find: jest.fn(),
      deleteMany: jest.fn(),
      exec: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IconCDNService,
        { provide: HttpUtilities, useValue: httpUtilitiesMock },
        { provide: InjectModel(Icon.name), useValue: iconModelMock },
      ],
    }).compile();

    service = module.get<IconCDNService>(IconCDNService);
  });

  describe("resolveIconUrl", () => {
    it("should return the correct URL for simpleicons catalog", () => {
      const result = service.resolveIconUrl("simpleicons", "github");
      expect(result).toBe("https://cdn.simpleicons.org/github");
    });

    it("should return the correct URL for selfhst catalog", () => {
      const result = service.resolveIconUrl("selfhst", "github");
      expect(result).toBe(
        "https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/github.svg",
      );
    });

    it("should return the correct URL for dashboard-icons catalog", () => {
      const result = service.resolveIconUrl("dashboard-icons", "github");
      expect(result).toBe(
        "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/github.png",
      );
    });

    it("should return an empty string for unknown catalog", () => {
      const result = service.resolveIconUrl("unknown", "github");
      expect(result).toBe("");
    });
  });

  describe("resolveIndexUrl", () => {
    it("should return the correct index URL for simpleicons catalog", () => {
      const result = service.resolveIndexUrl("simpleicons");
      expect(result).toBe(
        "https://data.jsdelivr.com/v1/packages/npm/simple-icons@13.17.0",
      );
    });

    it("should return the correct index URL for selfhst catalog", () => {
      const result = service.resolveIndexUrl("selfhst");
      expect(result).toBe(
        "https://data.jsdelivr.com/v1/packages/gh/selfhst/icons@master",
      );
    });

    it("should return the correct index URL for dashboard-icons catalog", () => {
      const result = service.resolveIndexUrl("dashboard-icons");
      expect(result).toBe(
        "https://data.jsdelivr.com/v1/packages/gh/walkxcode/dashboard-icons@master",
      );
    });

    it("should return an empty string for unknown catalog", () => {
      const result = service.resolveIndexUrl("unknown");
      expect(result).toBe("");
    });
  });

  describe("resolvePath", () => {
    it("should return the correct path for simpleicons catalog", () => {
      const result = service.resolvePath("simpleicons");
      expect(result).toBe("icons");
    });

    it("should return the correct path for selfhst catalog", () => {
      const result = service.resolvePath("selfhst");
      expect(result).toBe("svg");
    });

    it("should return the correct path for dashboard-icons catalog", () => {
      const result = service.resolvePath("dashboard-icons");
      expect(result).toBe("png");
    });

    it("should return an empty string for unknown catalog", () => {
      const result = service.resolvePath("unknown");
      expect(result).toBe("");
    });
  });

  describe("getSlugs", () => {
    it("should return slugs for a catalog", async () => {
      const mockData = { files: [{ type: "file", name: "github.svg" }] };
      const mockResponse = JSON.stringify(mockData);

      httpUtilitiesMock.retrieve.mockResolvedValueOnce(mockResponse);

      const result = await service.getSlugs("simpleicons");

      expect(result.simpleicons).toEqual(["github"]);
    });

    it("should reject if HttpUtilities fails", async () => {
      httpUtilitiesMock.retrieve.mockRejectedValueOnce(
        new Error("Error fetching data"),
      );

      await expect(service.getSlugs("simpleicons")).rejects.toThrow(
        "Error fetching data",
      );
    });
  });

  describe("query", () => {
    it("should return IconResult for matching slugs", async () => {
      const mockIcon = { slug: "github", catalog: "simpleicons" };
      const mockResult: IconResult[] = [
        {
          slug: "github",
          catalog: "simpleicons",
          url: "https://cdn.simpleicons.org/github",
          headers: null,
          data: null,
        },
      ];

      iconModelMock.find.mockResolvedValueOnce([mockIcon]);

      const result = await service.query("github", true);

      expect(result).toEqual(mockResult);
    });

    it("should return an empty result for non-matching query", async () => {
      iconModelMock.find.mockResolvedValueOnce([]);

      const result = await service.query("nonexistent", true);

      expect(result).toEqual([]);
    });
  });

  describe("getAllSlugs", () => {
    it("should return all slugs from multiple catalogs", async () => {
      const mockSlugs = {
        simpleicons: ["github"],
        selfhst: ["gitlab"],
      };

      service.getSlugs = jest
        .fn()
        .mockResolvedValueOnce({ simpleicons: ["github"] })
        .mockResolvedValueOnce({ selfhst: ["gitlab"] });

      const result = await service.getAllSlugs();

      expect(result.simpleicons).toEqual(["github"]);
      expect(result.selfhst).toEqual(["gitlab"]);
    });

    it("should reject if getSlugs fails", async () => {
      service.getSlugs = jest
        .fn()
        .mockRejectedValueOnce(new Error("Error fetching slugs"));

      await expect(service.getAllSlugs()).rejects.toThrow(
        "Error fetching slugs",
      );
    });
  });
});

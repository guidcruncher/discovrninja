import { Test, TestingModule } from "@nestjs/testing";
import { ResourcesService } from "./resources.service";
import { HttpUtilities } from "@helpers/httputilities";
import Parser from "rss-parser";

describe("ResourcesService", () => {
  let service: ResourcesService;
  let httpUtilitiesMock: jest.Mocked<HttpUtilities>;
  let parserMock: jest.Mocked<Parser>;

  beforeEach(async () => {
    // Create mock instances for HttpUtilities and Parser
    httpUtilitiesMock = {
      retrieve: jest.fn(),
    } as any;

    parserMock = {
      parseURL: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResourcesService,
        { provide: HttpUtilities, useValue: httpUtilitiesMock },
        { provide: Parser, useValue: parserMock },
      ],
    }).compile();

    service = module.get<ResourcesService>(ResourcesService);
  });

  describe("getBingDailyImageUrl", () => {
    it("should return a valid Bing image URL", async () => {
      const mockBingResponse = {
        images: [{ url: "/path/to/image.jpg" }],
      };

      // Mock HttpUtilities to return the mock response
      httpUtilitiesMock.retrieve.mockResolvedValueOnce(
        JSON.stringify(mockBingResponse),
      );

      const result = await service.getBingDailyImageUrl();

      expect(result).toBe("https://www.bing.com/path/to/image.jpg");
      expect(httpUtilitiesMock.retrieve).toHaveBeenCalledWith(
        "GET",
        expect.any(String),
      );
    });

    it("should reject if Bing response does not contain images", async () => {
      const mockBingResponse = {
        images: [],
      };

      httpUtilitiesMock.retrieve.mockResolvedValueOnce(
        JSON.stringify(mockBingResponse),
      );

      await expect(service.getBingDailyImageUrl()).rejects.toThrow();
    });

    it("should reject if HttpUtilities fails", async () => {
      const error = new Error("Network error");
      httpUtilitiesMock.retrieve.mockRejectedValueOnce(error);

      await expect(service.getBingDailyImageUrl()).rejects.toThrow(
        "Network error",
      );
    });
  });

  describe("getNasaDailyImageUrl", () => {
    it("should return a valid NASA image URL", async () => {
      const mockNasaFeed = {
        items: [{ enclosure: { url: "https://example.com/nasa-image.jpg" } }],
      };

      // Mock Parser to return the mock feed
      parserMock.parseURL.mockResolvedValueOnce(mockNasaFeed);

      const result = await service.getNasaDailyImageUrl();

      expect(result).toBe("https://example.com/nasa-image.jpg");
      expect(parserMock.parseURL).toHaveBeenCalledWith(
        "https://apod.com/feed.rss",
      );
    });

    it("should reject if NASA feed is invalid", async () => {
      const error = new Error("Failed to parse RSS feed");
      parserMock.parseURL.mockRejectedValueOnce(error);

      await expect(service.getNasaDailyImageUrl()).rejects.toThrow(
        "Failed to parse RSS feed",
      );
    });
  });
});

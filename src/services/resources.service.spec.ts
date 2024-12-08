import { HttpUtilities } from "@helpers/httputilities";
import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";

import { ResourcesService } from "./resources.service";

jest.mock("@helpers/httputilities");
jest.mock("openmeteo", () => ({
  fetchWeatherApi: jest.fn(),
}));
jest.mock("rss-parser", () =>
  jest.fn().mockImplementation(() => ({
    parseURL: jest.fn(),
  })),
);
jest.mock("feedparser");

describe("ResourcesService", () => {
  let service: ResourcesService;
  let configService: ConfigService;
  let mockHttpUtilities: jest.Mocked<HttpUtilities>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesService, ConfigService],
    }).compile();

    service = module.get<ResourcesService>(ResourcesService);
    configService = module.get<ConfigService>(ConfigService);
    mockHttpUtilities = new HttpUtilities() as jest.Mocked<HttpUtilities>;
  });

  describe("reverseGeoCodeLookup", () => {
    it("should return geodata for valid coordinates", async () => {
      const mockResponse = JSON.stringify({ city: "London", country: "UK" });
      mockHttpUtilities.retrieve.mockResolvedValue(mockResponse);

      const result = await service.reverseGeoCodeLookup(51.5074, -0.1278);

      expect(mockHttpUtilities.retrieve).toHaveBeenCalledWith(
        "GET",
        expect.stringContaining("https://nominatim.openstreetmap.org/reverse"),
      );
      expect(result).toEqual(JSON.parse(mockResponse));
    });

    it("should reject on API error", async () => {
      mockHttpUtilities.retrieve.mockRejectedValue(new Error("API error"));

      await expect(
        service.reverseGeoCodeLookup(51.5074, -0.1278),
      ).rejects.toThrow("API error");
    });
  });

  describe("fetchWeather", () => {
    it("should call _fetchWeather with specified location", async () => {
      const mockWeatherData = { current: {}, daily: {} };
      jest.spyOn(service, "_fetchWeather").mockResolvedValue(mockWeatherData);

      const result = await service.fetchWeather(40.7128, -74.006, 3);

      expect(service._fetchWeather).toHaveBeenCalledWith(40.7128, -74.006, 3);
      expect(result).toEqual(mockWeatherData);
    });

    it("should call determineLocation if latitude or longitude is invalid", async () => {
      jest.spyOn(service, "_fetchWeather").mockResolvedValue({});
      jest.spyOn(service, "determineLocation").mockResolvedValue({
        latitude: 51.5074,
        longitude: -0.1278,
      });

      const result = await service.fetchWeather(NaN, NaN, 3);

      expect(service.determineLocation).toHaveBeenCalled();
      expect(service._fetchWeather).toHaveBeenCalledWith(51.5074, -0.1278, 3);
    });

    it("should handle errors during weather fetch", async () => {
      jest
        .spyOn(service, "_fetchWeather")
        .mockRejectedValue(new Error("Weather API error"));

      await expect(service.fetchWeather(40.7128, -74.006, 3)).rejects.toThrow(
        "Weather API error",
      );
    });
  });

  describe("getRSSFeed", () => {
    it("should return parsed feed for a valid URL", async () => {
      const mockFeed = { title: "Test Feed", items: [] };
      const Parser = require("rss-parser");
      Parser.prototype.parseURL.mockResolvedValue(mockFeed);

      const result = await service.getRSSFeed("http://example.com/feed");

      expect(result).toEqual(mockFeed);
    });

    it("should reject on RSS parsing error", async () => {
      const Parser = require("rss-parser");
      Parser.prototype.parseURL.mockRejectedValue(new Error("Parsing error"));

      await expect(
        service.getRSSFeed("http://example.com/feed"),
      ).rejects.toThrow("Parsing error");
    });
  });

  describe("getBingDailyImageUrl", () => {
    it("should return Bing daily image URL", async () => {
      const mockResponse = JSON.stringify({ images: [{ url: "/image.jpg" }] });
      mockHttpUtilities.retrieve.mockResolvedValue(mockResponse);

      const result = await service.getBingDailyImageUrl();

      expect(result).toEqual("https://www.bing.com/image.jpg");
    });

    it("should return empty string if no images are found", async () => {
      const mockResponse = JSON.stringify({ images: [] });
      mockHttpUtilities.retrieve.mockResolvedValue(mockResponse);

      const result = await service.getBingDailyImageUrl();

      expect(result).toEqual("");
    });
  });

  describe("getNasaDailyImageUrl", () => {
    it("should return NASA daily image URL", async () => {
      const mockFeed = {
        items: [
          {
            enclosure: { url: "https://example.com/nasa-image.jpg" },
          },
        ],
      };
      const Parser = require("rss-parser");
      Parser.prototype.parseURL.mockResolvedValue(mockFeed);

      const result = await service.getNasaDailyImageUrl();

      expect(result).toEqual("https://example.com/nasa-image.jpg");
    });

    it("should reject on RSS parsing error", async () => {
      const Parser = require("rss-parser");
      Parser.prototype.parseURL.mockRejectedValue(new Error("RSS Error"));

      await expect(service.getNasaDailyImageUrl()).rejects.toThrow("RSS Error");
    });
  });
});

import { HttpUtilities } from "@helpers/httputilities";
import { Test, TestingModule } from "@nestjs/testing";

import { IconService } from "./icon.service"; // Replace with your file path

jest.mock("@helpers/httputilities", () => {
  return {
    HttpUtilities: jest.fn().mockImplementation(() => ({
      retrieveBinary: jest.fn(),
    })),
  };
});

describe("IconService", () => {
  let service: IconService;
  let httpUtilitiesMock: jest.Mocked<HttpUtilities>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IconService],
    }).compile();

    service = module.get<IconService>(IconService);
    httpUtilitiesMock = new HttpUtilities() as jest.Mocked<HttpUtilities>;
  });

  describe("resolveIconUrl", () => {
    it("should return correct URL for simpleicons catalog", () => {
      const result = service.resolveIconUrl("simpleicons", "testicon");
      expect(result).toBe("https://cdn.simpleicons.org/testicon");
    });

    it("should return correct URL for selfhst catalog", () => {
      const result = service.resolveIconUrl("selfhst", "testicon");
      expect(result).toBe(
        "https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/testicon.svg",
      );
    });

    it("should return correct URL for dashboard-icons catalog", () => {
      const result = service.resolveIconUrl("dashboard-icons", "testicon");
      expect(result).toBe(
        "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/testicon.png",
      );
    });

    it("should return an empty string for unknown catalog", () => {
      const result = service.resolveIconUrl("unknown", "testicon");
      expect(result).toBe("");
    });
  });

  describe("getSimpleIcon", () => {
    it("should retrieve binary data and return IconResult", async () => {
      const binaryData = new ArrayBuffer(10);
      httpUtilitiesMock.retrieveBinary.mockResolvedValue(binaryData);

      const result = await service.getSimpleIcon("testicon");

      expect(result).toEqual({
        headers: {
          "Content-Type": "image/svg+xml",
          "Content-Disposition": 'inline; filename="testicon.svg"',
        },
        catalog: "simpleicons",
        slug: "testicon",
        url: "https://cdn.simpleicons.org/testicon",
        data: binaryData,
      });
      expect(httpUtilitiesMock.retrieveBinary).toHaveBeenCalledWith(
        "GET",
        "https://cdn.simpleicons.org/testicon",
      );
    });

    it("should throw an error if retrieval fails", async () => {
      httpUtilitiesMock.retrieveBinary.mockRejectedValue(new Error("404"));

      await expect(service.getSimpleIcon("testicon")).rejects.toThrow("404");
    });
  });

  describe("query", () => {
    it("should resolve the first successful icon when first=true", async () => {
      const binaryData = new ArrayBuffer(10);
      httpUtilitiesMock.retrieveBinary.mockResolvedValue(binaryData);

      jest.spyOn(service, "getSimpleIcon").mockResolvedValue({
        headers: {
          "Content-Type": "image/svg+xml",
          "Content-Disposition": 'inline; filename="testicon.svg"',
        },
        catalog: "simpleicons",
        slug: "testicon",
        url: "https://cdn.simpleicons.org/testicon",
        data: binaryData,
      } as any);

      const result = await service.query("testicon", true);

      expect(result).toHaveLength(1);
      expect(result[0].catalog).toBe("simpleicons");
    });

    it("should return all successful results when first=false", async () => {
      const binaryData1 = new ArrayBuffer(10);
      const binaryData2 = new ArrayBuffer(20);

      jest.spyOn(service, "getSimpleIcon").mockResolvedValue({
        headers: {
          "Content-Type": "image/svg+xml",
          "Content-Disposition": 'inline; filename="testicon1.svg"',
        },
        catalog: "simpleicons",
        slug: "testicon1",
        url: "https://cdn.simpleicons.org/testicon1",
        data: binaryData1,
      } as any);

      jest.spyOn(service, "getDashboardIcon").mockResolvedValue({
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": 'inline; filename="testicon2.png"',
        },
        catalog: "dashboard-icons",
        slug: "testicon2",
        url: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/testicon2.png",
        data: binaryData2,
      } as any);

      const result = await service.query("testicon", false);

      expect(result).toHaveLength(2);
      expect(result[0].catalog).toBe("simpleicons");
      expect(result[1].catalog).toBe("dashboard-icons");
    });

    it("should reject if no icons are found and first=true", async () => {
      jest.spyOn(service, "getSimpleIcon").mockRejectedValue(new Error("404"));
      jest
        .spyOn(service, "getDashboardIcon")
        .mockRejectedValue(new Error("404"));

      await expect(service.query("testicon", true)).rejects.toThrow();
    });
  });
});

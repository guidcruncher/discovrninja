import { IpUtilities } from "@helpers/IpUtilities";
import axios from "axios";
import * as dns from "dns";
import * as os from "os";

jest.mock("dns");
jest.mock("os");
jest.mock("axios");

describe("IpUtilities", () => {
  let ipUtilities: IpUtilities;

  beforeEach(() => {
    ipUtilities = new IpUtilities();
  });

  describe("getIpAddress", () => {
    it("should resolve to the correct IP address when dns.lookup succeeds", async () => {
      const hostname = "example.com";
      const mockIp = "93.184.216.34";

      (dns.lookup as jest.Mock).mockImplementation(
        (host, options, callback) => {
          callback(null, mockIp);
        },
      );

      const result = await ipUtilities.getIpAddress(hostname);

      expect(result).toBe(mockIp);
    });

    it("should reject when dns.lookup fails", async () => {
      const hostname = "example.com";
      const mockError = new Error("DNS lookup failed");

      (dns.lookup as jest.Mock).mockImplementation(
        (host, options, callback) => {
          callback(mockError, null);
        },
      );

      await expect(ipUtilities.getIpAddress(hostname)).rejects.toThrow(
        mockError,
      );
    });
  });

  describe("getHostIpAddress", () => {
    it("should return the first non-internal IPv4 address found", () => {
      const mockInterfaces = {
        eth0: [{ family: "IPv4", internal: false, address: "192.168.1.2" }],
        lo: [{ family: "IPv4", internal: true, address: "127.0.0.1" }],
      };

      (os.networkInterfaces as jest.Mock).mockReturnValue(mockInterfaces);

      const result = ipUtilities.getHostIpAddress();

      expect(result).toBe("192.168.1.2");
    });

    it("should return an empty string if no non-internal IPv4 address is found", () => {
      const mockInterfaces = {
        eth0: [{ family: "IPv6", internal: false, address: "fe80::1" }],
        lo: [{ family: "IPv4", internal: true, address: "127.0.0.1" }],
      };

      (os.networkInterfaces as jest.Mock).mockReturnValue(mockInterfaces);

      const result = ipUtilities.getHostIpAddress();

      expect(result).toBe("");
    });
  });

  describe("checkUrlLive", () => {
    it("should resolve with the URL when the request is successful", async () => {
      const url = { address: "https://example.com" };
      (axios.get as jest.Mock).mockResolvedValue({});

      const result = await ipUtilities.checkUrlLive(url);

      expect(result).toBe(url);
      expect(axios.get).toHaveBeenCalledWith(
        url.address,
        expect.objectContaining({ method: "GET", timeout: 5000 }),
      );
    });

    it("should reject when the request fails", async () => {
      const url = { address: "https://example.com" };
      (axios.get as jest.Mock).mockRejectedValue(new Error("Request failed"));

      await expect(ipUtilities.checkUrlLive(url)).rejects.toThrow(
        "Request failed",
      );
    });
  });
});

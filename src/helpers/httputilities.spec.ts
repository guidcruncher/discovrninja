import { HttpUtilities } from "./HttpUtilities";

jest.mock("node-fetch", () => jest.fn());

describe("HttpUtilities", () => {
  let httpUtils: HttpUtilities;
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = require("node-fetch");
    fetchMock.mockClear();
    httpUtils = new HttpUtilities();
  });

  describe("retrieve", () => {
    it("should resolve when fetch returns a successful response", async () => {
      const mockResponse = "success";
      fetchMock.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await httpUtils.retrieve("GET", "https://example.com");
      expect(result).toBe(mockResponse);
      expect(fetchMock).toHaveBeenCalledWith("https://example.com", {
        method: "GET",
        signal: expect.any(AbortSignal),
      });
    });

    it("should reject when fetch returns a non-OK response", async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
        status: 404,
        text: jest.fn().mockResolvedValueOnce(""),
      });

      await expect(
        httpUtils.retrieve("GET", "https://example.com"),
      ).rejects.toEqual({
        statusText: "Not Found",
        status: 404,
        error: null,
      });
    });

    it("should reject on fetch error", async () => {
      const errorMessage = "Network Error";
      fetchMock.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        httpUtils.retrieve("GET", "https://example.com"),
      ).rejects.toEqual({
        statusText: errorMessage,
        status: 500,
        error: expect.any(Error),
      });
    });
  });

  describe("retrieveBinary", () => {
    it("should resolve with binary data when fetch returns a successful response", async () => {
      const mockBinaryData = new Uint8Array([1, 2, 3, 4]);
      fetchMock.mockResolvedValueOnce({
        ok: true,
        arrayBuffer: jest.fn().mockResolvedValueOnce(mockBinaryData.buffer),
      });

      const result = await httpUtils.retrieveBinary(
        "GET",
        "https://example.com",
      );
      expect(result).toEqual(mockBinaryData);
      expect(fetchMock).toHaveBeenCalledWith("https://example.com", {
        method: "GET",
        signal: expect.any(AbortSignal),
      });
    });

    it("should reject on fetch error in retrieveBinary", async () => {
      const errorMessage = "Network Error";
      fetchMock.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        httpUtils.retrieveBinary("GET", "https://example.com"),
      ).rejects.toEqual({
        statusText: errorMessage,
        status: 500,
        error: expect.any(Error),
      });
    });
  });

  describe("retrieveGeneric", () => {
    it("should resolve with parsed JSON when fetch returns a successful response", async () => {
      const mockResponse = { data: "test" };
      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await httpUtils.retrieveGeneric<any>(
        "GET",
        "https://example.com",
      );
      expect(result).toEqual(mockResponse);
      expect(fetchMock).toHaveBeenCalledWith("https://example.com", {
        method: "GET",
        signal: expect.any(AbortSignal),
      });
    });

    it("should reject when fetch returns a non-OK response in retrieveGeneric", async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
        status: 404,
        json: jest.fn().mockResolvedValueOnce(""),
      });

      await expect(
        httpUtils.retrieveGeneric<any>("GET", "https://example.com"),
      ).rejects.toEqual({
        statusText: "Not Found",
        status: 404,
        error: null,
      });
    });

    it("should reject on fetch error in retrieveGeneric", async () => {
      const errorMessage = "Network Error";
      fetchMock.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        httpUtils.retrieveGeneric<any>("GET", "https://example.com"),
      ).rejects.toEqual({
        statusText: errorMessage,
        status: 500,
        error: expect.any(Error),
      });
    });
  });

  describe("send", () => {
    it("should resolve when fetch returns a successful response", async () => {
      const mockResponse = "success";
      fetchMock.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await httpUtils.send(
        "POST",
        "https://example.com",
        '{"data":"test"}',
      );
      expect(result).toBe(mockResponse);
      expect(fetchMock).toHaveBeenCalledWith("https://example.com", {
        method: "POST",
        body: '{"data":"test"}',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        signal: expect.any(AbortSignal),
      });
    });

    it("should reject when fetch returns a non-OK response in send", async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        statusText: "Internal Server Error",
        status: 500,
        text: jest.fn().mockResolvedValueOnce(""),
      });

      await expect(
        httpUtils.send("POST", "https://example.com", '{"data":"test"}'),
      ).rejects.toEqual({
        statusText: "Internal Server Error",
        status: 500,
        error: null,
      });
    });

    it("should reject on fetch error in send", async () => {
      const errorMessage = "Network Error";
      fetchMock.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        httpUtils.send("POST", "https://example.com", '{"data":"test"}'),
      ).rejects.toEqual({
        statusText: errorMessage,
        status: 500,
        error: expect.any(Error),
      });
    });
  });

  describe("sendGeneric", () => {
    it("should resolve with parsed JSON when fetch returns a successful response", async () => {
      const mockResponse = { data: "test" };
      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await httpUtils.sendGeneric<any, any>(
        "POST",
        "https://example.com",
        { data: "test" },
      );
      expect(result).toEqual(mockResponse);
      expect(fetchMock).toHaveBeenCalledWith("https://example.com", {
        method: "POST",
        body: '{"data":"test"}',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        signal: expect.any(AbortSignal),
      });
    });

    it("should reject when fetch returns a non-OK response in sendGeneric", async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        statusText: "Bad Request",
        status: 400,
        json: jest.fn().mockResolvedValueOnce(""),
      });

      await expect(
        httpUtils.sendGeneric<any, any>("POST", "https://example.com", {
          data: "test",
        }),
      ).rejects.toEqual({
        statusText: "Bad Request",
        status: 400,
        error: null,
      });
    });

    it("should reject on fetch error in sendGeneric", async () => {
      const errorMessage = "Network Error";
      fetchMock.mockRejectedValueOnce(new Error(errorMessage));

      await expect(
        httpUtils.sendGeneric<any, any>("POST", "https://example.com", {
          data: "test",
        }),
      ).rejects.toEqual({
        statusText: errorMessage,
        status: 500,
        error: expect.any(Error),
      });
    });
  });
});

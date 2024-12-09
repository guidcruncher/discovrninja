import { HttpUtilities } from "@helpers/httputilities";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";

import { NotificationService } from "./notification.service";

jest.mock("@helpers/httputilities");

describe("NotificationService", () => {
  let service: NotificationService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe("sendUsingPushover", () => {
    it("should send notifications using Pushover to specified users", async () => {
      const mockSend = jest.fn().mockResolvedValue({ success: true });
      (HttpUtilities as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      const users = ["user1", "user2"];
      const title = "Test Title";
      const message = "Test Message";

      jest.spyOn(configService, "get").mockImplementation((key: string) => {
        if (key === "notifications.pushover.apiToken") return "mockApiToken";
      });

      const result = await service.sendUsingPushover(users, title, message);

      expect(result).toBe(true);
      expect(mockSend).toHaveBeenCalledTimes(2);
      expect(mockSend).toHaveBeenCalledWith(
        "POST",
        "https://api.pushover.net/1/messages.json",
        expect.stringContaining("token=mockApiToken"),
      );
    });

    it("should use default users when no users are provided", async () => {
      const mockSend = jest.fn().mockResolvedValue({ success: true });
      (HttpUtilities as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      jest.spyOn(configService, "get").mockImplementation((key: string) => {
        if (key === "notifications.pushover.apiToken") return "mockApiToken";
        if (key === "notifications.pushover.deliverTo") return ["defaultUser"];
      });

      const result = await service.sendUsingPushover([], "Title", "Message");

      expect(result).toBe(true);
      expect(mockSend).toHaveBeenCalledTimes(1);
      expect(mockSend).toHaveBeenCalledWith(
        "POST",
        "https://api.pushover.net/1/messages.json",
        expect.stringContaining("user=defaultUser"),
      );
    });

    it("should log an error if Pushover notifications fail", async () => {
      const mockSend = jest.fn().mockRejectedValue(new Error("Pushover Error"));
      (HttpUtilities as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      jest.spyOn(configService, "get").mockReturnValue("mockApiToken");
      const loggerErrorSpy = jest.spyOn(Logger.prototype, "error");

      await expect(
        service.sendUsingPushover(["user1"], "Title", "Message"),
      ).rejects.toThrow("Pushover Error");

      expect(loggerErrorSpy).toHaveBeenCalledWith(
        "Error sending Pushover notification",
        expect.any(Error),
      );
    });
  });

  describe("sendUsingApprise", () => {
    it("should send notifications using Apprise", async () => {
      const mockSend = jest.fn().mockResolvedValue({ success: true });
      (HttpUtilities as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      const recipients = ["recipient1", "recipient2"];
      const body = "Notification body";

      jest
        .spyOn(configService, "get")
        .mockReturnValue("http://mock-apprise-url");

      const result = await service.sendUsingApprise(recipients, body);

      expect(result).toBe(true);
      expect(mockSend).toHaveBeenCalledWith(
        "POST",
        "http://mock-apprise-url/notify",
        expect.stringContaining("urls=recipient1,recipient2"),
      );
    });

    it("should log an error if Apprise notifications fail", async () => {
      const mockSend = jest.fn().mockRejectedValue(new Error("Apprise Error"));
      (HttpUtilities as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      jest
        .spyOn(configService, "get")
        .mockReturnValue("http://mock-apprise-url");
      const loggerErrorSpy = jest.spyOn(Logger.prototype, "error");

      await expect(
        service.sendUsingApprise(["recipient1"], "Body"),
      ).rejects.toThrow("Apprise Error");

      expect(loggerErrorSpy).toHaveBeenCalledWith(
        "Error sending Apprise notification",
        expect.any(Error),
      );
    });
  });
});

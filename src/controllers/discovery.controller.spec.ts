import { Test, TestingModule } from "@nestjs/testing";
import { DockerDiscoveryService } from "@services/docker.discovery";

import { DiscoveryController } from "./@controllers/discovery.controller";

describe("DiscoveryController", () => {
  let discoveryController: DiscoveryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiscoveryController],
      providers: [DockerDiscoveryService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(discoveryController.getHello()).toBe("Hello World!");
    });
  });
});

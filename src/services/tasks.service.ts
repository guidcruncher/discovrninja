import { ContainerStatsDto } from "@dto/containerstats.dto";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Cron } from "@nestjs/schedule";
import { ContainerStats } from "@schemas/containerstats.schema";
import { DiscoveryService } from "@services/discovery.service";
import { DockerService } from "@services/docker.service";
import { Model } from "mongoose";

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private configService: ConfigService,
    private discoveryService: DiscoveryService,
    private dockerService: DockerService,
    @InjectModel(ContainerStats.name)
    private containerStatsModel: Model<ContainerStats>,
  ) {}

  @Cron("0 */15 * * * *")
  public crontriggerDiscoveryService(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logger.debug("Discovery Service cron task triggered.");
      this.discoveryService
        .scan()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Cron("0 */5 * * * *")
  public crontriggerTrackStats(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logger.debug("Stats Service cron task triggered.");
      this.dockerService.getAllContainerStats().then((stats) => {
        const promises = [];

        stats.forEach((record) => {
          const dto: ContainerStatsDto = {
            name: record.name,
            cpuPercent: record.stats.cpuPercent,
            memoryUsage: record.stats.memoryUsage,
            memoryFreePercent: record.stats.memoryFreePercent,
            memoryLimit: record.stats.memoryLimit,
            created: new Date(),
          };
          const created = new this.containerStatsModel(dto);
          promises.push(created.save());
        });

        Promise.allSettled(promises)
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  public initalJobs(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logger.debug("Starting initial jobs run.");
      const promises = [];

      promises.push(this.crontriggerDiscoveryService());
      promises.push(this.crontriggerTrackStats());
      Promise.allSettled(promises)
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

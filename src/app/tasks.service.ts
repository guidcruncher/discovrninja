import { DockerService } from "@container/docker.service";
import { ContainerStatsDto } from "@data/dto/containerstats.dto";
import { ContainerStats } from "@data/schemas/containerstats.schema";
import { DiscoveryService } from "@discovery/discovery.service";
import { FluentHttpClient } from "@helpers/fluenthttpclient";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Cron } from "@nestjs/schedule";
import { Model } from "mongoose";
import * as path from "path";

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

  @Cron("0 5 */1 * * *")
  public crongetdailyimages(): Promise<any> {
    const url = "https://peapix.com/bing/feed?country=us";
    return new Promise((resolve, reject) => {
      try {
        this.logger.debug("Getting daily images");

        FluentHttpClient.Get(url)
          .Execute()
          .then((result) => {
            const parsed = JSON.parse(result.value);
            const imgurl = parsed[0].fullUrl;
            FluentHttpClient.Get(imgurl)
              .DownloadTo(
                path.join(
                  __dirname,
                  "../",
                  "../",
                  "client",
                  "public",
                  "img",
                  "bing.jpg",
                ),
              )
              .then((result) => {
                resolve(imgurl);
              })
              .catch((err) => {
                this.logger.error("Error in daily image save cron job", err);
                reject(err);
              });
          })
          .catch((err) => {
            this.logger.error("Error in daily image cron job", err);
            reject(err);
          });
      } catch (err) {
        this.logger.error("Error in daily image cron job", err);
        reject(err);
      }
    });
  }

  @Cron("0 */15 * * * *")
  public crontriggerDiscoveryService(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.logger.debug("Discovery Service cron task triggered.");
        this.discoveryService
          .scan()
          .then((r) => {
            resolve(r);
          })
          .catch((err) => {
            this.logger.error("Error in discovery cron job", err);
            reject(err);
          });
      } catch (err) {
        this.logger.error("Error in discovery cron job", err);
        reject(err);
      }
    });
  }

  @Cron("0 */5 * * * *")
  public crontriggerTrackStats(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
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
              expireAt: new Date(),
            };
            dto.expireAt.setDate(dto.created.getDate() + 10);
            const created = new this.containerStatsModel(dto);
            promises.push(created.save());
          });

          Promise.allSettled(promises)
            .then(() => {
              resolve(true);
            })
            .catch((err) => {
              this.logger.error("Error in stats cron job", err);
              reject(err);
            });
        });
      } catch (err) {
        this.logger.error("Error in stats cron job", err);
        reject(err);
      }
    });
  }

  public initalJobs(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.logger.debug("Starting initial jobs run.");
        const promises = [];

        promises.push(this.crongetdailyimages());
        promises.push(this.crontriggerDiscoveryService());
        promises.push(this.crontriggerTrackStats());
        Promise.allSettled(promises)
          .then((r) => {
            this.logger.debug("Finished initial jobs run");
            resolve(r);
          })
          .catch((err) => {
            this.logger.error("Error in initial jobs execution", err);
            reject(err);
          });
      } catch (err) {
        this.logger.error("Error in initial jobs execution", err);
        reject(err);
      }
    });
  }
}

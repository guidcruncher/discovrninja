import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";

import { ImageStorageStats } from "./dto/image-storagestats.dto";
import { VolumeStorageStats } from "./dto/volume-storagestats.dto";

@Injectable()
export class StorageStatsService {
  private readonly logger = new Logger(StorageStatsService.name);

  constructor(
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
    @InjectModel(ImageStorageStats.name)
    private imageStorageStatsModel: Model<ImageStorageStats>,
    @InjectModel(VolumeStorageStats.name)
    private volumeStorageStatsModel: Model<VolumeStorageStats>,
  ) {}

  public saveImageStats(images: any[]) {
    return new Promise((resolve, reject) => {
      const old = this.imageStorageStatsModel
        .deleteMany({})
        .exec()
        .then((r) => {
          this.imageStorageStatsModel
            .insertMany(
              images.map((i) => {
                return ImageStorageStats.Create(i);
              }),
            )
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error saving storage stats", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error clearing storage stats during save", err);
          reject(err);
        });
    });
  }

  public getImageStorageStats() {
    return new Promise<any[]>((resolve, reject) => {
      const h = this.imageStorageStatsModel
        .find()
        .sort({ Title: 1 })
        .lean()
        .exec()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          this.logger.error("Error in getImageStorageStats", err);
          reject(err);
        });
    });
  }

  public getVolumeStorageStats() {
    return new Promise<any[]>((resolve, reject) => {
      const h = this.volumeStorageStatsModel
        .find()
        .sort({ Name: 1 })
        .lean()
        .exec()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          this.logger.error("Error in getVolumeStorageStats", err);
          reject(err);
        });
    });
  }

  public saveVolumeStats(volumes: any[]) {
    return new Promise((resolve, reject) => {
      const old = this.volumeStorageStatsModel
        .deleteMany({})
        .exec()
        .then((r) => {
          this.volumeStorageStatsModel
            .insertMany(
              volumes.map((i) => {
                return VolumeStorageStats.Create(i);
              }),
            )
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error saving volume stats", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error clearing volume stats during save", err);
          reject(err);
        });
    });
  }
}

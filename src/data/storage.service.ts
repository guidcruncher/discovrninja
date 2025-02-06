import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";

import { Volume } from "./dto/volume.dto";

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);

  constructor(
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
    @InjectModel(Volume.name)
    private volumeModel: Model<Volume>,
  ) {}

  public deleteVolume(name) {
    return new Promise((resolve, reject) => {
      this.volumeModel
        .deleteOne({ $or: [{ Id: name }, { Name: name }] })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in deleteVolume", err);
          reject(err);
        });
    });
  }

  public async save(data: Volume): Promise<any> {
    return new Promise((resolve, reject) => {
      this.volumeModel
        .findOneAndUpdate({ Name: data.Name }, data, { upsert: true })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error saving Volume", err);
          reject(err);
        });
    });
  }

  public async get(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.volumeModel
        .findOne({ $or: [{ Id: name }, { Name: name }] })
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error retrieving Volume for " + name, err);
          reject(err);
        });
    });
  }

  public async all(): Promise<any> {
    return new Promise((resolve, reject) => {
      const filter = {};

      this.connection.getClient().connect(); //this.configService.get("host.mongo.url") + "discovrninja");

      const old = this.volumeModel
        .find(filter)
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error retrieving all Volumes", err);
          reject(err);
        });
    });
  }
}

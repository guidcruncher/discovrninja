import { MongoConnection } from "@data/data.connection";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";

import { ServiceDefinition } from "./dto/servicedefinition.dto";

@Injectable()
export class ServiceDefinitionService {
  private readonly logger = new Logger(ServiceDefinitionService.name);

  constructor(
    private mongoConnection: MongoConnection,
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
    @InjectModel(ServiceDefinition.name)
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

  public deleteStack(containerName) {
    return new Promise((resolve, reject) => {
      this.serviceDefModel
        .deleteOne({ containerName: containerName })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in deleteStack", err);
          reject(err);
        });
    });
  }

  public async save(
    data: ServiceDefinition,
    userEdited: boolean,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.serviceDefModel
        .findOne({ containerName: data.containerName })
        .lean()
        .exec()
        .then((current) => {
          if (current) {
            data.updated = new Date();
            if (!data.available) {
              if (data.available != current.available) {
                data.lastSeen = new Date();
              }
              if (!data.firstSeen) {
                data.firstSeen = data.created ?? new Date();
              }
            } else {
              data.lastSeen = new Date();
            }

            if (current.edited && !userEdited) {
              data.proxy = current.proxy;
              data.public = current.public;
              data.iconCatalog = current.iconCatalog;
              data.iconSlug = current.iconSlug;
              data.name = current.name;
            }
          } else {
            data.created = new Date();
            if (data.available) {
              data.lastSeen = new Date();
              if (!data.firstSeen) {
                data.firstSeen = new Date();
              }
            }
          }

          if (userEdited) {
            data.edited = true;
          }

          this.serviceDefModel
            .findOneAndUpdate({ containerName: data.containerName }, data, {
              upsert: true,
            })
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error saving definition", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error(
            "Error during saving definition fetching previous verdion",
            err,
          );
          reject(err);
        });
    });
  }

  public async archive(containerName: string, archived: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this.serviceDefModel
        .findOneAndUpdate(
          { containerName: containerName.toLowerCase() },
          { archived: archived },
          { new: true },
        )
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error archiving definition", err);
          reject(err);
        });
    });
  }

  public async get(containerName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.serviceDefModel
        .find({ containerName: containerName })
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error(
            "Error retrieving definition for " + containerName,
            err,
          );
          reject(err);
        });
    });
  }

  public async all(excludeArchived: boolean): Promise<any> {
    return this.mongoConnection.transaction<any>((session) => {
      let filter = {};
      if (excludeArchived) {
        filter = { archived: false };
      }
      return this.serviceDefModel.find(filter).lean().exec();
    });
  }
}

import { ServiceDefinition } from "@customtypes/servicedefinition";
import { MongoConnection } from "@data/data.connection";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";

import { ServiceDefinitionDto } from "./dto/servicedefinition.dto";

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

  public async save(containerName: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.serviceDefModel
        .find({ containerName: containerName })
        .exec()
        .then((r) => {
          const dto: ServiceDefinitionDto = new ServiceDefinitionDto();
          if (r && r.length > 0) {
            dto.monitor = r[0].monitor ?? true;
            dto.uptime = r[0].uptime ?? true;
            dto.project = r[0].project;
            dto.firstSeen = r[0].firstSeen;
            dto.ipaddress = r[0].ipaddress;
            dto.created = r[0].created;
            dto.archived = r[0].archived;
            dto.lastSeen = r[0].lastSeen;
            dto.lastPolled = r[0].lastPolled;
            dto.downtime = r[0].downtime;
            dto.available = r[0].available;
            dto.updated = new Date();
          } else {
            dto.created = new Date();
            dto.downtime = 0;
          }

          dto.edited = true;
          dto.containerName = data.containerName.toLowerCase();
          dto.hostname = data.hostname;
          dto.name = data.name;
          dto.proxy = data.proxy;
          dto.public = data.public;
          dto.iconSlug = data.iconSlug;
          dto.iconCatalog = data.iconCatalog;
          dto.archived = data.archived;
          dto.project = data.project;
          dto.monitor = data.monitor;
          dto.uptime = data.uptime;

          if (data.available != null) {
            if (data.avaiable == false && dto.available != data.available) {
              data.lastSeen = new Date();
            }
            dto.available = data.available;
          }

          this.serviceDefModel
            .findOneAndUpdate(
              { containerName: dto.containerName.toLowerCase() },
              dto,
              { upsert: true },
            )
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error saving definition", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error loading definition to save", err);
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

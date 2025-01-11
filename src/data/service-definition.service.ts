import { ServiceDefinition } from "@customtypes/servicedefinition";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { ServiceDefinitionDto } from "./dto/servicedefinition.dto";

@Injectable()
export class ServiceDefinitionService {
  private readonly logger = new Logger(ServiceDefinitionService.name);

  constructor(
    private configService: ConfigService,
    @InjectModel(ServiceDefinition.name)
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

  public async save(containerName: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.serviceDefModel
        .find({ containerName: containerName })
        .exec()
        .then((r) => {
          const dto: ServiceDefinitionDto = new ServiceDefinitionDto();
          if (r && r.length > 0) {
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
          this.logger.error("Error retrieving definition", err);
          reject(err);
        });
    });
  }

  public async all(excludeArchived: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      let filter = {};

      if (excludeArchived) {
        filter = { archived: false };
      }

      const old = this.serviceDefModel
        .find(filter)
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error retrieving definition", err);
          reject(err);
        });
    });
  }
}

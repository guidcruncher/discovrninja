import { IDiscoveryAgent } from "@customtypes/idiscoveryagent";
import {
  ServiceDefinitionList,
  ServiceDefinition,
} from "@customtypes/servicedefinition";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ServiceDefinitionDto } from "@dto/servicedefinition.dto";
import * as mongoose from "mongoose";

@Injectable()
export class DiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(DiscoveryService.name);

  constructor(
    private dockerDiscoveryService: DockerDiscoveryService,
    private fileDiscoveryService: FileDiscoveryService,
    @InjectModel(ServiceDefinition.name)
    private serviceDefinitionModel: Model<ServiceDefinition>,
    @Inject("ServiceDefinitionModel")
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

  public async saveDefinition(containerName: string, data: any): Promise<any> {
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
            dto.updated = new Date();
          } else {
            dto.created = new Date();
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
          this.serviceDefinitionModel
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

  public async archiveDefinition(
    containerName: string,
    archived: boolean,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.serviceDefinitionModel
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

  public async getDefinition(containerName: string): Promise<any> {
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

  public async getAllDefinitions(excludeArchived: boolean): Promise<any> {
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

  public async changeIcon(
    containerName: string,
    catalog: string,
    slug: string,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.serviceDefModel
        .findOneAndUpdate(
          { containerName: containerName },
          {
            $set: {
              edited: true,
              updated: new Date(),
              iconSlug: slug,
              iconCatalog: catalog,
            },
          },
        )
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error saving changeIcon", err);
          reject(err);
        });
    });
  }

  public async storeInMongo(list: ServiceDefinitionList): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const promises = [];
      const changes = [];

      const old = this.serviceDefModel
        .find()
        .exec()
        .then((icons) => {
          list.services.forEach((service) => {
            const dto: ServiceDefinitionDto = new ServiceDefinitionDto();
            dto.name = service.name;
            dto.containerName = service.containerName.toLowerCase();
            dto.hostname = service.hostname;
            dto.ipaddress = service.ipaddress;
            dto.proxy = service.proxy;
            dto.archived = service.archived;
            dto.iconCatalog = service.iconCatalog;
            dto.iconSlug = service.iconSlug;
            dto.public = service.public;
            dto.edited = false;
            dto.updated = dto.created;
            const ico = icons.find((f) => {
              return (
                f.containerName.toLowerCase() == dto.containerName.toLowerCase()
              );
            });
            if (ico) {
              dto.name = ico.name;
              dto.public = ico.public;
              dto.edited = ico.edited;
              dto.updated = new Date();
              dto.iconSlug = ico.iconSlug;
              dto.iconCatalog = ico.iconCatalog;
              dto.archived = ico.archived;
              promises.push(
                this.serviceDefinitionModel.findOneAndUpdate(
                  { containerName: dto.containerName.toLowerCase() },
                  dto,
                  { upsert: true },
                ),
              );
            } else {
              dto.created = new Date();
              promises.push(
                this.serviceDefinitionModel.findOneAndUpdate(
                  { containerName: dto.containerName.toLowerCase() },
                  dto,
                  { upsert: true },
                ),
              );
            }
          });

          mongoose.set("bufferCommands", false);
          Promise.allSettled(promises)
            .then((result) => {
              resolve(true);
            })
            .catch((err) => {
              this.logger.error("Error saving ServiceDefinition", err);
              reject(err);
            });
        });
    });
  }

  public find(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const client = this.serviceDefModel
        .find({ name: id })
        .exec()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error performing Service definition find", err);
          reject(err);
        });
    });
  }

  scan(): Promise<ServiceDefinitionList> {
    return new Promise<ServiceDefinitionList>((resolve, reject) => {
      const result: ServiceDefinitionList = new ServiceDefinitionList();
      const promises = [];
      result.created = new Date();

      promises.push(this.dockerDiscoveryService.scan());
      promises.push(this.fileDiscoveryService.scan());
      Promise.allSettled(promises)
        .then((results) => {
          results.forEach((r) => {
            if (r.status == "fulfilled") {
              const services = r.value.services;
              result.services = result.services.concat(services);
            } else {
              this.logger.warn(r.reason);
            }
          });
          result.services.sort((a, b) => {
            if (a.name) {
              return a.name.localeCompare(b.name);
            }
            return 0;
          });

          this.storeInMongo(result)
            .then((r) => {
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error saving scan data", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error running scan", err);
          reject(err);
        });
    });
  }
}

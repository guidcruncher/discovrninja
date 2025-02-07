import { IDiscoveryAgent } from "@customtypes/idiscoveryagent";
import {
  ServiceDefinition,
  ServiceDefinitionList,
} from "@customtypes/servicedefinition";
import { ServiceDefinitionDto } from "@data/dto/servicedefinition.dto";
import { ServiceDefinitionService } from "@data/service-definition.service";
import { GitHelper } from "@helpers/githelper";
import { IconCDNService } from "@icon/icon-cdn.service";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import * as fs from "fs";
import { Model } from "mongoose";
import * as mongoose from "mongoose";
import * as path from "path";

import { AdapterService } from "./adapter.service";
import { DockerDiscoveryService } from "./docker-discovery.service";
import { FileDiscoveryService } from "./file-discovery.service";

@Injectable()
export class DiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(DiscoveryService.name);

  constructor(
    private adapterService: AdapterService,
    private iconCDNService: IconCDNService,
    private configService: ConfigService,
    private dockerDiscoveryService: DockerDiscoveryService,
    private fileDiscoveryService: FileDiscoveryService,
    private serviceDefinitionService: ServiceDefinitionService,
    @InjectModel(ServiceDefinition.name)
    private serviceDefinitionModel: Model<ServiceDefinition>,
    @Inject("ServiceDefinitionModel")
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

  public async getAll(excludeArchived) {
    return this.serviceDefinitionService.all(excludeArchived);
  }

  public async saveProjectDefinition(project: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const workingDirMapped = this.configService.get("docker.stackBasePath");
      const workingDir = process.env.IN_DOCKER
        ? "/docker/stacks/"
        : workingDirMapped;
      let filename = path.join(workingDir, project, "compose.yaml");
      this.logger.debug("writing", filename);
      fs.writeFileSync(filename, data.compose.join("\n"));
      filename = path.join(workingDir, project, "stack.env");
      this.logger.debug("writing", filename);
      fs.writeFileSync(filename, data.env);
      GitHelper.commit(path.join(workingDir, project), "Editor updates", {
        name: "system",
      })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in commit", err);
        });
    });
  }

  public async saveDefinition(containerName: string, data: any): Promise<any> {
    return this.serviceDefinitionService.save(containerName, data);
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

  private ensureIcon(dto) {
    return new Promise((resolve, reject) => {
      let query = [];
      query.push(dto.name.toLowerCase().trim());
      if (dto.containerName != "") {
        query.push(dto.containerName.toLowerCase().trim());
      }
      if (dto.iconCatalog == "" && dto.iconSlug != "") {
        query.push(dto.iconSlug.toLowerCase().trim());
      }
      if (dto.iconCatalog != "" && dto.iconSlug != "") {
        query = [];
      }
      if (query.length == 0) {
        resolve(dto);
      } else {
        const promises = [];
        query.forEach((q) => {
          promises.push(this.iconCDNService.query(q, true));
        });

        Promise.any(promises)
          .then((result) => {
            if (result.length > 0) {
              dto.iconCatalog = result[0].catalog;
              dto.iconSlug = result[0].slug;
            }
            resolve(dto);
          })
          .catch((err) => {
            this.logger.error("Error executing EnsureIcon", err);
            resolve(dto);
          });
      }
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
            dto.project = service.project;
            dto.firstSeen = service.firstSeen;
            dto.available = service.available;
            dto.edited = false;
            dto.downtime = 0;
            if (service.available) {
              if (!dto.firstSeen) {
                dto.firstSeen = new Date();
              }
              dto.lastSeen = new Date();
            }

            dto.created = new Date();
            const ico = icons.find((f) => {
              return (
                f.containerName.toLowerCase() == dto.containerName.toLowerCase()
              );
            });
            if (ico) {
              dto.downtime = ico.downtime ?? 0;
              dto.lastPolled = ico.lastPolled;
              dto.name = ico.name;
              dto.public = ico.public;
              dto.edited = ico.edited;
              dto.updated = new Date();
              dto.created = ico.created;
              dto.iconSlug = ico.iconSlug;
              dto.iconCatalog = ico.iconCatalog;
              dto.archived = ico.archived;
              dto.firstSeen = ico.firstSeen;
              if (!service.available) {
                if (dto.lastPolled) {
                  dto.downtime +=
                    (new Date().getTime() - dto.lastPolled.getTime()) / 1000;
                }
              } else {
                if (!dto.firstSeen) {
                  dto.firstSeen = new Date();
                }
              }
            }
            dto.lastPolled = new Date();
            promises.push(
              new Promise((resolve, reject) => {
                this.ensureIcon(dto).then((r) => {
                  this.serviceDefinitionModel
                    .findOneAndUpdate(
                      { containerName: dto.containerName.toLowerCase() },
                      dto,
                      { upsert: true },
                    )
                    .then((res) => {
                      resolve(res);
                    });
                });
              }),
            );
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
              let promises = [];
              promises.push(this.adapterService.getWebAdapter());
              promises.push(this.adapterService.getDnsAdapter());

              Promise.allSettled(promises)
                .then((adapters) => {
                  promises = [];
                  adapters.forEach((r) => {
                    if (r.status == "fulfilled") {
                      promises.push(r.value.writeHosts());
                    }
                  });
                  Promise.allSettled(promises)
                    .then((adapterresults) => {
                      resolve(result);
                    })
                    .catch((err) => {
                      this.logger.error("Error during adapter execution", err);
                      reject(err);
                    });
                })
                .catch((err) => {
                  this.logger.error("Error obtaining adapters", err);
                  reject(err);
                });
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

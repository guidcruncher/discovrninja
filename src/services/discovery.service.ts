import { IDiscoveryAgent } from "@customtypes/idiscoveryagent";
import {
  ServiceDefinition,
  ServiceDefinitionList,
} from "@customtypes/servicedefinition";
import { StringBuilder } from "@customtypes/stringbuilder";
import { ServiceDefinitionDto } from "@dto/servicedefinition.dto";
import { GitHelper } from "@helpers/githelper";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { DockerDiscoveryService } from "@services/docker.discovery.service";
import { FileDiscoveryService } from "@services/file.discovery.service";
import * as crypto from "crypto";
import * as fs from "fs";
import { Model } from "mongoose";
import * as mongoose from "mongoose";
import * as path from "path";

@Injectable()
export class DiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(DiscoveryService.name);

  constructor(
    private configService: ConfigService,
    private dockerDiscoveryService: DockerDiscoveryService,
    private fileDiscoveryService: FileDiscoveryService,
    @InjectModel(ServiceDefinition.name)
    private serviceDefinitionModel: Model<ServiceDefinition>,
    @Inject("ServiceDefinitionModel")
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

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
            dto.project = r[0].project;
            dto.firstSeen = r[0].firstSeen;
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
          dto.project = data.project;
          dto.proxy = data.proxy;
          dto.public = data.public;
          dto.project = data.project;
          dto.firstSeen = data.firstSeen;
          dto.iconSlug = data.iconSlug;
          dto.iconCatalog = data.iconCatalog;
          dto.archived = data.archived;

          if (data.available != null) {
            if (data.avaiable == false && dto.available != data.available) {
              data.lastSeen = new Date();
            }
            dto.available = data.available;
          }

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

              dto.lastPolled = new Date();
              promises.push(
                this.serviceDefinitionModel.findOneAndUpdate(
                  { containerName: dto.containerName.toLowerCase() },
                  dto,
                  { upsert: true },
                ),
              );
            } else {
              dto.created = new Date();
              dto.lastPolled = new Date();
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

  private updateDNS(services: ServiceDefinitionList) {
    const basedir = process.env.DNS_CFG ?? "";
    const sb: StringBuilder = new StringBuilder();
    let changed = false;

    if (basedir == "") {
      return;
    }

    if (!this.configService.get("webProxy.autoUpdate")) {
      return;
    }

    const filename = path.join(basedir, "hosts.conf");
    services.services
      .sort((a, b) => {
        return a.containerName
          .toLowerCase()
          .localeCompare(b.containerName.toLowerCase());
      })
      .forEach((sd) => {
        const valid = (sd.public ?? "") != "" && (sd.proxy ?? "") != "";
        if (valid) {
          const publicurl: URL = new URL(sd.public);
          const proxy: URL = new URL(sd.proxy);
          sb.appendFormat(
            "host-record={1},{0}",
            this.configService.get("webProxy.publicIpAddress"),
            publicurl.hostname,
          );
        }
      });

    if (!this.compareHash(filename + ".md5", sb.toStringDelimited("\n"))) {
      fs.writeFileSync(filename, sb.toStringDelimited("\n"));
      changed = true;
    }

    if (changed) {
      // reload config
    }
  }

  private compareHash(filename: string, newValue: string): boolean {
    const newHash = crypto.createHash("md5").update(newValue).digest("hex");

    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, newHash);
      return false;
    }

    const currentHash = fs.readFileSync(filename, "utf8");

    if (currentHash != newHash) {
      fs.writeFileSync(filename, newHash);
      return false;
    }

    return true;
  }

  private updateCaddy(services: ServiceDefinitionList) {
    const baseDir = process.env.CADDY_CFG ?? "";
    let changed = false;

    if (baseDir == "") {
      return;
    }

    if (!this.configService.get("webProxy.autoUpdate")) {
      return;
    }

    services.services
      .sort((a, b) => {
        return a.containerName
          .toLowerCase()
          .localeCompare(b.containerName.toLowerCase());
      })
      .forEach((sd) => {
        const valid = (sd.public ?? "") != "" && (sd.proxy ?? "") != "";

        if (valid) {
          const sb: StringBuilder = new StringBuilder();
          const publicurl: URL = new URL(sd.public);
          const proxy: URL = new URL(sd.proxy);
          const filename = path.join(baseDir, publicurl.hostname + ".conf");
          let port = "";
          if (publicurl.protocol == "https:") {
            port = ":443";
          }
          sb.appendLine(publicurl.host + port + " {");
          sb.appendLine("        reverse_proxy " + proxy.href.slice(0, -1));
          sb.appendLine("        import /etc/caddy/includes/cors.conf");
          sb.appendLine("}");

          if (!this.compareHash(filename + ".md5", sb.toString())) {
            fs.writeFileSync(filename, sb.toString());
            changed = true;
          }
        }
      });

    if (changed) {
      //reload config
    }
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
              this.updateCaddy(result);
              this.updateDNS(result);
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

/* eslint-disable @typescript-eslint/prefer-for-of */
import { ServiceDefinitionService } from "@data/service-definition.service";
import { ContainerCreateOptionsHelper } from "@helpers/containercreateoptionshelper";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { ContainerStats } from "@data/schemas/containerstats.schema";
import { InjectModel } from "@nestjs/mongoose";
import { FancyAnsi } from "fancy-ansi";
import fs from "fs";
import { Model } from "mongoose";
import path from "path";

import { DockerConnectorService } from "./docker-connector.service";
import { DockerRepositoryService } from "./docker-repository.service";

/**
 * Docker connection and management
 */
@Injectable()
export class DockerService {
  private readonly logger = new Logger(DockerService.name);

  constructor(
    private readonly dockerRepositoryService: DockerRepositoryService,
    private configService: ConfigService,
    private readonly connectorService: DockerConnectorService,
    private readonly serviceDefinitionService: ServiceDefinitionService,
    @InjectModel(ContainerStats.name)
    private containerStatsModel: Model<ContainerStats>,
    @Inject("ServiceDefinitionModel")
    private serviceDefModel: Model<ServiceDefinition>,
  ) {}

  private getColorLevel(sd: ServiceDefinition) {
    const value = this.calculateUptimePercent(sd) * 100;
    let classname = "bg-danger.bg-gradient text-light";
    if (value >= 5) {
      classname = "text-danger";
    }
    if (value >= 25) {
      classname = "text-danger-emphasis";
    }
    if (value >= 45) {
      classname = "text-warning";
    }
    if (value >= 65) {
      classname = "text-success-emphasis";
    }
    if (value >= 95) {
      classname = "text-success";
    }
    return classname;
  }

  public isContainerAvailable(sd: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getContainer(sd.containerName)
        .then((ctr) => {
          sd.available = !["exited", "dead", "paused"].includes(
            ctr.State.Status.toLowerCase(),
          );
          resolve(sd);
        })
        .catch((err) => {
          this.logger.error("Error checking container state", err);
          sd.available = false;
          resolve(sd);
        });
    });
  }

  public getContainerAvailable(name: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getContainer(name)
        .then((ctr) => {
          resolve(
            !["exited", "dead", "paused"].includes(
              ctr.State.Status.toLowerCase(),
            ),
          );
        })
        .catch((err) => {
          this.logger.error("Error checking container state", err);
          reject(err);
        });
    });
  }

  public deleteStack(container) {
    return this.serviceDefinitionService.deleteStack(container);
  }

  public getContainerDashboard(id: string, limit: number): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.containerStatsModel
        .find({ name: id })
        .sort("created")
        .limit(limit)
        .exec()
        .then((results) => {
          const output = {
            periods: [],
            cpuPercent: [],
            memoryUsage: [],
            memoryFreePercent: [],
            memoryLimit: [],
          };
          output.periods = results.map((t) => {
            return t.created;
          });
          output.cpuPercent = results.map((t) => {
            return t.cpuPercent;
          });
          output.memoryUsage = results.map((t) => {
            return t.memoryUsage;
          });
          output.memoryFreePercent = results.map((t) => {
            return t.memoryFreePercent / 100;
          });
          output.memoryLimit = results.map((t) => {
            return t.memoryLimit;
          });

          resolve(output);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  private determineProjectPath(workingFolder: string, config: string): string {
    if (workingFolder == "" || config == "") {
      return "";
    }

    const folder = workingFolder.split(path.sep).pop();
    const projectPath = path.join(
      this.configService.get("docker.stackBasePath"),
      folder,
    );

    if (!fs.existsSync(path.join(projectPath, "compose.yaml"))) {
      return "";
    }

    if (fs.existsSync(path.join(projectPath, config))) {
      return projectPath;
    }
    return "";
  }

  private formatImage(image: string): string {
    let img = image;
    if (img.split("/").length < 2) {
      img = "library/" + img;
    }

    if (img.split("/").length < 3) {
      return "docker.io/" + img;
    }
    return image;
  }

  private formatDate(dte: Date): string {
    return dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
  }

  private daydiff(a: Date, b: Date): number {
    const diff = a.getTime() - b.getTime();
    const diffDays = Math.floor(diff / 86400000);
    return diffDays;
  }

  public listNetworkNames() {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      docker.listNetworks((err, networks) => {
        if (err) {
          this.logger.error("Error in listNetworks", err);
          reject(err);
          return;
        }

        resolve(
          networks
            .map((network) => {
              return network.Name;
            })
            .sort(),
        );
      });
    });
  }

  public getContainer(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.inspect((err, data: any) => {
        if (err) {
          reject(err);
        } else {
          data.Name = data.Name.substring(1);
          data.Config.Image = this.formatImage(data.Config.Image);
          data.available = !["exited", "dead", "paused"].includes(
            data.State.Status.toLowerCase(),
          );

          if (data.Config.Labels["com.guidcruncher.discovrninja.icon_slug"]) {
            data.icon_slug =
              data.Config.Labels["com.guidcruncher.discovrninja.icon_slug"];
          }
          data.publicUrl = data.Config.Labels["homepage.href"];

          if (data.Config.Labels["homepage.targetaddress"]) {
            data.publicUrl = data.Config.Labels["homepage.targetaddress"];
          }

          if (data.Config.Labels["com.guidcruncher.discovrninja.public"]) {
            data.publicUrl =
              data.Config.Labels["com.guidcruncher.discovrninja.public"];
          }

          data.editor = {};
          const workdir =
            data.Config.Labels["com.docker.compose.project.working_dir"] ?? "";
          data.editor.config = (
            data.Config.Labels["com.docker.compose.project.config_files"] ?? ""
          ).replace(workdir, ".");
          data.editor.project =
            data.Config.Labels["com.docker.compose.project"] ?? "";
          data.editor.environment = (
            data.Config.Labels["com.docker.compose.project.environment_file"] ??
            ""
          ).replace(workdir, ".");
          data.editor.workingFolder =
            data.Config.Labels["com.docker.compose.project.working_dir"] ?? "";
          data.editor.editable = false;
          data.editor.projectPath = this.determineProjectPath(
            data.editor.workingFolder,
            data.editor.config,
          );
          data.editor.editable = data.editor.projectPath != "";

          this.serviceDefinitionService
            .get(data.Name)
            .then((sd) => {
              data.icon_slug = sd[0].iconSlug;
              data.icon_catalog = sd[0].iconCatalog;
              resolve(data);
            })
            .catch((err) => {
              resolve(data);
            });
        }
      });
    });
  }

  public getContainerCreateJson(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.inspect((err, data: any) => {
        if (err) {
          reject(err);
        } else {
          const response = ContainerCreateOptionsHelper.fromInspectInfo(data);
          resolve(response);
        }
      });
    });
  }

  public checkForUpdateImage(img: string): Promise<any> {
    const imgref = this.formatImage(img);

    return new Promise((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const updateStatus: any = {
        image: imgref,
        imageCreated: "",
        latestBuildDate: "",
        updateDue: false,
        delta: 0,
        imageDigest: "",
        repoDigest: "",
      };

      docker.getImage(imgref).inspect((err, image) => {
        if (err) {
          this.logger.error("Error checking for updates", err);
          reject(err);
        } else {
          if (image.RepoDigests) {
            if (image.RepoDigests.length > 0) {
              updateStatus.imageDigest = image.RepoDigests[0].split("@")[1];
            }
          }
          updateStatus.imageCreated = this.formatDate(
            new Date(Date.parse(image.Created)),
          );

          this.dockerRepositoryService
            .queryRepositoryTags(
              this.formatImage(imgref),
              image.Os,
              image.Architecture,
            )
            .then((repo) => {
              updateStatus.repoDigest = repo.digest;
              updateStatus.latestBuildDate = this.formatDate(
                new Date(Date.parse(repo.last_updated)),
              );
              updateStatus.delta = this.daydiff(
                new Date(updateStatus.latestBuildDate),
                new Date(updateStatus.imageCreated),
              );

              updateStatus.updateDue =
                updateStatus.imageDigest != updateStatus.repoDigest;
              resolve(updateStatus);
            })
            .catch((err) => {
              this.logger.error("Error checking for update", err);
              reject(err);
            });
        }
      });
    });
  }

  public stop(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.stop((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  public getSystemInfo() {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const promises = [];
      const data: any = { info: {}, version: {} };

      promises.push(
        new Promise((resolve, reject) => {
          docker.info((err, r) => {
            if (err) {
              reject(err);
            } else {
              resolve({ id: "info", v: r });
            }
          });
        }),
      );

      promises.push(
        new Promise((resolve, reject) => {
          docker.version((err, r) => {
            if (err) {
              reject(err);
            } else {
              resolve({ id: "version", v: r });
            }
          });
        }),
      );

      Promise.allSettled(promises)
        .then((results) => {
          results.forEach((r) => {
            if (r.status == "fulfilled") {
              data[r.value.id] = r.value.v;
            }
          });
          resolve(data);
        })
        .catch((err) => {
          this.logger.error("Error in getSystemInfo", err);
          reject(err);
        });
    });
  }

  public logs(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.logs(
        { stdout: true, stderr: true, tail: 100 },
        (err, data: Buffer) => {
          if (err) {
            reject(err);
          } else {
            const fancyAnsi = new FancyAnsi();
            const text = data.toString("ascii");
            const result = fancyAnsi.toHtml(text);
            resolve(result.replace(/(?:\r\n|\r|\n)/g, "<br>"));
          }
        },
      );
    });
  }

  public start(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.start((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  public restart(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.connectorService.createDocker();

      const container = docker.getContainer(id);
      container.stop((err, data) => {
        if (err) {
          reject(err);
        } else {
          container.start((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        }
      });
    });
  }

  /**
   * Gets the statistics for a given container
   */
  public getContainerStats(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      const container = docker.getContainer(id);
      container.stats({ stream: false }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  /**
   * Returns a list of ruunning containers
   */
  public getContainers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      docker.listContainers((err, containers) => {
        if (err) {
          reject(err);
        } else {
          resolve(containers);
        }
      });
    });
  }

  public getAllContainers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      docker.listContainers({ all: true, size: true }, (err, containers) => {
        if (err) {
          reject(err);
        } else {
          const promises = [];
          containers.forEach((container) => {
            promises.push(this.getContainer(container.Id));
          });

          const c = [];
          Promise.allSettled(promises).then((results) => {
            results.forEach((promise) => {
              if (promise.status == "fulfilled") {
                c.push(promise.value);
              }
            });
            resolve(c);
          });
        }
      });
    });
  }

  public dockerDF() {
    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      docker.df((err, results) => {
        if (err) {
          this.logger.error("Error in dockerDF", err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  /**
   * Returns a list of docker compose projects and their associated containers
   */
  public getProjectTree(): Promise<any> {
    const projects = {};

    return new Promise<any>((resolve, reject) => {
      const docker = this.connectorService.createDocker();
      this.serviceDefinitionService.all(true).then((serviceDefs) => {
        docker.listContainers({ all: true, size: false }, (err, containers) => {
          const promises: Promise<any>[] = [];

          containers.forEach((container) => {
            promises.push(this.getContainer(container.Id));
          });

          Promise.allSettled(promises)
            .then((results) => {
              results.forEach((promise) => {
                if (promise.status == "fulfilled") {
                  const container = promise.value;
                  const project =
                    container.Config.Labels["com.docker.compose.project"];
                  if (typeof projects[project] === "undefined") {
                    const workdir =
                      container.Config.Labels[
                        "com.docker.compose.project.working_dir"
                      ] ?? "";

                    projects[project] = {
                      config: (
                        container.Config.Labels[
                          "com.docker.compose.project.config_files"
                        ] ?? ""
                      ).replace(workdir, "."),
                      environment: (
                        container.Config.Labels[
                          "com.docker.compose.project.environment_file"
                        ] ?? ""
                      ).replace(workdir, "."),
                      workingFolder:
                        container.Config.Labels[
                          "com.docker.compose.project.working_dir"
                        ] ?? "",
                      containers: [],
                    };
                    const projectPath = this.determineProjectPath(
                      projects[project].workingFolder,
                      projects[project].config,
                    );

                    const serviceDef = serviceDefs.find((sd) => {
                      return sd.containerName == container.Name;
                    });
                    if (serviceDef) {
                      projects[project].iconCatalog = serviceDef.iconCatalog;
                      projects[project].iconSlug = serviceDef.iconSlug;
                    }

                    projects[project].editable = projectPath != "";
                    if (projects[project].editable) {
                      const folder = projectPath.split(path.sep).pop();
                      projects[project].projectPath = folder;
                    }
                  }
                  projects[project].containers.push({
                    containerName: container.Name,
                    hostname: container.Config.Hostname,
                    projectName: project,
                    editable: projects[project].editable,
                  });
                }
              });

              const keys = Object.keys(projects);
              const sortedProjects = {};
              keys.sort();

              for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                sortedProjects[k] = projects[k];
              }

              resolve(sortedProjects);
            })
            .catch((err) => {
              reject(err);
            });
        });
      });
    });
  }

  private calculateCpuPercent(metric): any {
    const cpuDelta =
      metric.cpu_stats.cpu_usage.total_usage -
      metric.precpu_stats.cpu_usage.total_usage;
    const systemDelta =
      metric.cpu_stats.system_cpu_usage - metric.precpu_stats.system_cpu_usage;
    let onlineCPUs = metric.cpu_stats.online_cpus;
    let cpuPercent = 0.0;

    if (onlineCPUs == 0.0) {
      onlineCPUs = metric.cpu_stats.cpu_usage.percpu_usage;
    }

    if (systemDelta > 0.0 && cpuDelta > 0.0) {
      cpuPercent = (cpuDelta / systemDelta) * onlineCPUs;
    }
    return cpuPercent;
  }

  private formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      "Bytes",
      "KiB",
      "MiB",
      "GiB",
      "TiB",
      "PiB",
      "EiB",
      "ZiB",
      "YiB",
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  private calculateUptime(sd: ServiceDefinition): number {
    if (!sd.firstSeen) {
      return 0;
    }
    const totalTime =
      (new Date().getTime() - new Date(sd.firstSeen).getTime()) / 1000;
    return totalTime - (sd.downtime ?? 0);
  }

  private calculateUptimePercent(sd: ServiceDefinition): number {
    if (!sd.firstSeen) {
      return 0;
    }
    const totalTime =
      (new Date().getTime() - new Date(sd.firstSeen).getTime()) / 1000;
    const ratio = 100 / (totalTime == 0 ? 1 : totalTime);
    return ((totalTime - (sd.downtime ?? 0)) * ratio) / 100;
  }

  private getStateCss(state: string): string {
    switch (state) {
      case "created":
        return "dw-state text-warning fa-regular fa-square-plus";
      case "running":
        return "dw-state text-success fa-solid fa-person-running";
      case "restarting":
        return "dw-state text-warning fa-solid fa-power-off";
      case "exited":
        return "dw-state text-danger fa-solid fa-arrow-right-from-bracket";
      case "paused":
        return "dw-state text-info fa-solid fa-pause";
      case "dead":
        return "dw-state text-danger fa-solid fa-face-dizzy";
      case "configured":
        return "dw-state text-info fa-solid fa-gears";
    }
  }

  private calculateUsage(record: any, container: any) {
    return new Promise((resolve, reject) => {
      this.getContainerStats(container.Id)
        .then((detail) => {
          record.stats.cpuPercent = this.calculateCpuPercent(detail);
          record.cpuAlert = record.stats.cpuPercent > 1;
          record.stats.cpuPercentStr = Intl.NumberFormat("default", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(record.stats.cpuPercent);
          record.stats.memoryUsageStr = this.formatBytes(
            detail.memory_stats.usage,
          );
          const memoryPercent =
            (100 / detail.memory_stats.limit) *
            (detail.memory_stats.limit - detail.memory_stats.usage);
          record.stats.memoryFreePercent = memoryPercent;
          record.memoryAlert = memoryPercent < 0.1;
          record.stats.memoryFreePercentStr = Intl.NumberFormat("default", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(memoryPercent / 100);
          record.stats.memoryUsage = detail.memory_stats.usage;
          record.stats.memoryLimitStr = this.formatBytes(
            detail.memory_stats.limit,
          );
          record.stats.memoryLimit = detail.memory_stats.limit;
          resolve(record);
        })
        .catch(() => {
          resolve(record);
        });
    });
  }

  /**
   * Gets statistics for all running containers
   */
  public getAllContainerStats(): Promise<any> {
    const data = [];
    return new Promise((resolve, reject) => {
      let promises = [];
      let definitions = [];
      let containers = [];
      const docker = this.connectorService.createDocker();

      promises.push(
        new Promise((resolve, reject) => {
          this.serviceDefinitionService
            .all(true)
            .then((definitions) => {
              resolve({ source: "definitions", result: definitions });
            })

            .catch((err) => {
              this.logger.error("Error in getcontainerstats definitions", err);
              reject(err);
            });
        }),
      );

      promises.push(
        new Promise((resolve, reject) => {
          docker.listContainers(
            { all: true, size: false },
            (err, containers) => {
              if (err) {
                this.logger.error(
                  "Error in getcontainerststs listcontainers",
                  err,
                );
                reject(err);
              } else {
                resolve({ source: "containers", result: containers });
              }
            },
          );
        }),
      );

      Promise.allSettled(promises).then((results) => {
        results.forEach((result) => {
          if (result.status == "fulfilled") {
            switch (result.value.source) {
              case "definitions":
                definitions = result.value.result;
                break;
              case "containers":
                containers = result.value.result;
                break;
            }
          }
        });

        promises = [];

        for (const container of containers) {
          const record = this.createRecordFromContainer(container);
          const idx = definitions.findIndex((s) => {
            return s.containerName == record.name;
          });
          if (idx >= 0) {
            const sd = definitions[idx];
            record.uptime = sd.uptime;
            record.monitor = sd.monitor;
            record.publicUrl = sd.public;
            record.uptimeSeconds = this.calculateUptime(sd);
            record.uptimeSecondsPercent = this.calculateUptimePercent(
              sd,
            ).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            });
            record.colorLevel = this.getColorLevel(sd);
          }

          promises.push(
            new Promise((resolve, reject) => {
              this.getContainer(container.Id)

                .then((detail) => {
                  record.project =
                    detail.Config.Labels["com.docker.compose.project"] ?? "";
                  record.hostName = detail.Config.Hostname;
                  if (record.publicUrl == "") {
                    record.publicUrl = detail.publicUrl;
                  }

                  this.calculateUsage(record, container)
                    .then((result) => {
                      resolve(result);
                    })
                    .catch((err) => {
                      resolve(record);
                    });
                })
                .catch((err) => {
                  this.calculateUsage(record, container)
                    .then((result) => {
                      resolve(result);
                    })
                    .catch((err) => {
                      resolve(record);
                    });
                });
            }),
          );
        }

        Promise.allSettled(promises).then((results) => {
          for (const result of results) {
            if (result.status == "fulfilled") {
              data.push(result.value);
            }
          }

          for (const definition of definitions) {
            const i = data.findIndex((d) => {
              return d.name == definition.containerName;
            });

            if (i < 0) {
              const record = this.createRecordFromDefinition(definition);
              record.status = "configured";
              record.configured = true;
              record.state = "configured";
              record.stateCss = this.getStateCss(record.state);
              data.push(record);
            }

            resolve(
              data.sort((a, b) => {
                return a.name.localeCompare(b.name);
              }),
            );
          }
        });
      });
    });
  }

  private createRecordFromContainer(c) {
    const r = this.createRecord(c.Id, c.Names[0].substring(1));
    r.hostName = "";
    r.image = this.formatImage(c.Image);
    r.cmd = c.Command;
    r.created = new Date(c.Created * 1000);
    r.state = c.State;
    r.stateCss = this.getStateCss(c.State);
    r.status = c.Status;
    r.ports = c.Ports;
    if (r.status.toLowerCase().includes("exited")) {
      r.shutdown = true;
    }
    if (r.status.toLowerCase().includes("unhealthy")) {
      r.healthy = false;
    }

    return r;
  }

  private createRecordFromDefinition(c) {
    const r = this.createRecord("", c.containerName);
    r.shutdown = true;
    r.healthy = false;
    r.monitor = c.monitor;
    r.uptime = c.uptime;
    r.publicUrl = c.public;
    r.uptimeSecondsPercent = "-";
    r.colorLevel = this.getColorLevel(c);
    r.project = c.project;
    r.firstSeen = c.firstSeen;
    return r;
  }

  private createRecord(id, name) {
    const record = {
      id: id,
      monitor: false,
      uptime: false,
      name: name,
      hostName: "",
      image: "",
      cmd: "",
      created: new Date(),
      firstSeen: null,
      state: "",
      stateCss: "",
      status: "",
      shutdown: false,
      healthy: true,
      cpuAlert: false,
      memoryAlert: false,
      configured: false,
      ports: [],
      publicUrl: "",
      project: "",
      uptimeSeconds: 0,
      uptimeSecondsPercent: "",
      colorLevel: "text-body",
      stats: {
        cpuPercent: 0.0,
        cpuPercentStr: "",
        memoryUsageStr: "",
        memoryUsage: 0,
        memoryFreePercentStr: "",
        memoryFreePercent: 0,
        memoryLimitStr: "",
        memoryLimit: 0,
      },
    };
    return record;
  }
}

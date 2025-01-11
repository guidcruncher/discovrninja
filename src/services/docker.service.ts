/* eslint-disable @typescript-eslint/prefer-for-of */
import { ContainerCreateOptionsHelper } from "@helpers/containercreateoptionshelper";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");
import { ServiceDefinition } from "@customtypes/servicedefinition";
import { InjectModel } from "@nestjs/mongoose";
import { ContainerStats } from "@schemas/containerstats.schema";
import { DockerRepositoryService } from "@services/docker.repository.service";
import { FancyAnsi } from "fancy-ansi";
import fs from "fs";
import { Model } from "mongoose";
import path from "path";

/**
 * Docker connection and management
 */
@Injectable()
export class DockerService {
  private readonly logger = new Logger(DockerService.name);

  constructor(
    private readonly dockerRepositoryService: DockerRepositoryService,
    private configService: ConfigService,
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

  public getContainerDashboard(id: string, limit: number): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.containerStatsModel
        .find({ name: id })
        .sort("-created")
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

  /**
   * Creates an a connnection to a server running Docker
   */
  public createDocker(): Dockerode {
    const connection: any = {};

    if (this.configService.get("docker.connection.socketPath") != "") {
      connection.socketPath = this.configService.get(
        "docker.connection.socketPath",
      );
    }

    if (this.configService.get("docker.connection.hostUri") != "") {
      const host = new URL(this.configService.get("docker.connection.hostUri"));
      connection.protocol = host.protocol;
      connection.host = host.hostname;
      connection.port = host.port == "" ? 2375 : parseInt(host.port);
    }

    if (this.configService.get("docker.connection.ca") != "") {
      if (fs.existsSync(this.configService.get("docker.connection.ca"))) {
        connection.ca = fs.readFileSync(
          this.configService.get("docker.connection.ca"),
        );
      }
    }

    if (this.configService.get("docker.connection.cert") != "") {
      if (fs.existsSync(this.configService.get("docker.connection.cert"))) {
        connection.cert = fs.readFileSync(
          this.configService.get("docker.connection.cert"),
        );
      }
    }

    if (this.configService.get("docker.connection.key") != "") {
      if (fs.existsSync(this.configService.get("docker.connection.key"))) {
        connection.key = fs.readFileSync(
          this.configService.get("docker.connection.key"),
        );
      }
    }

    return new Dockerode(connection);
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

  /**
   * Gets the details of a given  container
   */
  public getContainer(id: string): Promise<any> {
    const self = this;
    return new Promise<any>((resolve, reject) => {
      const docker = this.createDocker();
      const container = docker.getContainer(id);
      container.inspect(function (err, data: any) {
        if (err) {
          reject(err);
        } else {
          data.Name = data.Name.substring(1);
          data.Config.Image = self.formatImage(data.Config.Image);
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
          data.editor.projectPath = self.determineProjectPath(
            data.editor.workingFolder,
            data.editor.config,
          );
          data.editor.editable = data.editor.projectPath != "";
          resolve(data);
        }
      });
    });
  }

  public getContainerCreateJson(id: string): Promise<any> {
    const self = this;
    return new Promise<any>((resolve, reject) => {
      const docker = this.createDocker();
      const container = docker.getContainer(id);
      container.inspect(function (err, data: any) {
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
      const docker = this.createDocker();
      const self = this;
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
          self.logger.error("Error checking for updates", err);
          reject(err);
        } else {
          if (image.RepoDigests) {
            if (image.RepoDigests.length > 0) {
              updateStatus.imageDigest = image.RepoDigests[0].split("@")[1];
            }
          }
          updateStatus.imageCreated = self.formatDate(
            new Date(Date.parse(image.Created)),
          );

          self.dockerRepositoryService
            .queryRepositoryTags(
              self.formatImage(imgref),
              image.Os,
              image.Architecture,
            )
            .then((repo) => {
              updateStatus.repoDigest = repo.digest;
              updateStatus.latestBuildDate = self.formatDate(
                new Date(Date.parse(repo.last_updated)),
              );
              updateStatus.delta = self.daydiff(
                new Date(updateStatus.latestBuildDate),
                new Date(updateStatus.imageCreated),
              );

              updateStatus.updateDue =
                updateStatus.imageDigest != updateStatus.repoDigest;
              resolve(updateStatus);
            })
            .catch((err) => {
              self.logger.error("Error checking for update", err);
              reject(err);
            });
        }
      });
    });
  }

  public stop(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.createDocker();
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

  public logs(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const docker = this.createDocker();
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
      const docker = this.createDocker();
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
      const docker = this.createDocker();

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
      const docker = this.createDocker();
      const container = docker.getContainer(id);
      container.stats({ stream: false }, function (err, data) {
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
      const docker = this.createDocker();
      docker.listContainers((err, containers) => {
        if (err) {
          reject(err);
        } else {
          resolve(containers);
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
      const docker = this.createDocker();
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

  private async getDefinition(containerName: string): Promise<any> {
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

  private calculateUptime(sd: ServiceDefinition): number {
    const totalTime =
      (new Date().getTime() - new Date(sd.created).getTime()) / 1000;
    return totalTime - (sd.downtime ?? 0);
  }

  private calculateUptimePercent(sd: ServiceDefinition): number {
    const totalTime =
      (new Date().getTime() - new Date(sd.created).getTime()) / 1000;
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
    }
  }

  /**
   * Gets statistics for all running containers
   */
  public getAllContainerStats(): Promise<any> {
    const results = [];
    const self = this;
    return new Promise<any>((resolve, reject) => {
      const docker = this.createDocker();
serviceDefinitionService.all((services)=>{
      docker.listContainers({ all: true, size: false }, (err, containers) => {
        if (err) {
          reject(err);
        } else {
          const promises = [];

          containers.forEach((container) => {
            const record = {
              id: container.Id,
              name: container.Names[0].substring(1),
              hostName: "",
              image: container.Image,
              cmd: container.Command,
              created: new Date(container.Created * 1000),
              state: container.State,
              stateCss: this.getStateCss(container.State),
              status: container.Status,
              shutdown: false,
              healthy: true,
              cpuAlert: false,
              memoryAlert: false,
              ports: container.Ports,
              publicUrl: null,
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

            if (record.status.toLowerCase().includes("exited")) {
             record.shutdown = true;
            }

            if (record.status.toLowerCase().includes("unhealthy")) {
              record.healthy = false;
            }
            record.image = self.formatImage(record.image);
            promises.push(
              new Promise((resolve, reject) => {
                
var idx = services.findIndex((s)=>{return s.containerName==record.name;});
if (idx>=0) { serviceDef=services[idx];
                    const sd = serviceDef[0];
                    if (sd) {
                      if (sd.public != "") {
                        record.publicUrl = sd.public;
                      }
                      record.uptimeSeconds = this.calculateUptime(sd);
                      record.colorLevel = this.getColorLevel(sd);
                      record.uptimeSecondsPercent = this.calculateUptimePercent(
                        sd,
                      ).toLocaleString(undefined, {
                        style: "percent",
                        minimumFractionDigits: 2,
                      });
                    }
                    this.getContainer(container.Id).then((cntr) => {
                      this.getContainerStats(container.Id)
                        .then((detail) => {
                          record.project =
                            cntr.Config.Labels["com.docker.compose.project"] ??
                            "";
                          record.hostName = cntr.Config.Hostname;
                          if (!record.publicUrl) {
                            record.publicUrl = cntr.publicUrl;
                          }
                          record.stats.cpuPercent =
                            this.calculateCpuPercent(detail);
                          record.cpuAlert = record.stats.cpuPercent > 1;
                          record.stats.cpuPercentStr = Intl.NumberFormat(
                            "default",
                            {
                              style: "percent",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ).format(record.stats.cpuPercent);
                          record.stats.memoryUsageStr = this.formatBytes(
                            detail.memory_stats.usage,
                          );
                          const memoryPercent =
                            (100 / detail.memory_stats.limit) *
                            (detail.memory_stats.limit -
                              detail.memory_stats.usage);
                          record.stats.memoryFreePercent = memoryPercent;
                          record.memoryAlert = memoryPercent < 0.1;
                          record.stats.memoryFreePercentStr = Intl.NumberFormat(
                            "default",
                            {
                              style: "percent",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ).format(memoryPercent / 100);
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
}));

          Promise.allSettled(promises).then((promiseResults) => {
            promiseResults.forEach((promise) => {
              if (promise.status == "fulfilled") {
                results.push(promise.value);
              }
            });

            resolve(
              results.sort((a, b) => {
                return a.name.localeCompare(b.name);
              }),
            );
          });
        });
  }
});
});
}
}

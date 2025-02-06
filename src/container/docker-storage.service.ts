import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");

import { Volume } from "@data/dto/volume.dto";
import { StorageService } from "@data/storage.service";
import { StorageStatsService } from "@data/storage-stats.service";

import { DockerService } from "./docker.service";
import { DockerConnectorService } from "./docker-connector.service";

@Injectable()
export class DockerStorageService {
  private readonly logger = new Logger(DockerStorageService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly dockerService: DockerService,
    private readonly dockerConnectorService: DockerConnectorService,
    private readonly storageStatsService: StorageStatsService,
    private readonly storageService: StorageService,
  ) {}

  public deleteVolume(name) {
    return this.storageService.deleteVolume(name);
  }

  public getImageStorageStats() {
    return this.storageStatsService.getImageStorageStats();
  }

  public getVolumeStorageStats() {
    return this.storageStatsService.getVolumeStorageStats();
  }

  public updateVolume(data: Volume) {
    return this.storageService.save(data);
  }

  public listVolumes() {
    return new Promise<any[]>((resolve, reject) => {
      const docker = this.dockerConnectorService.createDocker();
      this.dockerService
        .getAllContainers()
        .then((containers) => {
          this.dockerService.dockerDF().then((df) => {
            const volumeDF = df.Volumes ?? [];
            this.storageService
              .all()
              .then((dbvols) => {
                docker.listVolumes((err, data) => {
                  if (err) {
                    this.logger.error("Error in listVolumes", err);
                    reject(err);
                  } else {
                    const volumes = data.Volumes;
                    const result = [];
                    volumes.forEach((volume: any) => {
                      let vol: any = volume;
                      vol.live = true;
                      vol.changed = false;
                      vol.CreatedAt = new Date(volume.CreatedAt);
                      vol.SizeInBytes = 0;
                      const volDf = volumeDF.find((vdf) => {
                        return vdf.Name == vol.Name;
                      });
                      if (volDf) {
                        vol.SizeInBytes = volDf.UsageData.Size;
                      }
                      const dbvol = dbvols.find((n) => {
                        return n.Name == vol.Name;
                      });
                      if (dbvol) {
                        if (dbvol.CreatedAt > vol.CreatedAt) {
                          vol = dbvol;
                          vol.changed = true;
                        }
                      }
                      vol.containers = [];
                      for (const container of containers) {
                        const mount = container.Mounts.find((m) => {
                          return m.Type == "volume" && m.Name == vol.Name;
                        });
                        if (mount) {
                          const m: any = mount;
                          m.ContainerName = container.Name;
                          vol.containers.push(m);
                        }
                      }
                      vol.containers = vol.containers.sort((a, b) => {
                        return a.ContainerName.localeCompare(b.ContainerName);
                      });

                      result.push(vol);
                    });
                    dbvols.forEach((dbv) => {
                      if (
                        !result.find((db) => {
                          return db.Name == dbv.Name;
                        })
                      ) {
                        dbv.live = false;
                        dbv.changed = true;
                        result.push(dbv);
                      }
                    });
                    resolve(
                      result.sort((a, b) => {
                        return a.Name.localeCompare(b.Name);
                      }) as any[],
                    );
                  }
                });
              })
              .catch((err) => {
                this.logger.error(
                  "Error obtaining volume list in listVolumes",
                  err,
                );
                reject(err);
              });
          });
        })
        .catch((err) => {
          this.logger.error(
            "Error obtaining container list in listVolumes",
            err,
          );
          reject(err);
        });
    });
  }

  public saveDiskUsasge() {
    return new Promise((resolve, reject) => {
      this.dockerService
        .dockerDF()
        .then((results) => {
          this.storageStatsService
            .saveImageStats(results)
            .then(() => {
              resolve(results);
            })
            .catch((err) => {
              this.logger.error("Error in storageserviceSave", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error in saveDiskUsage", err);
          reject(err);
        });
    });
  }

  public getVolumeFromDatabase(name: string) {
    return new Promise((resolve, reject) => {
      return this.storageService
        .get(name)
        .then((net) => {
          resolve(net);
        })
        .catch((err) => {
          this.logger.error("Error in getVolumeFromDatabase", err);
          reject(err);
        });
    });
  }

  public getVolume(name: string) {
    return new Promise((resolve, reject) => {
      this.listVolumes()
        .then((volumes) => {
          const vol = volumes.find((v) => {
            return v.Name == name || v.Id == name;
          });
          if (vol) {
            resolve(vol);
          } else {
            reject();
          }
        })
        .catch((err) => {
          this.logger.error("Error in getVolume", err);
          reject(err);
        });
    });
  }
}

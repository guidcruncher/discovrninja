import { NetworkService } from "@data/network.service";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { DockerConnectorService } from "./docker-connector.service";
import Dockerode = require("dockerode");
import { DockerService } from "./docker.service";

@Injectable()
export class DockerNetworkService {
  private readonly logger = new Logger(DockerNetworkService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly dockerConnectorService: DockerConnectorService,
    private readonly dockerService: DockerService,
    private readonly networkService: NetworkService,
  ) {}

  public deleteNetwork(name) {
    return new Promise((resolve, reject) => {
      this.networkService
        .deleteNetwork(name)
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error in delrte network", err);
          reject(err);
        });
    });
  }

  public listNetworks() {
    return new Promise<any[]>((resolve, reject) => {
      const docker = this.dockerConnectorService.createDocker();
      this.dockerService
        .getAllContainers()
        .then((containers) => {
          this.networkService
            .all()
            .then((dbnets) => {
              docker.listNetworks((err, networks) => {
                if (err) {
                  this.logger.error("Error in listNetworks", err);
                  reject(err);
                } else {
                  const result = [];
                  networks.forEach((network) => {
                    let net: any = network;
                    net.live = true;
                    net.changed = false;
                    net.Created = new Date(network.Created);
                    const dbnet = dbnets.find((n) => {
                      return n.Name == net.Name;
                    });
                    if (dbnet) {
                      if (dbnet.Created > net.Created) {
                        net = dbnet;
                        net.changed = true;
                      }
                    }
                    net.Containers = [];
                    net.AttachedContainers = [];
                    for (const container of containers) {
                      const contNet =
                        container.NetworkSettings.Networks[net.Name];
                      if (contNet) {
                        var attached = {
                          Name: container.Name,
                          IpAddress: contNet.IpAddress,
                        };
                        net.AttachedContainers.push(attached);
                        contNet.Name = container.Name;
                        net.Containers.push(contNet);
                      }
                    }
                    net.Containers = net.Containers.sort((a, b) => {
                      return a.Name.localeCompare(b.Name);
                    });
                    result.push(net);
                  });
                  dbnets.forEach((dbn) => {
                    if (
                      !result.find((db) => {
                        return db.Name == dbn.Name;
                      })
                    ) {
                      dbn.live = false;
                      dbn.changed = true;
                      result.push(dbn);
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
                "Error obtaining  network list in listNetworks",
                err,
              );
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error(
            "Error obtaining container list in listNetworks",
            err,
          );
          reject(err);
        });
    });
  }

  public saveNetwork(data: any) {
    if (data.Id == "") {
      data.Id = data.Name.toLowerCase();
    }
    data.Created = new Date();
    return new Promise((resolve, reject) => {
      this.networkService
        .save(data)
        .then((dbResult) => {
          resolve(dbResult);
        })
        .catch((err) => {
          this.logger.error("Error saving Network to database", err);
          reject(err);
        });
    });
  }

  public getNetworkFromDatabase(name) {
    return new Promise((resolve, reject) => {
      return this.networkService
        .get(name)
        .then((net) => {
          resolve(net);
        })
        .catch((err) => {
          this.logger.error("Error in getNetworkFromDatabase", err);
          reject(err);
        });
    });
  }

  public getNetwork(id: string) {
    return new Promise((resolve, reject) => {
      this.listNetworks()
        .then((net) => {
          const networks = net as any[];
          resolve(
            networks.find((n) => {
              return n.Id == id || n.Name == id;
            }),
          );
        })
        .catch((err) => {
          this.logger.error("Error in getNetwork", err);
          reject(err);
        });
    });
  }
}

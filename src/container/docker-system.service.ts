import { ProcessHelper, ProcessResponse } from "@helpers/processhelper";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");
import { DockerConnectorService } from "./docker-connector.service";

@Injectable()
export class DockerSystemService {
  private readonly logger = new Logger(DockerSystemService.name);

  constructor(
    private configService: ConfigService,
    private readonly connectorService: DockerConnectorService,
  ) {}

  private exec(cmd: string, args: string[]): Promise<ProcessResponse> {
    const p = new ProcessHelper();
    return p.exec(cmd, args, {});
  }

  public prune() {
    return new Promise((resolve, reject) => {
      const promises = [];

      promises.push(
        this.exec("docker", [
          "volume",
          "prune",
          "--filter",
          "label!=nopurge",
          "-f",
        ]),
      );
      promises.push(
        this.exec("docker", [
          "image",
          "prune",
          "--filter",
          "label!=nopurge",
          "-f",
        ]),
      );
      promises.push(
        this.exec("docker", [
          "network",
          "prune",
          "--filter",
          "label!=nopurge",
          "-f",
        ]),
      );
      promises.push(
        this.exec("docker", [
          "container",
          "prune",
          "--filter",
          "label!=nopurge",
          "-f",
        ]),
      );

      Promise.allSettled(promises)
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error running prune", err);
          reject(err);
        });
    });
  }
}

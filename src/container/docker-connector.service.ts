import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import Dockerode = require("dockerode");

@Injectable()
export class DockerConnectorService {
  private readonly logger: Logger = new Logger(DockerConnectorService.name);

  constructor(private configService: ConfigService) {}

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
}

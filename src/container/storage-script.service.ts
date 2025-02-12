import { StringBuilder } from "@customtypes/stringbuilder";
import { Volume } from "@data/dto/volume.dto";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as path from "path";

import { DockerConnectorService } from "./docker-connector.service";

@Injectable()
export class StorageScriptService {
  private readonly logger = new Logger(StorageScriptService.name);

  constructor(
    private configService: ConfigService,
    private readonly dockerConnectorService: DockerConnectorService,
  ) {}

  public getVolumeMountRoot() {
    return new Promise((resolve, reject) => {
      const docker = this.dockerConnectorService.createDocker();
      docker.info((err, info) => {
        if (err) {
          this.logger.error("Error in getVolumeMountRoot", err);
          reject(err);
        } else {
          resolve(path.join(info.DockerRootDir, "volumes"));
        }
      });
    });
  }

  public getDelete(vol: Volume) {
    const result = [];
    let mountPoint = vol.Mountpoint;
    if (vol.CustomMountpoint) {
      if (vol.CustomMountpoint != "") {
        mountPoint = vol.CustomMountpoint;
      }
    }

    result.push(
      "sudo tar -zcvpf ./" + vol.Name + ".tar.gz -C " + mountPoint + ".",
    );
    result.push("");
    result.push("docker volume rm " + vol.Name + " --force");
    return result;
  }

  public getCreate(vol: Volume) {
    const sb: StringBuilder = new StringBuilder();
    sb.appendFormat("docker volume create --driver {0} ", vol.Driver);

    sb.appendFormat("    --scope {0}", vol.Scope);

    for (const item in vol.Options) {
      sb.appendFormat("    --opt {0}={1}", item, vol.Options[item]);
    }

    if (vol.CustomMountpoint && vol.CustomMountpoint != "") {
      sb.appendFormat("    --opt {0}={1}", "type", "none");
      sb.appendFormat("    --opt {0}={1}", "device", vol.CustomMountpoint);
      sb.appendFormat("    --opt {0}={1}", "o", "bind");
    }

    for (const item in vol.Labels) {
      sb.appendFormat("    --label {0}={1}", item, vol.Labels[item]);
    }

    sb.append("    " + vol.Name);
    return sb.toArray();
  }
}

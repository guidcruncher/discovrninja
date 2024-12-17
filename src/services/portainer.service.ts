import { Template } from "@customtypes/portainer-template";
import { StringBuilder } from "@customtypes/stringbuilder";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PortainerService {
  private readonly logger = new Logger(PortainerService.name);

  constructor(private configService: ConfigService) {}

  private createRandomMACAddress(): string {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ":";
    }

    return macAddress;
  }

  public toDockerRun(t: Template, environment: any) {
    const sb: StringBuilder = new StringBuilder();
    let publicUrl = this.configService.get("webProxy.publicUrlFormat") ?? "";
    let serviceUrl = this.configService.get("webProxy.serviceUrlFormat") ?? "";
    sb.appendFormat("docker run --name {0}", t.name);
    sb.appendFormat("--hostname {0}", t.name);
    publicUrl = publicUrl.replace("{name}", t.name);
    serviceUrl = serviceUrl.replace("{name}", t.name);

    if (t.ports) {
      if (t.ports.length == 1) {
        const port = t.ports[0].split(":");
        serviceUrl = serviceUrl.replace("{port}", port[0]);
        publicUrl = publicUrl.replace("{port}", port[0]);
      } else {
        serviceUrl = serviceUrl.replace(":{port}", "");
        publicUrl = publicUrl.replace(":{port}", "");
      }
    } else {
      serviceUrl = serviceUrl.replace(":{port}", "");
      publicUrl = publicUrl.replace(":{port}", "");
    }

    if (t.restart_policy != "") {
      sb.appendFormat("--restart {0}", t.restart_policy);
    }

    if (t.env) {
      t.env.forEach((env) => {
        if (environment[env.name]) {
          sb.appendFormat("-e {0}='{1}'", env.name, environment[env.name]);
        } else {
          if (env.default) {
            sb.appendFormat("-e {0}='{1}'", env.name, env.default);
          }
        }
      });
    }

    if (t.ports) {
      t.ports.forEach((port) => {
        sb.appendFormat("-p {0}", port);
      });
    }

    if (t.volumes) {
      t.volumes.forEach((volume) => {
        sb.appendFormat("-v {0}:{1}", volume.bind, volume.container);
      });
    }

    sb.appendFormat(
      "--label com.guidcruncher.discovrninja.title='{0}'",
      t.title,
    );
    sb.appendFormat(
      "--label com.guidcruncher.discovrninja.description='{0}'",
      t.description,
    );
    sb.appendFormat("--label com.guidcruncher.discovrninja.name='{0}'", t.name);
    sb.appendFormat("--label com.guidcruncher.discovrninja.logo='{0}'", t.logo);
    sb.appendFormat(
      "--label com.guidcruncher.discovrninja.icon_slug='{0}'",
      t.name,
    );
    sb.appendFormat(
      "--label com.guidcruncher.discovrninja.public='{0}'",
      publicUrl,
    );
    sb.appendFormat(
      "--label com.guidcruncher.discovrninja.proxy='{0}'",
      serviceUrl,
    );

    sb.appendFormat("{0}", t.image);
    return sb.toStringDelimited(" && \/n");
  }
}

import {
  ContainerCatalog,
  PortainerTemplate,
  TemplateCreateRequest,
  TemplateCreateResponse,
} from "@customtypes/portainer-template";
import { StringBuilder } from "@customtypes/stringbuilder";
import { FluentHttpClient } from "@helpers/fluenthttpclient";
import { PortainerHelper } from "@helpers/portainerhelper";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import * as crypto from "crypto";
import { Model } from "mongoose";

@Injectable()
export class PortainerService {
  private readonly logger = new Logger(PortainerService.name);

  constructor(
    private configService: ConfigService,
    @InjectModel(ContainerCatalog.name)
    private containerCatalogModel: Model<ContainerCatalog>,
  ) {}

  public getCatalogs(): Promise<ContainerCatalog[]> {
    return new Promise<ContainerCatalog[]>((resolve, reject) => {
      let result: ContainerCatalog[] = [];
      const data = this.containerCatalogModel
        .find()
        .lean()
        .exec()
        .then((r) => {
          result = r as ContainerCatalog[];
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in getcatalogs", err);
          reject(err);
        });
    });
  }

  public readCatalog(id: string): Promise<ContainerCatalog> {
    return new Promise<ContainerCatalog>((resolve, reject) => {
      this.containerCatalogModel
        .findOne({ id: id })
        .lean()
        .exec()
        .then((result) => {
          resolve(result as ContainerCatalog);
        })
        .catch((err) => {
          this.logger.error("Error reading catalog", err);
          reject(err);
        });
    });
  }

  public writeCatalog(catalog: ContainerCatalog): Promise<ContainerCatalog> {
    return new Promise<ContainerCatalog>((resolve, reject) => {
      if ((catalog.id ?? "") == "") {
        catalog.id = crypto.randomBytes(16).toString("hex");
      }

      this.containerCatalogModel
        .findOneAndUpdate({ id: catalog.id }, catalog, { upsert: true })
        .then((result) => {
          resolve(result as ContainerCatalog);
        })
        .catch((err) => {
          this.logger.error("Error saving catalog", err);
          reject(err);
        });
    });
  }

  public downloadFeed(url: string): Promise<PortainerTemplate> {
    return new Promise<PortainerTemplate>((resolve, reject) => {
      const client = FluentHttpClient.Get(url)
        .Execute()
        .then((response) => {
          resolve(PortainerHelper.Parse(response.value));
        })
        .catch((err) => {
          this.logger.error("Error downloading template feed", err);
          reject(err);
        });
    });
  }

  public toDockerRun(cfg: TemplateCreateRequest): TemplateCreateResponse {
    try {
      const res: TemplateCreateResponse = { cmd: "", environment: "" };
      const t = cfg.template;
      const environment = cfg.environment;
      const sb: StringBuilder = new StringBuilder();
      const sbenv: StringBuilder = new StringBuilder();
      let publicUrl = this.configService.get("webProxy.publicUrlFormat") ?? "";
      let serviceUrl =
        this.configService.get("webProxy.serviceUrlFormat") ?? "";
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

      sb.append("--env-file ./stack.env");

      if (t.env) {
        t.env.forEach((env) => {
          if (environment[env.name]) {
            sbenv.appendFormat("{0}='{1}'", env.name, environment[env.name]);
          } else {
            if (env.default) {
              sbenv.appendFormat("{0}='{1}'", env.name, env.default);
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
      sb.appendFormat(
        "--label com.guidcruncher.discovrninja.name='{0}'",
        t.name,
      );
      sb.appendFormat(
        "--label com.guidcruncher.discovrninja.logo='{0}'",
        t.logo,
      );
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
      res.cmd = sb.toStringDelimited(" \\\n");
      res.environment = sbenv.toStringDelimited("\n");
      return res;
    } catch (err) {
      this.logger.error("Error creating Docker run command from template", err);
      throw err;
    }
  }
}

import { StringBuilder } from "@customtypes/stringbuilder";
import { FluentHttpClient } from "@helpers/fluenthttpclient";
import { GitHelper } from "@helpers/githelper";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { default as convertDockerRunToCompose } from "composerize";
import * as crypto from "crypto";
import * as compose from "docker-compose";
import * as fs from "fs";
import { Model } from "mongoose";
import * as path from "path";
import * as showdown from "showdown";

import { PortainerHelper } from "./portainer.helper";
import {
  ContainerCatalog,
  Template,
  TemplateCatalog,
  TemplateCreateRequest,
  TemplateCreateResponse,
} from "./portainer-template.types";

@Injectable()
export class PortainerService {
  private readonly logger = new Logger(PortainerService.name);

  constructor(
    private configService: ConfigService,
    @InjectModel(Template.name)
    private readonly templateModel: Model<Template>,
    @InjectModel(ContainerCatalog.name)
    private readonly containerCatalogModel: Model<ContainerCatalog>,
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
          resolve(catalog as ContainerCatalog);
        })
        .catch((err) => {
          this.logger.error("Error saving catalog", err);
          reject(err);
        });
    });
  }

  public fetchTemplate(id: string, name: string): Promise<Template> {
    return new Promise<Template>((resolve, reject) => {
      this.templateModel
        .findOne({ name: { $eq: name }, catalogId: { $eq: id } })
        .lean()
        .exec()
        .then((r) => {
          const converter = new showdown.Converter();
          r.noteMD = r.note;
          r.descriptionMD = r.description;
          r.description = converter.makeHtml(r.description);
          r.note = converter.makeHtml(r.note);
          resolve(r as Template);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public fetchCatalog(id: string, category: string): Promise<TemplateCatalog> {
    return new Promise<TemplateCatalog>((resolve, reject) => {
      let filter: any = { catalogId: { $eq: id } };
      if (category) {
        filter = { catalogId: { $eq: id }, categories: category };
      }

      this.templateModel
        .find(filter)
        .lean()
        .sort({ title: 1 })
        .exec()
        .then((res) => {
          const cat: TemplateCatalog = new TemplateCatalog();
          const converter = new showdown.Converter();
          res.forEach((r) => {
            r.noteMD = r.note;
            r.descriptionMD = r.description;
            r.note = converter.makeHtml(r.note);
            r.description = converter.makeHtml(r.description);
            cat.templates.push(r);
            if (r.categories) {
              r.categories.forEach((c) => {
                if (cat.categories[c]) {
                  cat.categories[c] += 1;
                } else {
                  cat.categories[c] = 1;
                }
              });
            }
          });
          resolve(cat);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public importCatalog(c: ContainerCatalog): Promise<Template[]> {
    return new Promise<Template[]>((resolve, reject) => {
      const client = FluentHttpClient.Get(c.url)
        .Execute()
        .then((response) => {
          const catalog = PortainerHelper.Parse(response.value);
          this.templateModel
            .deleteMany({ catalogId: { $eq: c.id } })
            .then(() => {
              catalog.templates.forEach((t) => {
                t.catalogId = c.id;
              });
              this.templateModel.insertMany(catalog.templates).then((r) => {
                resolve(catalog.templates);
              });
            });
        })
        .catch((err) => {
          this.logger.error("Error downloading template feed", err);
          reject(err);
        });
    });
  }

  public createStack(
    project: string,
    workingDir: string,
    workingDirMapped: string,
    cfg: TemplateCreateRequest,
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const dockerRun: TemplateCreateResponse = this.toDockerRun(cfg);
      const baseDir = path.join(workingDir, project);
      const sb: StringBuilder = new StringBuilder();
      const workingDirMappedProj = path.join(workingDirMapped, project);

      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }
      let filename = path.join(baseDir, "run.sh");
      fs.writeFileSync(filename, "#!/bin/sh\n\n" + dockerRun.cmd);
      filename = path.join(baseDir, "stack.env");
      fs.writeFileSync(filename, dockerRun.environment);
      filename = path.join(baseDir, "compose.yaml");
      let compose = convertDockerRunToCompose(dockerRun.cmd, null, "latest", 2);
      compose = compose.replace(
        "name: <your project name>",
        "name: " + project,
      );
      fs.writeFileSync(filename, compose);

      sb.append("#!/bin/sh\n");
      sb.appendFormat('docker compose -p "{0}" \\', project);
      sb.appendFormat("    --env-file {0}/stack.env \\", workingDirMappedProj);
      sb.appendFormat("    -f {0}/compose.yaml \\", workingDirMappedProj);
      sb.appendFormat("    --project-directory {0} \\", workingDirMappedProj);
      sb.append("    $@");
      filename = path.join(baseDir, "compose.sh");
      fs.writeFileSync(filename, sb.toStringDelimited("\n"));

      sb.clear();
      sb.appendFormat("# {0}", cfg.template.title);
      sb.append("");
      sb.append(cfg.template.descriptionMD);
      sb.append("");
      sb.append(cfg.template.noteMD);
      filename = path.join(baseDir, "README.md");
      fs.writeFileSync(filename, sb.toStringDelimited("\n"));

      GitHelper.createGitRepo(baseDir, { name: "system" })
        .then((result) => {
          resolve(dockerRun);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public launchStack(
    project: string,
    workingDir: string,
    workingDirMapped: string,
    cfg: TemplateCreateRequest,
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      compose
        .upAll({ cwd: workingDir, log: true, config: "compose.yaml" })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in launchStack", err);
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
            if (env.set) {
              sbenv.appendFormat("{0}='{1}'", env.name, env.set);
            } else {
              if (env.default) {
                sbenv.appendFormat("{0}='{1}'", env.name, env.default);
              }
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

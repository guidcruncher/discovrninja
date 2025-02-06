import { IconDto } from "@data/dto/icons.dto";
import { Icon } from "@data/schemas/icons.schema";
import { HttpUtilities } from "@helpers/httputilities";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IconResult } from "./icon.service";
import { IconSettingsService } from "./icon-settings.service";

@Injectable()
export class IconCDNService {
  private logger: Logger = new Logger(IconCDNService.name);

  constructor(
    @InjectModel(Icon.name) private iconModel: Model<Icon>,
    private configService: ConfigService,
    private iconSettingsService: IconSettingsService,
  ) {}

  normalizeFilename(catalog: string, slug: string) {
    const data = this.iconSettingsService.get(catalog);
    return this.iconSettingsService.format(data.filename, { slug: slug });
  }

  resolveIconSourceUrl(catalog: string, slug: string) {
    const data = this.iconSettingsService.get(catalog);
    const filename = this.iconSettingsService.format(data.filename, {
      slug: slug,
    });
    return this.iconSettingsService.format(data.iconUrl, {
      slug: slug,
      filename: filename,
    });
  }

  resolveIconUrl(catalog: string, slug: string) {
    if (this.configService.get("desktop.enableLocalIconCache") == true) {
      let dirPath = this.configService.get("desktop.localIconCacheFolder");
      if (process.env.IN_DOCKER) {
        dirPath = "/iconcache";
      }
      return "/icons/" + catalog.toLowerCase() + "/" + slug.toLowerCase();
    } else {
      return this.resolveIconSourceUrl(catalog, slug);
    }

    return "";
  }

  resolveIndexUrl(catalog: string) {
    const data = this.iconSettingsService.get(catalog);
    return data.indexUrl;
  }

  resolvePath(catalog: string) {
    const data = this.iconSettingsService.get(catalog);
    return data.indexPath;
  }

  private traverseFetch(folder: string, files: any[]): string[] {
    let result: string[] = [];
    const path = folder.split("/");

    if (folder == "") {
      files.forEach((f) => {
        if (f.type == "file") {
          let name = f.name;
          if (name.lastIndexOf(".") > 0) {
            name = name.substring(0, name.lastIndexOf("."));
          }
          result.push(name);
        }
      });
      return result;
    }

    const current = path.shift();
    files.forEach((f) => {
      if (f.type == "directory" && f.name == current) {
        result = this.traverseFetch(
          path.length == 0 ? "" : path.join("/"),
          f.files,
        );
        return result;
      }
    });

    return result;
  }

  private parseFileTree(jsonData) {
    let result: string[] = [];
    if (jsonData.png) {
      result = jsonData.png.map((n) => {
        return n.replaceAll(".png", "");
      });
    }
    console.log(result);
    return result;
  }

  getSlugs(catalog: string): Promise<any> {
    const client: HttpUtilities = new HttpUtilities();

    return new Promise<any>((resolve, reject) => {
      this.logger.log("Getting icon slugs from " + catalog);
      this.logger.log("Retrieving from " + this.resolveIndexUrl(catalog));

      client
        .retrieve("GET", this.resolveIndexUrl(catalog))
        .then((jsonData) => {
          this.logger.log("Parsing response");
          const data = JSON.parse(jsonData);
          const view = {};
          if (catalog == "dashboardicons") {
            view[catalog] = this.parseFileTree(data);
          } else {
            view[catalog] = this.traverseFetch(
              this.resolvePath(catalog),
              data.files,
            );
          }
          this.logger.log("Storing...");
          resolve(view);
        })
        .catch((err) => {
          this.logger.error("Error fetching catalog " + catalog, err);
          reject(err);
        });
    });
  }

  query(query: string, first: boolean): Promise<IconResult[]> {
    let result: IconResult[] = [];
    this.logger.debug("Begin iconCDN Query", query);

    return new Promise((resolve, reject) => {
      const model = this.iconModel
        .find({ slug: { $regex: query.toLowerCase().trim(), $options: "i" } })
        .lean()
        .exec()
        .then((data) => {
          result = data.map((d) => {
            return {
              slug: d.slug,
              catalog: d.catalog,
              url: this.resolveIconSourceUrl(d.catalog, d.slug),
              headers: null,
              data: null,
            };
          });
          this.logger.debug("End IconCDN Query " + result.length + " results.");
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in IconCDN query");
          reject(err);
        });
    });
  }

  saveAllSlugs(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const deleted = this.iconModel
        .deleteMany()
        .exec()
        .then(() => {
          const promises = [];
          Object.keys(data).forEach((catalog) => {
            data[catalog].forEach((slug) => {
              const dto: IconDto = new IconDto();
              dto.catalog = catalog.trim();
              dto.slug = slug.trim();
              dto.created = new Date();
              const created = new this.iconModel(dto);
              promises.push(created.save());
            });
          });

          Promise.allSettled(promises)
            .then(() => {
              resolve(true);
            })
            .catch((err) => {
              reject(err);
            });
        });
    });
  }

  updateIconCache() {
    return new Promise((resolve, reject) => {
      this.getAllSlugs()
        .then((icons) => {
          this.saveAllSlugs(icons)
            .then((e) => {
              resolve(icons);
            })
            .catch((err) => {
              this.logger.error("Error in updateIconCache", err);
              reject(err);
            });
        })

        .catch((err) => {
          this.logger.error("Error in updateIconCache", err);
          reject(err);
        });
    });
  }

  getAllSlugs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const result = {};
      const promises = [];
      const catalogs = this.iconSettingsService.keys();
      catalogs.forEach((catalog) => {
        promises.push(this.getSlugs(catalog));
      });

      Promise.allSettled(promises)
        .then((data) => {
          data.forEach((d) => {
            if (d.status == "fulfilled") {
              const key = Object.keys(d.value)[0];
              result[key] = d.value[key];
            }
          });
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in getAllSlugs", err);
          reject(err);
        });
    });
  }
}

import { Icon } from "@data/schemas/icons.schema";
import { IconDto } from "@dto/icons.dto";
import { HttpUtilities } from "@helpers/httputilities";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IconResult } from "./icon.service";

@Injectable()
export class IconCDNService {
  constructor(@InjectModel(Icon.name) private iconModel: Model<Icon>) {}

  private catalogs: string[] = ["simpleicons", "selfhst", "dashboard-icons"];

  resolveIconUrl(catalog: string, slug: string) {
    switch (catalog.toLowerCase()) {
      case "simpleicons":
        return "https://cdn.simpleicons.org/" + slug.toLowerCase();
      case "selfhst":
        return (
          "https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/" +
          slug.toLowerCase() +
          ".svg"
        );
      case "dashboard-icons":
        return (
          "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/" +
          slug.toLowerCase() +
          ".png"
        );
    }
    return "";
  }

  resolveIndexUrl(catalog: string) {
    switch (catalog.toLowerCase()) {
      case "simpleicons":
        return "https://data.jsdelivr.com/v1/packages/npm/simple-icons@13.17.0";
      case "selfhst":
        return "https://data.jsdelivr.com/v1/packages/gh/selfhst/icons@master";
      case "dashboard-icons":
        return "https://data.jsdelivr.com/v1/packages/gh/walkxcode/dashboard-icons@master";
    }
    return "";
  }

  resolvePath(catalog: string) {
    switch (catalog.toLowerCase()) {
      case "simpleicons":
        return "icons";
      case "selfhst":
        return "svg";
      case "dashboard-icons":
        return "png";
    }
    return "";
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

  getSlugs(catalog: string): Promise<any> {
    const client: HttpUtilities = new HttpUtilities();

    return new Promise<any>((resolve, reject) => {
      client
        .retrieve("GET", this.resolveIndexUrl(catalog))
        .then((jsonData) => {
          const data = JSON.parse(jsonData);
          const view = {};
          view[catalog] = this.traverseFetch(
            this.resolvePath(catalog),
            data.files,
          );
          resolve(view);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  query(query: string, first: boolean): Promise<IconResult[]> {
    const result: IconResult[] = [];

    return new Promise((resolve, reject) => {
      const model = this.iconModel
        .find({ slug: { $regex: query.toLowerCase() } })
        .exec()
        .then((data) => {
          data.forEach((d) => {
            const ir: IconResult = {
              slug: d.slug,
              catalog: d.catalog,
              url: this.resolveIconUrl(d.catalog, d.slug),
              headers: null,
              data: null,
            };
            result.push(ir);
          });

          if (first) {
            resolve(result);
          } else {
            resolve(result);
          }
        })
        .catch((err) => {
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
              dto.catalog = catalog;
              dto.slug = slug;
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

  getAllSlugs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const result = {};
      const promises = [];
      this.catalogs.forEach((catalog) => {
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
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

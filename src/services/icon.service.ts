import { HttpUtilities } from "@helpers/httputilities";
import { Injectable } from "@nestjs/common";

export interface IconResult {
  headers: { "Content-Type": string; "Content-Disposition": string };
  catalog: string;
  slug: string;
  url: string;
  data: ArrayBuffer;
}

@Injectable()
export class IconService {
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

  query(slug: string, first: boolean): Promise<IconResult[]> {
    const results: IconResult[] = [];

    return new Promise((resolve, reject) => {
      const promises: Promise<IconResult>[] = [];
      promises.push(this.getDashboardIcon(slug));
      promises.push(this.getSimpleIcon(slug));
      promises.push(this.getSelfhstIcon(slug));
      promises.push(this.getFontAwesomeIcon("brand", slug));

      if (first) {
        Promise.any(promises)
          .then((result) => {
            results.push(result);
            resolve(results);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        Promise.allSettled(promises)
          .then((result) => {
            result.forEach((r) => {
              if (r.status == "fulfilled") {
                results.push(r.value);
              }
            });
            resolve(results);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  getSimpleIcon(slug: string): Promise<IconResult> {
    return new Promise<IconResult>((resolve, reject) => {
      const url = "https://cdn.simpleicons.org/" + slug.toLowerCase();
      const client = new HttpUtilities();
      client
        .retrieveBinary("GET", url)
        .then((data) => {
          resolve({
            headers: {
              "Content-Type": "image/svg+xml",
              "Content-Disposition": 'inline; filename="' + slug + '.svg"',
            },
            catalog: "simpleicons",
            slug: slug,
            url: url,
            data: data,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getSelfhstIcon(slug: string): Promise<IconResult> {
    return new Promise<IconResult>((resolve, reject) => {
      const url =
        "https://cdn.jsdelivr.net/gh/selfhst/icons@master/svg/" +
        slug.toLowerCase() +
        ".svg";
      const client = new HttpUtilities();
      client
        .retrieveBinary("GET", url)
        .then((data) => {
          resolve({
            headers: {
              "Content-Type": "image/svg+xml",
              "Content-Disposition": 'inline; filename="' + slug + '.svg"',
            },
            catalog: "selfhst",
            slug: slug,
            url: url,
            data: data,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getDashboardIcon(slug: string): Promise<IconResult> {
    return new Promise<IconResult>((resolve, reject) => {
      const url =
        "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/" +
        slug.toLowerCase() +
        ".png";
      const client = new HttpUtilities();
      client
        .retrieveBinary("GET", url)
        .then((data) => {
          resolve({
            headers: {
              "Content-Type": "image/png",
              "Content-Disposition": 'inline; filename="' + slug + '.png"',
            },
            catalog: "dashboard-icons",
            slug: slug,
            url: url,
            data: data,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getFontAwesomeIcon(type: string, slug: string): Promise<IconResult> {
    return new Promise<IconResult>((resolve, reject) => {
      const url =
        "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/svgs/" +
        type +
        "/" +
        slug.toLowerCase() +
        ".svg";
      const client = new HttpUtilities();
      client
        .retrieveBinary("GET", url)
        .then((data) => {
          resolve({
            headers: {
              "Content-Type": "image/svg+xml",
              "Content-Disposition": 'inline; filename="' + slug + '.svg"',
            },
            catalog: "fontawesome",
            slug: slug,
            url: url,
            data: data,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

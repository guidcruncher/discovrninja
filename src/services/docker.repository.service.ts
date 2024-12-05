import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Dockerode = require("dockerode");

/**
 * Docker Repository connection and management
 */
@Injectable()
export class DockerRepositoryService {
  private readonly logger = new Logger(DockerRepositoryService.name);

  constructor(private configService: ConfigService) {}

  private repositories = [
    {
      name: "docker.io",
      api: "https://hub.docker.com/v2",
      loginUrl: "https://hub.docker.com/v2/users/login/",
      authorization: "JWT",
      queryEndpoint: "/repositories/[image]",
      tagsEndpoint: "/repositories/[image]/tags/[tag]",
      login: function (username, password) {
        return new Promise((resolve, reject) => {
          const url = this.loginUrl;
          const payload = {
            username: username,
            password: password,
          };

          fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              Accepts: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                if (data.token) {
                  resolve(data.token);
                  return;
                }
              }
              reject({ status: 401, text: "Invalid Credentials" });
            });
        });
      },
    },
    {
      name: "ghcr.io",
      api: "https://ghcr.io/api/v2",
      loginUrl: "https://ghcr.io/token?scope=repository",
      authorization: "Bearer",
      queryEndpoint: "/[image]/manifests/[tag]",
      tagsEndpoint: "/[image]/manifests/[tag]",
      login: function (username, password, target) {
        return new Promise((resolve, reject) => {
          const url = this.loginUrl + ":" + target + ":pull";

          fetch(url, { method: "GET" })
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                if (data.token) {
                  resolve(data.token);
                  return;
                }
              }
              reject({ status: 401, text: "Invalid Credentials" });
            });
        });
      },
    },
    {
      name: "lscr.io",
      api: "https://lscr.io/api/v2",
      loginUrl: "https://lscr.io/token?scope=repository",
      authorization: "Bearer",
      queryEndpoint: "/[image]/manifests/[tag]",
      tagsEndpoint: "/[image]/manifests/[tag]",
      login: function (username, password, target) {
        return new Promise((resolve, reject) => {
          const url = this.loginUrl + ":" + target + ":pull";

          fetch(url, { method: "GET" })
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                if (data.token) {
                  resolve(data.token);
                  return;
                }
              }
              reject({ status: 401, text: "Invalid Credentials" });
            });
        });
      },
    },
    {
      name: "quay.io",
      api: "https://quay.io/api/v1",
      loginUrl: "",
      authorization: "",
      queryEndpoint: "/repository/[image]",
      tagsEndpoint: "/repository/[image]/tags/[tag]",
      login: null,
    },
  ];

  private getImageUrl(image: string): string {
    const imageParts = image.split(":");

    if (image.split("/").length <= 2) {
      return "docker.io/" + imageParts[0];
    }

    return imageParts[0];
  }

  private getImagePath(image: string): string {
    const items = image.split("/");
    let url = "";

    if (items.length <= 2) {
      url = "library/" + items[1];
    } else {
      url = items.splice(1).join("/");
    }

    return url.split(":")[0];
  }

  private getImagePathTag(image: string): string {
    const items = image.split("/");
    let url = "";

    if (items.length <= 2) {
      url = "library/" + items[1];
    } else {
      url = items.splice(1).join("/");
    }

    const segments = url.split(":");

    if (segments.length <= 1) {
      return "latest";
    }
    return segments[1];
  }

  private getRepositorySettings(image): any {
    const imageUrl = this.getImageUrl(image);
    const imageRepository = imageUrl.split("/")[0];

    return this.repositories.find(
      (repository) => repository.name == imageRepository,
    );
  }

  private login(repository, username, password, target): Promise<any> {
    return new Promise((resolve, reject) => {
      if (repository.loginUrl == "") {
        this.logger.debug("Login not needed for " + repository.name);
        resolve("");
        return;
      }
      if (username == null || username == undefined) {
        this.logger.debug(
          "No credentials supplied for repository " + repository.name,
        );
        reject("No credentials");
        return;
      }

      repository
        .login(username, password, target)
        .then((token) => resolve(token))
        .catch((err) => {
          this.logger.error("Repository logon error", err);
          reject(err);
        });
    });
  }

  public queryRepository(image: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const imageUrl = this.getImageUrl(image);
      const repository = this.getRepositorySettings(image);

      if (repository == null) {
        reject("No repository");
        return;
      }

      const _query = (token) => {
        const url =
          repository.api +
          repository.queryEndpoint
            .replace("[image]", this.getImagePath(imageUrl))
            .replace("[tag]", this.getImagePathTag(imageUrl));
        this.logger.debug("Repository " + url);
        if (repository.authorization) {
          const args: any = {};
          args.method = "GET";
          args.headers = {
            Authorization: repository.authorization + " " + token,
          };
          this.logger.debug("Repository query " + url);
          fetch(url, args)
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                data.imageName = image;
                resolve(data);
                return;
              }

              resolve(null);
            });
        } else {
          fetch(url, { method: "GET" })
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                data.imageName = image;
                resolve(data);
                return;
              }
              resolve(null);
            });
        }
      };

      if (repository.authorization != "") {
        const userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
        let username = "";
        let password = "";
        username =
          this.configService.get(
            "docker.repositories." + userEnvPrefix + ".username",
          ) ?? "";

        password =
          this.configService.get(
            "docker.repositories." + userEnvPrefix + ".password",
          ) ?? "";

        this.logger.debug(
          "Looking for credentials for " +
            repository.name +
            " via repositories." +
            userEnvPrefix,
        );

        this.login(repository, username, password, imageUrl)
          .then((token) => {
            _query(token);
          })
          .catch((err) => {
            this.logger.error("Error on repository login", err);
            resolve(null);
          });
      } else {
        _query("");
      }
    });
  }

  public queryRepositoryTags(
    image: string,
    os: string,
    arch: string,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const imageUrl = this.getImageUrl(image);
      const repository = this.getRepositorySettings(image);

      if (repository == null) {
        reject("No repository");
        return;
      }

      const _query = (token) => {
        const url =
          repository.api +
          repository.tagsEndpoint
            .replace("[image]", this.getImagePath(imageUrl))
            .replace("[tag]", this.getImagePathTag(imageUrl));
        if (repository.authorization) {
          const args: any = {};
          args.method = "GET";
          args.headers = {
            Authorization: repository.authorization + " " + token,
          };
          fetch(url, args)
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                let result: any[] = [];
                result = data.images.filter((img) => {
                  return img.os == os && img.architecture == arch;
                });
                data.images = result;
                data.imageName = image;
                resolve(data);
                return;
              }

              resolve(null);
            });
        } else {
          fetch(url, { method: "GET" })
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                data.imageName = image;
                resolve(data);
                return;
              }
              resolve(null);
            });
        }
      };

      if (repository.authorization != "") {
        const userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
        let username = "";
        let password = "";
        username =
          this.configService.get(
            "docker.repositories." + userEnvPrefix + ".username",
          ) ?? "";

        password =
          this.configService.get(
            "docker.repositories." + userEnvPrefix + ".password",
          ) ?? "";

        this.login(repository, username, password, imageUrl)
          .then((token) => {
            _query(token);
          })
          .catch((err) => {
            this.logger.error("Error on repository login", err);
            resolve(null);
          });
      } else {
        _query("");
      }
    });
  }

  public repositorySummary(image: string): any {
    return new Promise((resolve, reject) => {
      const imageUrl = this.getImageUrl(image);
      const repository = this.getRepositorySettings(image);
      if (repository == null) {
        this.logger.error("Unsupported or unknown repository  " + image);
        reject("No repository");
        return;
      }
      const userEnvPrefix = repository.name.replace(/\./g, "_").toLowerCase();
      let username = "";
      let password = "";
      username =
        this.configService.get(
          "docker.repositories." + userEnvPrefix + ".username",
        ) ?? "";

      password =
        this.configService.get(
          "docker.repositories." + userEnvPrefix + ".password",
        ) ?? "";

      this.login(repository, username, password, imageUrl)
        .then((token) => {
          const url =
            repository.api +
            repository.queryEndpoint
              .replace("[image]", this.getImagePath(imageUrl))
              .replace("[tag]", this.getImagePathTag(imageUrl));
          const args: any = {};
          args.method = "GET";
          if (token != "") {
            args.headers = {
              Authorization: repository.authorization + " " + token,
            };
          }
          fetch(url, args)
            .then((response) => {
              if (!response.ok) {
                return reject({
                  status: response.status,
                  text: response.statusText,
                });
              }
              return response.json();
            })
            .then((data) => {
              if (data) {
                resolve({
                  type: "repositorydata",
                  name: data.name ? data.name : "",
                  description: data.description ? data.description : "",
                });
              } else {
                reject("No results");
              }
            });
        })
        .catch((err) => {
          this.logger.error("Error in repository summary", err);
          reject(err);
        });
    });
  }
}

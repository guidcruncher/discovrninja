import { FluentHttpClient } from "@helpers/fluenthttpclient";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";

import { DockerConnectorService } from "./docker-connector.service";

@Injectable()
export class ImageUpdateService {
  private logger: Logger = new Logger(ImageUpdateService.name);

  constructor(
    private configService: ConfigService,
    private readonly connectorService: DockerConnectorService,
  ) {}

  private readRepositories(): any[] {
    const filename = path.join(
      process.env.NODE_CONFIG_DIR,
      "repositories.json",
    );
    if (!fs.existsSync(filename)) {
      return [];
    }

    const json = fs.readFileSync(filename);
    return JSON.parse(json.toString("utf8")) as [];
  }

  private getFullRef(ref: string): string {
    const args = ref.split("/");
    if (args.length > 2) {
      if (ref.includes(":")) {
        return ref;
      } else {
        return ref + ":latest";
      }
    }

    if (ref.includes(":")) {
      return "docker.io/" + ref;
    }

    return "docker.io/" + ref + ":latest";
  }

  private parseRef(ref: string): any {
    const fullRef: string = this.getFullRef(ref);
    const parts = fullRef.split("/");
    const result = { ref: fullRef, host: "", repo: "", tag: "latest" };
    const tagparts = parts[2].split(":");
    result.host = parts[0];
    result.repo = parts[1] + "/" + parts[2];
    if (tagparts.length > 1) {
      result.repo = parts[1] + "/" + tagparts[0];
      result.tag = tagparts[1];
    }

    return result;
  }

  private getRepositorySettings(ref: string): any {
    const repo = this.parseRef(ref);
    const repositories: any[] = this.readRepositories();
    const match: any = repositories.find((r) => {
      return r.hostMatches.includes(repo.host);
    });

    const replaceTokens = (s) => {
      return s
        .replaceAll("{host}", repo.host)
        .replaceAll("{repo}", repo.repo)
        .replaceAll("{ref}", repo.ref)
        .replaceAll("{tag}", repo.tag);
    };

    if (!match) {
      return null;
    }

    match.token.url = replaceTokens(match.token.url);
    match.manifest.url = replaceTokens(match.manifest.url);
    match.manifest.outputFormat = replaceTokens(match.manifest.outputFormat);
    return match;
  }

  public updateCheck(ref: string) {
    const repo = this.parseRef(ref);
    const settings = this.getRepositorySettings(ref);
    const docker = this.connectorService.createDocker();

    const replaceTokens = (s) => {
      return s
        .replaceAll("{host}", repo.host)
        .replaceAll("{repo}", repo.repo)
        .replaceAll("{ref}", repo.ref)
        .replaceAll("{tag}", repo.tag);
    };

    const fetchDigests = (token) => {
      return new Promise((resolve, reject) => {
        FluentHttpClient.Get(settings.manifest.url)
          .Authorization("bearer", token)
          .Execute()
          .then((res) => {
            const digests = {
              ref: this.parseRef(ref),
              remote: "",
              local: "",
              localDigests: [],
              updateAvailable: false,
            };
            let value = "";

            if (settings.manifest.header != "") {
              value = res.headers
                .get(settings.manifest.header)
                .replaceAll('"', "");
            }

            digests.remote = replaceTokens(
              settings.manifest.outputFormat,
            ).replaceAll("{value}", value);

            const img = docker.getImage(repo.ref);
            img.inspect((err, data: any) => {
              if (err) {
                this.logger.error("Error in updateCheck inspect", err);
                resolve(digests);
              } else {
                digests.localDigests = data.RepoDigests;
                digests.local =
                  digests.localDigests.length > 0
                    ? digests.localDigests[0]
                    : "";
                digests.updateAvailable = digests.local != digests.remote;
                resolve(digests);
              }
            });
          })
          .catch((err) => {
            this.logger.error("Error in fetchDigests", err);
            reject(err);
          });
      });
    };
    return new Promise((resolve, reject) => {
      if (!settings) {
        this.logger.error(
          "Error in updateCheck: No settings available for : " + ref,
        );
        reject();
        return;
      }

      if (settings.token) {
        FluentHttpClient.Get(settings.token.url)
          .Execute()
          .then((tokenRes) => {
            let token = tokenRes.value;
            if (settings.token.field != "") {
              const json = JSON.parse(tokenRes.value);
              token = json[settings.token.field];
            }
            fetchDigests(token)
              .then((r) => {
                resolve(r);
              })
              .catch((err) => {
                this.logger.error("Error in fetchDigests", err);
                reject(err);
              });
          })
          .catch((err) => {
            this.logger.error("Error in updateCheck token", err);
            reject(err);
          });
      } else {
        fetchDigests("")
          .then((r) => {
            resolve(r);
          })
          .catch((err) => {
            this.logger.error("Error in fetchDigests", err);
            reject(err);
          });
      }
    });
  }
}

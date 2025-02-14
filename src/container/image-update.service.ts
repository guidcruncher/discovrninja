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

  private readRepositories(): [] {
    var filename = path.join(process.env.NODE_CONFIG_DIR, "repositories.json");
    if (!fs.existsSync(filename)) {
      return [];
    }

    var json = fs.readFileSync(filename);
    return JSON.parse(json) as [];
  }

  private getFullRef(ref: string): string {
    var args = ref.split("/");
    if (args.length > 2) {
      return ref;
    }
    return "docker.io/" + ref;
  }

  private parseRef(ref: string): any {
    var fullRef: string = this.getFullRef(ref);
    var parts = fullRef.split("/");
    var result = { ref: fullRef, host: "", repo: "", tag: "latest" };
    var tagparts = parts[2].split(":");
    result.host = parts[0];
    result.repo = parts[1] + "/" + parts[2];
    if (tagparts.length > 1) {
      result.repo = parts[1] + "/" + tagparts[0];
      result.tag = tagparts[1];
    }

    return result;
  }

  private getRepositorySettings(ref: string): any {
    var repo = this.parseRef(ref);
    var repositories: [] = this.readRepositories();
    var match = repositories.find((r) => {
      return r.hostMatches.includes(repo.host);
    });

    const replaceTokens = (s) => {
      return s
        .replace("{host}", repo.host)
        .replace("{repo}", repo.repo)
        .replace("{ref}", repo.ref)
        .replace("{tag}", repo.tag);
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
    var repo = this.parseRef(ref);
    var settings = getRepositorySettings(ref);
    const docker = this.connectorService.createDocker();

    const fetchDigests = (token) => {
      return new Promise((resolve, reject) => {
        FluentHttpClient.Get(settings.manifest.url)
          .Authorization("bearer", token)
          .Execute()
          .then((res) => {
            var digests = {
              ref: getFullRef(ref),
              remote: "",
              local: "",
              localDigests: [],
              updateAvailable: false,
            };
            var value = "";

            if (settings.manifest.header != "") {
              value = res.headers.get(settings.manifest.header);
            }

            digests.remote = replaceTokens(
              settimgs.manifest.outputFormat,
            ).replace("{value}", value);

            var img = docker.getImage(ref.ref);
            img.inspect((err, data: any) => {
              if (err) {
                this.logger.error("Error in updateCheck inspect", err);
                reject(err);
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
            var token = tokenRes.value;
            if (settings.token.field != "") {
              var json = JSON.parse(tokenRes.value);
              token = json[settings.token.field];
            }
            fetchDigests(token)
              .then((r) => {
                resolve(r);
              })
              .catch((err) => {
                this.logger.error("Error in fetchDigests", err);
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
          });
      }
    });
  }
}

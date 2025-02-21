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
      this.logger.error("Repositories not found at " + filename);
      return [];
    }
    this.logger.debug("Reading repositories from " + filename);
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
    this.logger.debug('parseRef => "' + ref + '" into "' + fullRef + '"');
    const result = {
      ref: fullRef,
      host: "",
      repo: "",
      package: "",
      tag: "latest",
    };
    const tagparts = parts[2].split(":");
    result.host = parts[0];
    result.repo = parts[1] + "/" + parts[2];
    result.package = parts[2];

    if (tagparts.length > 1) {
      result.package = tagparts[0];
      result.repo = parts[1] + "/" + tagparts[0];
      result.tag = tagparts[1];
    }

    this.logger.debug(
      'parseRef => Parsed ref "' + ref + '" into ' + JSON.stringify(result),
    );
    return result;
  }

  private replaceTokens(s, repo) {
    let pkg = repo.repo;
    if (repo.repo.startsWith("library/")) {
      pkg = repo.package;
    }
if (!s) {return "";}
    return s
      .replaceAll("{host}", repo.host)
      .replaceAll("{repo}", repo.repo)
      .replaceAll("{package}", pkg)
      .replaceAll("{ref}", repo.ref)
      .replaceAll("{tag}", repo.tag);
  }

  private formatDigest(tag) {
    let v = tag.replaceAll('"', "");
    if (v.includes("@")) {
      v = v.split("@")[1];
    }
    return v;
  }

  private getRepositorySettings(ref: string): any {
    const repo = this.parseRef(ref);
    const repositories: any[] = this.readRepositories();
    this.logger.debug("getRepositorySettings for " + ref + " " + repo.host);
    const match: any = repositories.find((r) => {
      return r.hostMatches.includes(repo.host.toLowerCase().trim());
    });

    if (!match) {
      return null;
    }

    match.token.url = this.replaceTokens(match.token.url, repo);
    match.manifest.url = this.replaceTokens(match.manifest.url, repo);
    match.manifest.outputFormat = this.replaceTokens(
      match.manifest.outputFormat,
      repo,
    );
    return match;e

  }

  public updateCheck(ref: string) {
    const repo = this.parseRef(ref);
    const settings = this.getRepositorySettings(ref);
    const docker = this.connectorService.createDocker();

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

            digests.remote = this.formatDigest(value);

            const img = docker.getImage(repo.ref);
            img.inspect((err, data: any) => {
              if (err) {
                this.logger.error("Error in updateCheck inspect", err);
                resolve(digests);
              } else {
                digests.localDigests = data.RepoDigests.map((d) => {
                  return this.formatDigest(d);
                });
                digests.local =
                  digests.localDigests.length > 0
                    ? this.formatDigest(digests.localDigests[0])
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

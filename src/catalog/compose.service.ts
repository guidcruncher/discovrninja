import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { default as convertDockerRunToCompose } from "composerize";
import { DCLinter } from "dclint";
import { default as convertDockerComposeToRun } from "decomposerize";
import fs from "fs";
import path from "path";
import crypto from "crypto";

@Injectable()
export class ComposeService {
  private readonly logger = new Logger(ComposeService.name);

  constructor(private configService: ConfigService) {}

  public loadProject(
    project: string,
    compose: string,
    env: string,
  ): Promise<any> {
    const projectPath = path.join(
      this.configService.get("docker.stackBasePath"),
      project,
    );
    const composePath = path.join(projectPath, compose);
    const envPath = path.join(projectPath, env);
    const result = { compose: "", env: "" };

    return new Promise((resolve, reject) => {
      if (!fs.existsSync(composePath)) {
        this.logger.error("Compose file not found", composePath);
        reject();
        return;
      }

      result.compose = fs.readFileSync(composePath).toString();
      if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath).toString();
        result.env = envFile;
      } else {
        this.logger.warn("No stack.env file found", envPath);
      }

      resolve(result);
    });
  }

  public composerize(run: string): string {
    return convertDockerRunToCompose(run, null, "latest", 2);
  }

  public deComposerize(compose: any): string {
    return convertDockerComposeToRun(compose.join("\n"), {
      command: "docker run",
      rm: true,
      detach: false,
      multiline: true,
      "long-args": false,
      "arg-value-seperator": " ",
    });
  }

  public composeLint(content: string, autofix: boolean): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      var filename = path.join(
        "/tmp/",
        "composelint_" + crypto.randomBytes(16).toString("hex") + ".yaml",
      );
      fs.writeFileSync(filename, content);
      this.composeLintFile(filename)
        .then((r) => {
          var result = { results: new LintResult(), content: "" };
          result.results = r;
          if (autofix) {
            this.composeLintFixFile(filename)
              .then(() => {
                if (fs.existsSync(filename)) {
                  result.content = fs.readFileSync(filename, "utf8");
                  fs.unlinkSync(filename);
                }
                resolve(result);
              })
              .catch((err) => {
                this.logger.error("Error in composeLint autofix", err);
                if (fs.existsSync(filename)) {
                  result.content = fs.readFileSync(filename, "utf8");
                  fs.unlinkSync(filename);
                }
                resolve(result);
              });
          } else {
            if (fs.existsSync(filename)) {
              result.content = fs.readFileSync(filename, "utf8");
              fs.unlinkSync(filename);
            }
            resolve(result);
          }
        })
        .catch((err) => {
          this.logger.error("Error in composeLint", err);
          if (fs.existsSync(filename)) {
            result.content = fs.readFileSync(filename, "utf8");
            fs.unlinkSync(filename);
          }
          reject(err);
        });
    });
  }

  public composeLintFile(filename: string): Promise<LintResults> {
    return new Promise<any>((resolve, reject) => {
      const linter = new DCLinter();

      this.logger.debug("Running compose lint on", filename);
      linter
        .lintFiles([filename], false)
        .then((lintResults) => {
          resolve(lintResults);
        })
        .catch((err) => {
          this.logger.error("Error in composeLintFile", err);
          reject(err);
        });
    });
  }

  public composeLintFixFile(filename: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const linter = new DCLinter();

      this.logger.debug("Running compose lint autofix on", filename);
      linter
        .fixFiles([filename], false, false)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          this.logger.error("Error in composeLintFixFile", err);
          reject(err);
        });
    });
  }

  public saveProject(
    project: string,
    compose: string,
    env: string,
    data: any,
  ): Promise<any> {
    const projectPath = path.join(
      this.configService.get("docker.stackBasePath"),
      project,
    );
    const composePath = path.join(projectPath, compose);
    const envPath = path.join(projectPath, env);

    return new Promise((resolve, reject) => {
      if (fs.existsSync(composePath)) {
        fs.copyFileSync(composePath, composePath + ".bak");
      }
      fs.writeFileSync(composePath, data.compose);

      if (fs.existsSync(envPath)) {
        fs.copyFileSync(envPath, envPath + ".bak");
      }
      fs.writeFileSync(envPath, data.env);
      resolve(true);
    });
  }
}

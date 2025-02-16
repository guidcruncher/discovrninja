import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { default as convertDockerRunToCompose } from "composerize";
import { default as convertDockerComposeToRun } from "decomposerize";
import fs from "fs";
import path from "path";
import { DCLinter } from "dclint";

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

  public composeLint(filename: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const linter = new DCLinter();

      this.logger.debug("Running compose lint on", filename);
      linter
        .lintFiles([filename], false)
        .then((lintResults) => {
          const formattedResults = await linter.formatResults(
            lintResults,
            "stylish",
          );
          resolve(lintResults);
        })
        .catch((err) => {
          this.logger.error("Error in composeLint", err);
          reject(err);
        });
    });
  }

  public composeLintFix(filename: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const linter = new DCLinter();

      this.logger.debug("Running compose lint autofix on", filename);
      linter
        .fixFiles([filename], false, false)
        .then((lintResults) => {
          const formattedResults = await linter.formatResults(
            lintResults,
            "stylish",
          );
          resolve();
        })
        .catch((err) => {
          this.logger.error("Error in composeLintFix", err);
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

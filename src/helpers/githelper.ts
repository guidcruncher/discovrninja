import { ProcessHelper, ProcessResponse } from "@helpers/processhelper";
import { Logger } from "@nestjs/common";
import { CryptoHelper } from "@helpers/cryptohelper";
import * as fs from "fs";

export class GitHelper {
  private readonly logger = new Logger(GitHelper.name);

  private static getGitEnv(user: any): any {
    const newHash = CryptoHelper
      .createHash("md5")
      .update(user.name.toLowerCase())
      .digest("hex");
    const email = user.email ?? newHash + "@localhost";
    return {
      GIT_AUTHOR_NAME: user.name,
      GIT_AUTHOR_EMAIL: email,
      GIT_AUTHOR_DATE: new Date(),
      GIT_COMMITTER_NAME: user.name,
      GIT_COMMITTER_EMAIL: email,
      GIT_COMMITTER_DATE: new Date(),
    };
  }

  public static isIdentical(filename: string, newValue: string): boolean {
    const newHash = CryptoHelper.createHash("md5").update(newValue).digest("hex");

    if (!fs.existsSync(filename)) {
      return false;
    }

    const currentHash = CryptoHelper
      .createHash("md5")
      .update(fs.readFileSync(filename, "utf8"))
      .digest("hex");

    if (currentHash != newHash) {
      return false;
    }

    return true;
  }

  public static commit(cwd: string, msg: string, user: any) {
    return new Promise<ProcessResponse>((resolve, reject) => {
      this.exec("git", ["config", "--global", "--add", "safe.directory", cwd], {
        cwd: cwd,
        env: this.getGitEnv(user),
      }).then((persresult) => {
        this.exec("git", ["commit", "-a", "-m", "'" + msg + "'"], {
          cwd: cwd,
          env: this.getGitEnv(user),
        })
          .then((r) => {
            resolve(r);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  public static log(cwd: string, user: any) {
    return this.exec(
      "git",
      [
        "log",
        "pretty",
        "format",
        "- hash: %H\n" +
          "  author_date: %aI\n" +
          "  committer_date: %cI\n" +
          "  author: |-2\n" +
          "    %w(0,0,4)%an <%ae>%w(0,0,0)\n" +
          "  committer: |-2\n" +
          "    %w(0,0,4)%cn <%ae>%w(0,0,0)\n" +
          "  message: |-2\n" +
          "    %w(0,0,4)%B%w(0,0,0)\n",
      ],
      { cwd: cwd, env: this.getGitEnv(user) },
    );
  }

  public static createGitRepo(
    cwd: string,
    user: any,
  ): Promise<ProcessResponse> {
    return new Promise<ProcessResponse>((resolve, reject) => {
      this.exec("git", ["init", "-b", "main"], {
        cwd: cwd,
        env: this.getGitEnv(user),
      }).then((initresult) => {
        this.exec(
          "git",
          ["config", "--global", "--add", "safe.directory", cwd],
          {
            cwd: cwd,
            env: this.getGitEnv(user),
          },
        )
          .then((persresult) => {
            this.exec(
              "git",
              [
                "add",
                "README.md",
                "compose.yaml",
                "stack.env",
                "compose.sh",
                "run.sh",
              ],
              {
                cwd: cwd,
                env: this.getGitEnv(user),
              },
            )
              .then((addresult) => {
                this.commit(cwd, "Initial commit", user)
                  .then((commitresult) => {
                    resolve(commitresult);
                  })
                  .catch((err) => {
                    reject(err);
                  });
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  private static exec(
    cmd: string,
    args: string[],
    options: any,
  ): Promise<ProcessResponse> {
    const p = new ProcessHelper();
    return p.exec(cmd, args, options);
  }
}

import { Logger } from "@nestjs/common";
import { spawn } from "child_process";

export class ProcessResponse {
  stdout: string;

  stderr: string;

  exitcode: number;

  constructor() {
    this.stdout = "";
    this.stderr = "";
    this.exitcode = -1;
  }
}

export class ProcessHelper {
  private readonly logger = new Logger(ProcessHelper.name);

  public exec(
    cmd: string,
    args: string[],
    options: any,
  ): Promise<ProcessResponse> {
    return new Promise<ProcessResponse>((resolve, reject) => {
      this.logger.debug("spawn", cmd, args, options);

      const response = new ProcessResponse();
      const proc = spawn(cmd, args, options);
      this.logger.debug(proc);

      proc.stdout.on("data", (data) => {
        response.stdout += data.toString();
        this.logger.debug("stdout", data.toString());
      });

      proc.stderr.on("data", (data) => {
        response.stderr += data.toString();
        this.logger.debug("stderr", data.toString());
      });

      proc.on("error", (err) => {
        this.logger.error("error", err, response);
        reject({ error: err, response: response });
      });

      proc.on("close", (code) => {
        response.exitcode = code;
        this.logger.debug("exitcode", code);
        resolve(response);
      });
    });
  }
}

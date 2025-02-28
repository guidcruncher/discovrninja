import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class SystemService implements OnApplicationShutdown {
  private logger: Logger = new Logger(SystemService.name);

  private app: INestApplication;

  public setApp(app: INestApplication) {
    this.app = app;
  }

  public getApp(): INestApplication {
    return this.app;
  }

  onApplicationShutdown(signal: string) {
    this.logger.error(
      "**** RECIEVED SIGNAL: " + signal + ", Shutting down. ****",
    );
    this.app.close();
  }

  public getVersion() {
    return new Promise((resolve, reject) => {
      const build: any = {
        startDate: new Date(),
        buildDate: new Date(),
        version: "development",
      };
      if (process.env.BUILDDATE) {
        build.buildDate = new Date(0);
        build.buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));
      }

      if (process.env.STARTDATE) {
        build.startDate = new Date(0);
        build.startDate.setUTCSeconds(parseInt(process.env.STARTDATE));
      }

      build.runMode = "Direct";
      build.insideDocker = false;
      if (process.env.IN_DOCKER) {
        build.runMode = "Container";
        build.insideDocker = true;
      }

      if (process.env.PACKAGE_VERSION) {
        build.version = process.env.PACKAGE_VERSION;
      }
      build.epochBuildDate = build.buildDate.getTime();
      build.epochStartDate = build.startDate.getTime();
      resolve(build);
    });
  }

  public summariseStates(c) {
    const result = [];
    result.push({ state: "created", title: "Created", total: 0 });
    result.push({ state: "configured", title: "Configured", total: 0 });
    result.push({ state: "running", title: "Running", total: 0 });
    result.push({ state: "restarting", title: "Restarting", total: 0 });
    result.push({ state: "paused", title: "Paused", total: 0 });
    result.push({ state: "exited", title: "Exited", total: 0 });
    result.push({ state: "dead", title: "Dead", total: 0 });

    result.forEach((r) => {
      const x = c.filter((ctr) => {
        return ctr.state == r.state;
      });
      r.total += x.length;
    });

    return result.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
}

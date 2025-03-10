import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class SystemService {
  private logger: Logger = new Logger(SystemService.name);

  public getVersion() {
    return new Promise((resolve, reject) => {
      const build: any = { buildDate: new Date(), version: "development" };
      if (process.env.BUILDDATE) {
        build.buildDate = new Date(0);
        build.buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));
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

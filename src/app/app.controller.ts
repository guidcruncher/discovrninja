import { User } from "@auth/decorators";
import { ComposeService } from "@catalog/compose.service";
import { PortainerService } from "@catalog/portainer.service";
import { DockerService } from "@container/docker.service";
import { Desktop } from "@desktop/decorators";
import { DiscoveryService } from "@discovery/discovery.service";
import { IconService } from "@icon/icon.service";
import { Logger } from "@nestjs/common";
import { Controller, Get, Param, Query, Req, Res } from "@nestjs/common";
import { ResourcesService } from "@resources/resources.service";
import { CryptoHelper } from "@helpers/cryptohelper";
import * as fs from "fs";
import * as path from "path";

import { SystemService } from "./system.service";
import { TasksService } from "./tasks.service";

@Controller("/")
export class AppController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly systemService: SystemService,
    private readonly dockerService: DockerService,
    private readonly discoveryService: DiscoveryService,
    private readonly iconService: IconService,
    private readonly composeService: ComposeService,
    private readonly resourcesService: ResourcesService,
    private readonly portainerService: PortainerService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get("/analogclock.html")
  getAnalogClock(@Query("id") id, @Query("tz") tz, @Res() res) {
    const filename = path.join(
      process.cwd(),
      "client",
      "public",
      "img",
      "analogclock.svg",
    );
    let svg = fs.readFileSync(filename, "utf8");
    let ident = CryptoHelper.generateId();
    let timezone = "";
    if (id && id != "") {
      ident = id;
    }
    if (tz && tz != "") {
      timezone = tz;
    }
    svg = svg.replaceAll('id="clock"', 'id="' + ident + '"');
    svg += '\n<script type="text/javascript">\n';
    svg += 'analogClock("' + ident + '", "' + timezone + '");\n';
    svg += "</script>";
    res.status(200).type("text/html").send(svg);
  }

  @Get("api/version")
  getversion(@Res() res) {
    return this.systemService.getVersion();
  }

  @Get("api/task/:name")
  public runTask(@Param("name") name) {
    return this.tasksService.runTask(name);
  }

  @Get("/admin/index")
  adminpage(@Desktop() size, @Query("tab") tab: number, @Res() res) {
    this.dockerService
      .getProjectTree()
      .then((projects) => {
        res.view(
          "admin.hbs",
          { size: size, projects: projects, tab: tab ?? 0 },
          { layout: "./layouts/layout.hbs" },
        );
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("/admin/system")
  systempage(@Desktop() size, @Res() res) {
    this.dockerService
      .getSystemInfo()
      .then((info) => {
        this.systemService.getVersion().then((ver) => {
          res.view(
            "system.hbs",
            { size: size, info: info, software: ver },
            { layout: "./layouts/layout.hbs" },
          );
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("/admin/compose")
  composepage(@Desktop() size, @Res() res) {
    res.view("compose.hbs", { size: size }, { layout: "./layouts/layout.hbs" });
  }

  @Get("/api/admin/dashboard")
  public dashboard(@Desktop() size, @User() user, @Req() req) {
    return new Promise((resolve, reject) => {
      const result: any = {};
      this.dockerService.getSystemInfo().then((sysinfo) => {
        this.dockerService.getAllContainerStats().then((containers) => {
          this.systemService.getVersion().then((version) => {
            result.version = version;
            result.size = size;
            result.user = user;
            result.sysinfo = sysinfo;
            result.states = this.systemService.summariseStates(containers);
            resolve(result);
          });
        });
      });
    });
  }
}

import { ComposeService } from "@catalog/compose.service";
import { PortainerService } from "@catalog/portainer.service";
import { DockerService } from "@container/docker.service";
import { DiscoveryService } from "@discovery/discovery.service";
import { IconService } from "@icon/icon.service";
import { Logger } from "@nestjs/common";
import { Controller, Get, Res } from "@nestjs/common";
import { ResourcesService } from "@resources/resources.service";

@Controller("/")
export class AppController {
  constructor(
    private readonly dockerService: DockerService,
    private readonly discoveryService: DiscoveryService,
    private readonly iconService: IconService,
    private readonly composeService: ComposeService,
    private readonly resourcesService: ResourcesService,
    private readonly portainerService: PortainerService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get("api/version")
  getversion(@Res() res) {
    const buildDate = new Date(0);
    buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));

    res.status(200).send({
      version: process.env.PACKAGE_VERSION,
      epochBuildate: parseInt(process.env.BUILDDATE),
      buildDate: buildDate,
    });
  }

  @Get("/admin/index")
  adminpage(@Res() res) {
    this.dockerService
      .getProjectTree()
      .then((projects) => {
        res.view(
          "admin.hbs",
          { projects: projects },
          { layout: "./layouts/layout.hbs" },
        );
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}

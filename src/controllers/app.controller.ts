import { Param, Query, Controller, Get, Res } from "@nestjs/common";
import { DockerService } from "@services/docker.service";
import { IconService } from "@services/icon.service";
import { DiscoveryService } from "@services/discovery.service";
import { ComposeService } from "@services/compose.service";
import { DesktopService } from "@services/desktop.service";
import { ResourcesService } from "@services/resources.service";

@Controller("/")
export class AppController {
  constructor(
    private readonly dockerService: DockerService,
    private readonly discoveryService: DiscoveryService,
    private readonly iconService: IconService,
    private readonly composeService: ComposeService,
    private readonly desktopService: DesktopService,
    private resourcesService: ResourcesService,
  ) {}

  @Get()
  async homepage(@Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.desktopService
        .renderDesktop()
        .then((desktop) => {
          this.discoveryService
            .getAllDefinitions(true)
            .then((definitions) => {
              const promises = [];
              definitions.forEach((d) => {
                d.available = true;
                promises.push(this.dockerService.isContainerAvailable(d));
              });
              Promise.allSettled(promises)
                .then((results) => {
                  definitions = [];
                  results.forEach((r) => {
                    if (r.status == "fulfilled") {
                      definitions.push(r.value);
                    }
                  });
                  res.view(
                    "index.hbs",
                    { desktop: desktop, services: definitions },
                    { layout: "./layouts/desktop.hbs" },
                  );
                  resolve();
                })
                .catch(() => {
                  res.view(
                    "index.hbs",
                    { desktop: desktop, services: definitions },
                    { layout: "./layouts/desktop.hbs" },
                  );
                  resolve();
                });
            })
            .catch((err) => {
              res.status(500).send(err);
              reject();
            });
        })
        .catch((err) => {
          res.status(500).send(err);
          reject();
        });
    });
  }

  @Get("/news")
  async getnews(@Query("url") url, @Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.resourcesService
        .getFeed(url)
        .then((feed) => {
          feed.feedUrl = url;
          res.view("news.hbs", feed, { layout: "" });
          resolve();
        })
        .catch((err) => {
          res.status(500).send(err);
          reject(err);
        });
    });
  }

  @Get("/desktop.js")
  async getdesktopjs(@Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.desktopService
        .renderDesktop()
        .then((desktop) => {
          const script =
            "const desktop=" +
            JSON.stringify(desktop, null, 0) +
            ";\nlocalStorage.setItem('desktop', JSON.stringify(desktop,null,0));";
          res.type("text/javascript");
          res.send(script);
          resolve();
        })
        .catch((err) => {
          res.status(500).send(err);
          reject(err);
        });
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

  @Get("/admin/edit")
  editpage(
    @Query("project") project,
    @Query("container") container,
    @Res() res,
  ) {
    this.discoveryService.getDefinition(container).then((definition) => {
      const result = definition.pop() ?? {};
      result.project = project;
      if (!result.containerName) {
        result.containerName = container.toLowerCase();
      }
      result.iconUrl = "/api/icons/question";

      if (result.iconSlug) {
        result.iconUrl = this.iconService.resolveIconUrl(
          result.iconCatalog,
          result.iconSlug,
        );
      }

      this.composeService
        .loadProject(project, "compose.yaml", "stack.env")
        .then((configuration) => {
          res.view(
            "edit.hbs",
            {
              containerName: container,
              projectName: project,
              def: result,
              project: configuration,
            },
            { layout: "./layouts/layout.hbs" },
          );
        });
    });
  }
}

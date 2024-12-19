import {
  ContainerCatalog,
  PortainerTemplate,
  TemplateCreateRequest,
  TemplateCreateResponse,
} from "@customtypes/portainer-template";
import { Logger } from "@nestjs/common";
import { Controller, Get, Query, Res } from "@nestjs/common";
import { ComposeService } from "@services/compose.service";
import { DesktopService } from "@services/desktop.service";
import { DiscoveryService } from "@services/discovery.service";
import { DockerService } from "@services/docker.service";
import { LinkdingService } from "@services/ext.linkding.service";
import { IconService } from "@services/icon.service";
import { PortainerService } from "@services/portainer.service";
import { ResourcesService } from "@services/resources.service";

@Controller("/")
export class AppController {
  constructor(
    private readonly dockerService: DockerService,
    private readonly discoveryService: DiscoveryService,
    private readonly iconService: IconService,
    private readonly composeService: ComposeService,
    private readonly desktopService: DesktopService,
    private readonly resourcesService: ResourcesService,
    private readonly linkdingService: LinkdingService,
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
                .catch((err) => {
                  this.logger.error(
                    "Error in index getting container state",
                    err,
                  );
                  res.view(
                    "index.hbs",
                    { desktop: desktop, services: definitions },
                    { layout: "./layouts/desktop.hbs" },
                  );
                  resolve();
                });
            })
            .catch((err) => {
              this.logger.error("Error in index", err);
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

  @Get("/bookmarks")
  async getbookmarks(@Query("tag") tag, @Res() res) {
    return new Promise<void>((resolve, reject) => {
      this.linkdingService
        .getBookmarks(tag)
        .then((bookmarks) => {
          this.desktopService
            .renderDesktop()
            .then((desktop) => {
              res.view(
                "bookmarks.hbs",
                { tag: tag, desktop: desktop, bookmarks: bookmarks },
                { layout: "./layouts/desktop.hbs" },
              );
              resolve();
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

  @Get("/admin/catalog")
  catalogpage(@Res() res) {
    this.portainerService
      .getCatalogs()
      .then((catalogs) => {
        if (catalogs.length == 0) {
          var c: ContainerCatalog = new ContainerCatalog();
          c.name = "Qballjos' templates";
          c.url =
            "https://raw.githubusercontent.com/Qballjos/portainer_templates/refs/heads/master/Template/template.json";
          this.portainerService
            .writeCatalog(c)
            .then((r) => {
              catalogs = [];
              catalogs.push(r);
              res.view(
                "catalog.hbs",
                { catalogs: catalogs },
                { layout: "./layouts/layout.hbs" },
              );
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        } else {
          res.view(
            "catalog.hbs",
            { catalogs: catalogs },
            { layout: "./layouts/layout.hbs" },
          );
        }
      })
      .catch((err) => {
        res.statue(500).send(err);
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
        })
        .catch((err) => {
          this.logger.error("Error invoking container edit", err);
          res.status(500).send(err);
        });
    });
  }
}

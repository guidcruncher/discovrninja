import { DockerService } from "@container/docker.service";
import { ServiceDefinitionService } from "@data/service-definition.service";
import { Desktop } from "@desktop/decorators";
import { IconService } from "@icon/icon.service";
import { Logger } from "@nestjs/common";
import { Controller, Get, Query, Res } from "@nestjs/common";

import { ComposeService } from "./compose.service";
import { PortainerService } from "./portainer.service";

@Controller("/admin")
export class CatalogController {
  constructor(
    private readonly composeService: ComposeService,
    private readonly dockerService: DockerService,
    private readonly portainerService: PortainerService,
    private readonly serviceDefinitionService: ServiceDefinitionService,
    private readonly iconService: IconService,
  ) {}

  private readonly logger = new Logger(CatalogController.name);

  @Get("createstack")
  createstackpage(
    @Desktop() size,
    @Query("catalog") catalog,
    @Query("name") name,
    @Res() res,
  ) {
    this.portainerService
      .fetchTemplate(catalog, name)
      .then((template) => {
        this.dockerService.listNetworkNames().then((networks) => {
          template.projectname = template.name.toLowerCase();
          template.hostname = template.name.toLowerCase();
          res.view(
            "createstack.hbs",
            {
              size: size,
              catalogId: catalog,
              templateName: name,
              template: template,
              networks: networks,
            },
            { layout: "./layouts/layout.hbs" },
          );
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("catalog")
  catalogpage(
    @Desktop() size,
    @Query("id") id,
    @Query("category") category,
    @Query("filter") filter,
    @Res() res,
  ) {
    let catalogId = id ?? "";
    this.logger.debug("catalogid", catalogId);
    this.portainerService
      .getCatalogs()
      .then((catalogs) => {
        if (catalogs.length > 0) {
          if (catalogId == "") {
            catalogId = catalogs[0].id;
          }
          const catalog =
            catalogs.find((f) => {
              return f.id == catalogId;
            }) ?? catalogs[0];
          this.portainerService
            .fetchCatalog(catalog.id, category, filter)
            .then((feed) => {
              res.view(
                "catalog.hbs",
                {
                  size: size,
                  catalogs: catalogs,
                  selected: catalog,
                  category: category ?? "",
                  filter: filter ?? "",
                  feed: feed,
                },
                { layout: "./layouts/layout.hbs" },
              );
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        } else {
          res.view(
            "catalog.hbs",
            {
              category: category ?? "",
              filter: filter ?? "",
              catalogs: [],
              selected: {},
              feed: [],
            },
            { layout: "./layouts/layout.hbs" },
          );
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("edit")
  editpage(
    @Desktop() size,
    @Query("project") project,
    @Query("container") container,
    @Query("tab") tab,
    @Res() res,
  ) {
    this.serviceDefinitionService.get(container).then((result) => {
      result.project = project;
      if (!result.containerName) {
        result.containerName = container.toLowerCase();
      }
      result.iconUrl = "/api/icons/question";

      const done = () => {
        this.composeService
          .loadProject(project, "compose.yaml", "stack.env")
          .then((configuration) => {
            res.view(
              "edit.hbs",
              {
                size: size,
                containerName: container,
                projectName: project,
                def: result,
                tab: tab ?? 1,
                project: configuration,
              },
              { layout: "./layouts/layout.hbs" },
            );
          })
          .catch((err) => {
            this.logger.error("Error invoking container edit", err);
            res.view(
              "edit.hbs",
              {
                projectName: project,
                containerName: container,
                size: size,
                error: true,
              },
              { layout: "./layouts/layout.hbs" },
            );
          });
      };

      if (result.iconSlug) {
        this.iconService
          .resolveIconUrl(result.iconCatalog, result.iconSlug)
          .then((iconUrl) => {
            result.iconUrl = iconUrl;
            done();
          });
      } else {
        done();
      }
    });
  }
}

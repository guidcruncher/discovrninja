import { ServiceDefinitionService } from "@data/service-definition.service";
import { Logger } from "@nestjs/common";
import { Controller, Get, Query, Res } from "@nestjs/common";
import { IconService } from "@services/icon.service";

import { ComposeService } from "./compose.service";
import { PortainerService } from "./portainer.service";

@Controller("/")
export class AppController {
  constructor(
    private readonly composeService: ComposeService,
    private readonly portainerService: PortainerService,
    private readonly serviceDefinitionService: ServiceDefinitionService,
    private readonly iconService: IconService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get("/admin/createstack")
  createstackpage(@Query("catalog") catalog, @Query("name") name, @Res() res) {
    this.portainerService
      .fetchTemplate(catalog, name)
      .then((template) => {
        template.projectname = template.name.toLowerCase();
        template.hostname = template.name.toLowerCase();
        res.view(
          "createstack.hbs",
          { catalogId: catalog, templateName: name, template: template },
          { layout: "./layouts/layout.hbs" },
        );
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("/admin/catalog")
  catalogpage(@Query("id") id, @Query("filter") filter, @Res() res) {
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
            .fetchCatalog(catalog.id, filter)
            .then((feed) => {
              res.view(
                "catalog.hbs",
                { catalogs: catalogs, selected: catalog, feed: feed },
                { layout: "./layouts/layout.hbs" },
              );
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        } else {
          res.view(
            "catalog.hbs",
            { fcatalogs: [], selected: {}, feed: [] },
            { layout: "./layouts/layout.hbs" },
          );
        }
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
    this.serviceDefinitionService.get(container).then((definition) => {
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

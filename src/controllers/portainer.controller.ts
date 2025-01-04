import {
  ContainerCatalog,
  TemplateCreateRequest,
  TemplateCreateResponse,
} from "@customtypes/portainer-template";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ComposeService } from "@services/compose.service";
import { PortainerService } from "@services/portainer.service";

@Controller("api/catalog")
export class PortainerController {
  constructor(
    private configService: ConfigService,
    private readonly composeService: ComposeService,
    private readonly portainerService: PortainerService,
  ) {}

  @Post("createstack")
  async createstack(
    @Body() data: TemplateCreateRequest,
  ): Promise<TemplateCreateResponse> {
    return new Promise<TemplateCreateResponse>((resolve, reject) => {
      const workingDirMapped = this.configService.get("docker.stackBasePath");
      const workingDir = process.env.IN_DOCKER
        ? "/docker/stacks/"
        : workingDirMapped;
      this.portainerService
        .createStack(
          data.template.projectname,
          workingDir,
          workingDirMapped,
          data,
        )
        .then((result) => {
          if (data.launchOnSave) {
            this.portainerService
              .launchStack(
                data.template.projectname,
                workingDir,
                workingDirMapped,
                data,
              )
              .then((result) => {
                resolve(result);
              })
              .catch((err) => {
                reject(err);
              });
          } else {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Post("create")
  async createCatalog(@Body() data): Promise<ContainerCatalog> {
    return new Promise<ContainerCatalog>((resolve, reject) => {
      const catalog: ContainerCatalog = new ContainerCatalog();
      catalog.name = data.name;
      catalog.url = data.url;
      this.portainerService
        .writeCatalog(catalog)
        .then((r) => {
          const id = r.id;
          this.portainerService.importCatalog(r).then((feed) => {
            resolve(r as ContainerCatalog);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Post("docker/run")
  todockerrun(@Body() cfg: TemplateCreateRequest, @Res() res) {
    const result = this.portainerService.toDockerRun(cfg);
    res.status(200).send(result);
  }

  @Post("docker/compose")
  todockercompose(@Body() cfg: TemplateCreateRequest, @Res() res) {
    const result = this.portainerService.toDockerRun(cfg);
    const composed = this.composeService.composerize(result.cmd);
    result.cmd = composed;
    res.status(200).send(result);
  }
}

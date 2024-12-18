import {
  TemplateCreateRequest,
} from "@customtypes/portainer-template";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { ComposeService } from "@services/compose.service";
import { PortainerService } from "@services/portainer.service";

@Controller("api/catalog")
export class PortainerController {
  constructor(
    private readonly composeService: ComposeService,
    private readonly portainerService: PortainerService,
  ) {}

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

import { Body, Controller, Post, Res } from "@nestjs/common";
import { ComposeService } from "@services/compose.service";
import { PortainerService } from "@services/portainer.service";
import { PortainerTemplate, Templates } from "@customtypes/portainer-template";

@Controller("api/catalog")
export class PortainerController {
  constructor(
    private readonly composeService: ComposeService,
    private readonly portainerService: PortainerService,
 ) {}

  @Post("composerize")
  composerize(@Body() cmd: any, @Res() res) {
    const result = this.composeService.composerize(cmd.cmd);
    res.status(200).type("text/plain").send(result);
  }

}

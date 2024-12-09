import { Body, Controller, Post, Res } from "@nestjs/common";
import { ComposeService } from "@services/compose.service";
import { DiscoveryService } from "@services/discovery.service";
import { IconService } from "@services/icon.service";

/**
 * The Docker service API
 */
@Controller("api/compose")
export class ComposeController {
  constructor(
    private readonly composeService: ComposeService,
    private readonly discoveryService: DiscoveryService,
    private readonly iconService: IconService,
  ) {}

  @Post("composerize")
  composerize(@Body() cmd: any, @Res() res) {
    const result = this.composeService.composerize(cmd.cmd);
    res.status(200).type("text/plain").send(result);
  }

  @Post("decomposerize")
  decomposerize(@Body() cmd: any, @Res() res) {
    const result = this.composeService.deComposerize(cmd.cmd);
    res.status(200).type("text/plain").send(result);
  }
}

import { IconService } from "@icon/icon.service";
import { Body, Controller, Post, Res } from "@nestjs/common";

import { ComposeService } from "./compose.service";

/**
 * The Docker service API
 */
@Controller("api/compose")
export class ComposeController {
  constructor(
    private readonly composeService: ComposeService,
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

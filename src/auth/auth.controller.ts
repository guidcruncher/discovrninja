import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { Public } from "./decorators";

@Controller()
export class AuthController {
  private logger: Logger = new Logger(AuthController.name);

  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Get("login")
  @Public()
  loginForm(@Query("redir") redir, @Res() res) {
    res.view(
      "login.hbs",
      { redir: redir ?? "" },
      { layout: "./layouts/login.hbs" },
    );
  }

  @Get("auth/postlogin")
  @Public()
  postLogin(@Query("t") token, @Query("r") redir, @Res() res) {
    let url = redir ?? "";
    if (url == "") {
      url = this.configService.get("authentication.baseUrl") ?? "/";
    }

    this.logger.log("postlogin", token);

    this.authService.setCookie(res, token);
    res.header("Authorization", "Bearer " + result.access_token);
    res.view("postlogin.hbs", { redir: url }, {});
  }

  @HttpCode(HttpStatus.OK)
  @Post("auth/login")
  @Public()
  signIn(@Res() res, @Body() signInDto: Record<string, any>) {
    const result = this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    this.authService.setCookie(res, result.access_token);
    res.header("Authorization", "Bearer " + result.access_token);
    return result;
  }

  @UseGuards(AuthGuard)
  @Get("auth/profile")
  getProfile(@Request() req) {
    return req.user;
  }
}

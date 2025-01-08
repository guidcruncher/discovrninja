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

    res.cookie("token", token, {
      httpOnly: true,
      signed: true,
      //      sameSite: "strict",
      //      secure: process.env.NODE_ENV === "production",
    });

    res.redirect(url, 302);
  }

  @HttpCode(HttpStatus.OK)
  @Post("auth/login")
  @Public()
  signIn(@Body() signInDto: Record<string, any>) {
    this.logger.debug("signIn", signInDto);
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("auth/profile")
  getProfile(@Request() req) {
    return req.user;
  }
}

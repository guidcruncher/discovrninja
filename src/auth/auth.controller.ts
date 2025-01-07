import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  Req,
  Request,
  Res,
  UseGuards,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AuthService } from "./auth.service";
import { Public } from "./constants";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Get("/login")
  async loginForm(@Request() req, @Res() res) {
    res.view("login.hbs", {}, { layout: "./layouts/login.hbs" });
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Get("/auth/postlogin")
  async processLogin(
    @Query("t") token,
    @Query("redir") redir,
    @Request() req,
    @Res() res,
  ) {
    res.setCookie("jwt", token, { path: "/", httpOnly: true });
    res.redirect("/", 301);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req, @Body() user: any, @Res({ passthrough: true }) res) {
    return new Promise<any>((resolve, reject) => {
      this.authService
        .login(user)
        .then((r) => {
          if (r.access_token != "") {
            const domainValue = new URL(
              this.configService.get("authentication.baseUrl"),
            ).hostname;
            resolve(r);
          } else {
            resolve({ access_token: "" });
          }
        })
        .catch((err) => {
          this.logger.error("Error logging in", err);
          resolve({ access_token: "" });
        });
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/logout")
  async logout(@Request() req) {
    return req.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Get("auth/profile")
  getProfile(@Request() req) {
    return req.user;
  }
}

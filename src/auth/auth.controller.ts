import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from "@nestjs/common";

import { AuthService } from "./auth.service";
import { Public } from "./constants";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Get("/login")
  async loginForm(@Request() req, @Res() res) {
    res.view("login.hbs", {}, { layout: "./layouts/login.hbs" });
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req, @Body() user: any) {
    return this.authService.login(user);
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

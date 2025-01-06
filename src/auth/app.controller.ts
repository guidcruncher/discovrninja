import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./jwt-auth.guard"
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { Public } from "./constants";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("api/auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post("api/auth/logout")
  async logout(@Request() req) {
    return req.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Get("api/auth/profile")
  getProfile(@Request() req) {
    return req.user;
  }
}

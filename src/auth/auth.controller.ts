import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { User } from "@users/user";
import { AuthUser } from "@users/user.decorator";

import { AuthService } from "./auth.service";
import { JWTAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { SessionAuthGuard } from "./guards/session-auth.guard";
import { TokenInterceptor } from "./interceptors/token.interceptor";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(TokenInterceptor)
  @Get("/login")
  async loginForm(@Query("redir") redir, @Request() req, @Res() res) {
    res.view(
      "login.hbs",
      { redir: redir ?? "" },
      { layout: "./layouts/login.hbs" },
    );
  }

  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  @Get("auth/postlogin")
  async processLogin(
    @Query("t") token,
    @Query("redir") redir,
    @Request() req,
    @Res() res,
  ) {
    res.cookie("token", token, {
      httpOnly: true,
      signed: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    if ((redir ?? "") == "") {
      res.redirect("/", 301);
    } else {
      res.redirect(redir, 301);
    }
  }

  @Post("auth/login")
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async login(@AuthUser() user: User): Promise<User> {
    return user;
  }

  @Get("/me")
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  me(@AuthUser() user: User): User {
    return user;
  }
}

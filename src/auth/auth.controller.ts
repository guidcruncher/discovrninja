import {
  Body,
  ClassSerializerInterceptor,
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
  UseInterceptors,
} from "@nestjs/common";
import { User } from "@users/user";
import { AuthUser } from "@users/user.decorator";

import { AuthService } from "./auth.service";
import { JWTAuthGuard } from "./guards/jwt-auth.guard";
import { SessionAuthGuard } from "./guards/session-auth.guard";
import { TokenInterceptor } from "./interceptors/token.interceptor";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Get("/login")
  async loginForm(@Query("redir") redir, @Request() req, @Res() res) {
    res.cookie("token", "", {
      httpOnly: true,
      signed: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.view(
      "login.hbs",
      { redir: redir ?? "" },
      { layout: "./layouts/login.hbs" },
    );
  }

  @UseGuards(JWTAuthGuard)
  @Get("auth/postlogin")
  @UseInterceptors(TokenInterceptor)
  async processLogin(
    @AuthUser() user,
    @Query("t") token,
    @Query("r") redir,
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
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async login(@AuthUser() u, @Body() user: any): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.authService
        .login(user.username, user.password)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Get("/me")
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  me(@AuthUser() user: User): User {
    return user;
  }
}

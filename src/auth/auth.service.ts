import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "@users/user";
import { UsersService } from "@users/users.service";

export interface JwtPayload {
  sub: string;
  username: string;
}

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public getPayload(user: User): JwtPayload {
    const payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
    };
    return payload;
  }

  public signIn(username: string, pass: string): { access_token: string } {
    this.logger.log("signIn " + username);
    const user: User = this.usersService.findOne(username);

    if (!user) {
      this.logger.error("User not found. " + username);
      throw new UnauthorizedException();
    }

    if (!this.usersService.checkPassword(user, pass)) {
      this.logger.error("Invalid credentials for user " + username);
      throw new UnauthorizedException();
    }

    const payload = this.getPayload(user);
    const token = this.jwtService.sign(payload);
    const response = {
      access_token: token,
    };
    this.logger.log("response", response);
    return response;
  }

  public clearCookie(res) {
    this.setCookie(res, "");
    res.clearCookie("token", {
      httpOnly: true,
      domain: this.configService.get("authentication.cookieDomain"),
      path: "/",
      signed: true,
      sameSite: "strict",
      secure: this.configService.get("authentication.cookieSecure"),
    });
  }

  public setCookie(res, token) {
    res.cookie("token", token, {
      httpOnly: true,
      domain: this.configService.get("authentication.cookieDomain"),
      path: "/",
      signed: true,
      sameSite: "strict",
      secure: this.configService.get("authentication.cookieSecure"),
    });
  }
}

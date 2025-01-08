import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User, UserStore } from "@users/user";
import { UsersService } from "@users/users.service";

import { JwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<User> {
    let user: UserStore;
    this.logger.debug("login", username);

    try {
      user = this.userService.findOne(username);
    } catch (err) {
      this.logger.error(`There isn't any user with username: ${username}`, err);
      throw new UnauthorizedException(
        `There isn't any user with username: ${username}`,
      );
    }

    if (!this.userService.checkPassword(user, password)) {
      this.logger.error(`Wrong password for user with username: ${username}`);
      throw new UnauthorizedException(
        `Wrong password for user with username: ${username}`,
      );
    }

    const u: User = { userId: user.userId, username: user.username };
    return u;
  }

  async verifyPayload(payload: JwtPayload): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOneById(payload.sub);
    } catch (error) {
      this.logger.error(
        `There isn't any user with userId: ${payload.sub}`,
        error,
      );
      throw new UnauthorizedException(
        `There isn't any user with userId: ${payload.sub}`,
      );
    }

    return user;
  }

  signToken(user: User): string {
    if (user) {
      const payload = {
        sub: user.userId,
        username: user.username,
      };

      this.logger.debug("signToken payload", payload);
      return this.jwtService.sign(payload);
    }

    this.logger.warn("signToken: no user");
    return "";
  }
}

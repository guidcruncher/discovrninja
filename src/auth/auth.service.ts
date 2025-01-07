import { Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(username: string, pass: string): any {
    const user = this.usersService.findOne(username);
    if (user) {
      this.logger.debug("Found user ", user.username);
      const result = this.usersService.hashPasswordWithSalt(pass, user.salt);
      if (result.hash == user.password) {
        this.logger.debug("User valid", user.username);
        const userView = { userId: user.userId, username: user.username };
        return userView;
      } else {
        this.logger.warn("Invalid credentials for ", username);
        return null;
      }
    }

    this.logger.warn("User " + username + " not found.");
    return null;
  }

  async login(user: any) {
    const result = this.validateUser(user.username, user.password);
    if (result) {
      const payload = { username: result.username, sub: result.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return { access_token: "" };
  }
}

import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@users/user";
import { Strategy } from "passport-local";

import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
  private readonly logger: Logger = new Logger(LocalStrategy.name);

  constructor(private readonly authService: AuthService) {
    super({
      usernameField: "username",
      passReqToCallback: false,
    });
  }

  validate(username: string, password: string): Promise<User> {
    this.logger.debug("LocalStrategy Validate", username);
    return this.authService.login(username, password);
  }
}

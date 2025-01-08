import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
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
  ) {}

  public getPayload(user: User): JwtPayload {
    const payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
    };
    return payload;
  }

  public async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    this.logger.debug("signIn", username);
    const user: User = await this.usersService.findOne(username);

    if (!user) {
      this.logger.error("User not found. " + username);
      throw new UnauthorizedException();
    }

    this.logger.debug("User", user);

    if (!this.usersService.checkPassword(user, pass)) {
      this.logger.error("Invalid credentials for user " + username);
      throw new UnauthorizedException();
    }

    const payload = this.getPayload(user);
    this.logger.debug("Payload", payload);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@users/user";
import { UsersService } from "@users/users.service";

import { JwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<User> {
    let user: User;

    try {
      user = this.userService.findOne(username);
    } catch (err) {
      throw new UnauthorizedException(
        `There isn't any user with username: ${username}`,
      );
    }

    if (!this.userService.checkPassword(user, password)) {
      throw new UnauthorizedException(
        `Wrong password for user with username: ${username}`,
      );
    }

    return user;
  }

  async verifyPayload(payload: JwtPayload): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOneById(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with userId: ${payload.sub}`,
      );
    }

    return user;
  }

  signToken(user: User): string {
    const payload = {
      sub: user.userId,
      username: user.username,
    };

    return this.jwtService.sign(payload);
  }
}

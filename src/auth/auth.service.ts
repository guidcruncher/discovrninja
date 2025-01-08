
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from "@users/user";

export interface JwtPayload {
  sub: string;
  username: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public getPayload(user: User): JwtPayload {
    var payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
      };
    return payload;
  }

  public async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user:User = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!this.usersService.checkPassword(user, pass)) {
      throw new UnauthorizedException();
    }

    const payload = this.getPayload(user);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}


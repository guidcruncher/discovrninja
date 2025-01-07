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

  async validateUser(username: string, pass: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = await this.usersService.findOne(username);
      if (user) {
        this.usersService
          .hashPasswordWithSalt(pass, user.salt)
          .then((result) => {
            if (result.hash == user.password) {
              const { password, ...result } = user;
              resolve(result);
            }
          })
          .catch((err) => {
            reject(err);
          });
      }
      reject();
    });
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

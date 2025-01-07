import { Injectable, Logger } from "@nestjs/common";
import * as bcrypt from "bcrypt";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  private hashPassword(userPassword: string) {
    return new Promise((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          this.logger.error("Error in hashpassword salt generation", err);
          reject(err);
          return;
        }

        bcrypt.hash(userPassword, salt, (err, hash) => {
          if (err) {
            this.logger.error("Error in hashpassword hash generation", err);
            reject(err);
            return;
          }

          resolve(hash);
        });
      });
    });
  }

  private readonly users = [
    {
      userId: 1,
      username: "john",
      password: "changeme",
    },
    {
      userId: 2,
      username: "maria",
      password: "guess",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

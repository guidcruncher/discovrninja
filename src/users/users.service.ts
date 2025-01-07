import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import * as fs from "fs";

// This should be a real class/interface representing a user entity
export interface User {
  userId: string;
  username: string;
  password: string;
  salt: string;
}

export interface HashResult {
  hash: string;
  salt: string;
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private configService: ConfigService) {}

  public hashPasswordWithSalt(userPassword: string, salt: string):Promise<HashResult> {
    return new Promise<HashResult>((resolve, reject) => {
      bcrypt.hash(userPassword, salt, (err, hash) => {
        if (err) {
          this.logger.error(
            "Error in hash{asswordWithSalt hash generation",
            err,
          );
          reject(err);
          return;
        }
var result:HashResult = {hash:hash, salt:salt};
        resolve(result);
      });
    });
  }

  private hashPassword(userPassword: string):Promise<HashResult> {
    return new Promise<HashResult>((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          this.logger.error("Error in hashPassword salt generation", err);
          reject(err);
          return;
        }

        bcrypt.hash(userPassword, salt, (err, hash) => {
          if (err) {
            this.logger.error("Error in hashPassword hash generation", err);
            reject(err);
            return;
          }

var result:HashResult = {hash:hash, salt:salt};
        resolve(result);
        });
      });
    });
  }

  private loadUserFile():User[] {
    const filename = this.configService.get("authentication.authFile");

    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, "[]", "utf8");
    }

    var result:User[] = JSON.parse(fs.readFileSync(filename, "utf8"));
return result;
  }

  private saveUserFile(users: User[]) {
    const filename = this.configService.get("authentication.authFile");
    fs.writeFileSync(filename, JSON.stringify(users), "utf8");
  }

  public findOne(username: string): User {
    const users:User[] = this.loadUserFile();
    return users.find((user) => user.username === username);
  }

  public addUser(username: string, password: string) {
    return new Promise<User>((resolve, reject) => {
      this.hashPassword(password)
        .then((result) => {
          let user: User;
          user.userId = crypto.randomBytes(16).toString("hex");
          user.username = username;
          user.password = result.hash;
          user.salt = result.salt;
          const users:User[] = this.loadUserFile();
          users.push(user);
          this.saveUserFile(users);
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public removeUser(username: string) {
    const users:User[] = this.loadUserFile();
    const index = users.map((e) => e.username).indexOf(username);
    if (index >= 0) {
      users.splice(index, 1);
      this.saveUserFile(users);
    }
  }

  public changePassword(username: string, password: string) {
    return new Promise((resolve, reject) => {
      const users: User[] = this.loadUserFile();
      const index = users.map((e) => e.username).indexOf(username);
      if (index >= 0) {
        this.hashPassword(password)
          .then((result) => {
            users[index].password = result.hash;
            users[index].salt = result.salt;
            this.saveUserFile(users);
            resolve(users[index]);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject();
      }
    });
  }
}

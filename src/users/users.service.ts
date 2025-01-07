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

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private configService: ConfigService) {}

  public hashPasswordWithSalt(userPassword: string, salt: string) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(userPassword, salt, (err, hash) => {
        if (err) {
          this.logger.error(
            "Error in hash{asswordWithSalt hash generation",
            err,
          );
          reject(err);
          return;
        }
        resolve({ hash: hash, salt: salt });
      });
    });
  }

  private hashPassword(userPassword: string) {
    return new Promise((resolve, reject) => {
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

          resolve({ hash: hash, salt: salt });
        });
      });
    });
  }

  private loadUserFile() {
    const filename = configService.get("authentication.authFile");

    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, "[]", "utf8");
    }

    return JSON.parse(fs.readFileSync(filename, "utf8"));
  }

  private saveUserFile(users: any) {
    const filename = configService.get("authentication.authFile");
    fs.writeFileSync(filename, JSON.stringify(users), "utf8");
  }

  private findOne(username: string): User {
    const users = loadUserFile();
    return users.find((user) => user.username === username);
  }

  public addUser(username: string, password: string): User {
    return new Promise((resolve, reject) => {
      this.hashPassword(password)
        .then((result) => {
          let user: User;
          user.userId = crypto.randomBytes(16).toString("hex");
          user.username = username;
          user.password = result.hash;
          user.salt = result.salt;
          const users: [] = loadUserFile();
          users.push(user);
          saveUserFile(users);
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public removeUser(username: string) {
    const users: [] = loadUserFile();
    const index = users.map((e) => e.username).indexOf(username);
    if (index >= 0) {
      users.splice(index, 1);
      saveUserFile(user);
    }
  }

  public changePassword(username: string, password: string) {
    return new Promise((resolve, reject) => {
      const users: [] = loadUserFile();
      const index = users.map((e) => e.username).indexOf(username);
      if (index >= 0) {
        this.hashPassword(password)
          .then((result) => {
            users[index].password = result.hash;
            users[index].salt = result.salt;
            saveUserFile(users);
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

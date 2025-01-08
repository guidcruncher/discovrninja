import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import * as fs from "fs";

import { User } from "./user";

export interface HashResult {
  hash: string;
  salt: string;
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private configService: ConfigService) {}

  public hashPasswordWithSalt(userPassword: string, salt: string): HashResult {
    const hash = bcrypt.hashSync(userPassword, salt);
    const result: HashResult = { hash: hash, salt: salt };
    return result;
  }

  public checkPassword(user: User, password: string): boolean {
    const newPassword = this.hashPasswordWithSalt(password, user.salt);
    return newPassword.hash == user.password;
  }

  private hashPassword(userPassword: string): HashResult {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(userPassword, salt);
    const result: HashResult = { hash: hash, salt: salt };
    return result;
  }

  private loadUserFile(): User[] {
    const filename = this.configService.get("authentication.authFile");

    if (!fs.existsSync(filename)) {
      const users = [];
      users.push(this.createInitialUser());
      fs.writeFileSync(filename, JSON.stringify(users), "utf8");
    }

    const result: User[] = JSON.parse(fs.readFileSync(filename, "utf8"));
    return result;
  }

  private saveUserFile(users: User[]) {
    const filename = this.configService.get("authentication.authFile");
    fs.writeFileSync(filename, JSON.stringify(users), "utf8");
  }

  public findOne(username: string): User {
    const users: User[] = this.loadUserFile();
    return users.find((user) => user.username === username);
  }

  public findOneById(userId: string): User {
    const users: User[] = this.loadUserFile();
    return users.find((user) => user.userId === userId);
  }

  private createInitialUser() {
    const password = "Password123";
    const result = this.hashPassword(password);
    const user: User = { userId: "", username: "", password: "", salt: "" };
    user.userId = crypto.randomBytes(16).toString("hex");
    user.username = "admin";
    user.password = result.hash;
    user.salt = result.salt;
    return user;
  }

  public addUser(username: string, password: string) {
    const result = this.hashPassword(password);
    let user: User;
    user.userId = crypto.randomBytes(16).toString("hex");
    user.username = username;
    user.password = result.hash;
    user.salt = result.salt;
    const users: User[] = this.loadUserFile();
    users.push(user);
    this.saveUserFile(users);
    return user;
  }

  public removeUser(username: string) {
    const users: User[] = this.loadUserFile();
    const index = users.map((e) => e.username).indexOf(username);
    if (index >= 0) {
      users.splice(index, 1);
      this.saveUserFile(users);
    }
  }

  public changePassword(username: string, password: string) {
    const users: User[] = this.loadUserFile();
    const index = users.map((e) => e.username).indexOf(username);
    if (index >= 0) {
      const result = this.hashPassword(password);
      users[index].password = result.hash;
      users[index].salt = result.salt;
      this.saveUserFile(users);
      return users[index];
    }
    return null;
  }
}

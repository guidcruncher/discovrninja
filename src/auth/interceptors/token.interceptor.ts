import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from "@nestjs/common";
import type { User } from "@users/user";
import type { Response } from "express";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthService } from "../auth.service";

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  private readonly logger = new Logger(TokenInterceptor.name);

  constructor(private readonly authService: AuthService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<User>,
  ): Observable<User> {
    return next.handle().pipe(
      map((user) => {
        const response = context.switchToHttp().getResponse<Response>();
        const token = this.authService.signToken(user);
        response.header("Authorization", `Bearer ${token}`);
        response.cookie("token", token, {
          httpOnly: true,
          signed: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });

        return user;
      }),
    );
  }
}

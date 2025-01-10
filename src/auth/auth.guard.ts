import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { FastifyRequest } from "fastify";

import { IS_PUBLIC_KEY } from "./decorators";

@Injectable()
export class AuthGuard implements CanActivate {
  private logger: Logger = new Logger(AuthGuard.name);

  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    let token = this.extractTokenFromHeader(request);

    if (!token) {
      token = request.cookies.token;
      if (!token) {
        this.logger.error("No token from header or cookie.");
if (request.url.toLowerCase().startsWith("/api")) { 
throw new UnauthorizedException();}
        response.redirect("/login", 302);
      }
    }

    try {
      const payload = this.jwtService.decode(token);

      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request["user"] = payload;
    } catch (err) {
      this.logger.error("Error verifying JWT token", err);
if (request.url.toLowerCase().startsWith("/api")) { 
throw new UnauthorizedException();}

response.redirect("/login",302);
    }

    return true;
  }

  private extractTokenFromHeader(request: FastifyRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}

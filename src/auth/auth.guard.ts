import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { FastifyRequest } from "fastify";

import { IS_PUBLIC_KEY } from "./decorators";

@Injectable()
export class AuthGuard implements CanActivate {
  private logger: Logger = new Logger(AuthGuard.name);

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}

  private isAuthDisabled(): boolean {
    const authmode =
      this.configService.get("authentication.authMode") ?? "internal";
    return authmode == "off";
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (this.isAuthDisabled()) {
      return true;
    }

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    let token = this.extractTokenFromHeader(request);

    if (!token) {
      token = request.cookies.token;
      if (!token) {
        this.logger.error("No token from header or cookie for " + request.url);
        throw new UnauthorizedException();
      }
    }

    try {
      const payload = this.jwtService.decode(token);

      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlerso
      request["user"] = payload;
    } catch (err) {
      this.logger.error("Error verifying JWT token for " + request.url, err);
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: FastifyRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}

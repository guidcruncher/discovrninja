import { ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

import { IS_PUBLIC_KEY } from "./constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest<TUser>(
    err: Error | null,
    user: TUser | false,
    _info: never,
    context: ExecutionContext,
  ): TUser {
    this.logger.debug("JWT HandleRequest");

    const res = context.switchToHttp().getResponse();
    const req = context.switchToHttp().getRequest();
    const jwt = req.cookies["jwt"];
    const clientUrl = this.configService.get("authentication.baseUrl");
    const jwtuser = this.jwtService.decode(jwt);

    if (err) {
      this.logger.error("Error in jwt handleRequest", err);
    }
    this.logger.debug("state", err || !jwtuser);

    if (err || !jwtuser) {
      this.logger.warn("JWT -> No user logged, redirecting to login page");
      return res.redirect(
        clientUrl + "/login?redir=" + encodeURIComponent(req.url),
      );
    }

    return jwtuser;
  }
}

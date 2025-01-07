import { ServerResponse, IncomingMessage } from 'http';
import { ExecutionContext,Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

import { IS_PUBLIC_KEY } from "./constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  constructor(private reflector: Reflector) {
    super();
  }

handleRequest<TUser = GithubReqUser["user"]>(
    err: Error | null,
    user: User | false,
    _info: never,
    context: ExecutionContext,
  ): User | void {
    const res: ServerResponse = context.switchToHttp().getResponse();

    const clientUrl = this.configService.get("allowedOrigin");

    if (err || !user) {
      return res.redirect(clientUrl + "/login");
    }

    return user;
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


}


 import { ExecutionContext, Injectable,Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

import { IS_PUBLIC_KEY } from "./constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

private readonly logger = new Logger(LocalAuthGuard.name);

constructor(
private reflector: Reflector,
private configService: ConfigService,
) {
super();
}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;

const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

 if (isPublic) {
 // return true;
 }

    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();

      await super.logIn(request);
    }

    return result;
  }
}


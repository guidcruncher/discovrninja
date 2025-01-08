import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  getAuthenticateOptions(context: ExecutionContext): any {
    return {
      successReturnToOrRedirect: "/",
      failureRedirect: "/login",
    };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;

    if (context.getType() === "http") {
      const request = context.switchToHttp().getRequest();

      await super.logIn(request);
    }

    return result;
  }
}

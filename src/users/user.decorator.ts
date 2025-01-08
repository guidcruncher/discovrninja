import { createParamDecorator, ExecutionContext, Logger } from "@nestjs/common";
import { User } from "@users/user";

export const xAuthUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const logger = new Logger(AuthUser.name);
    const user = ctx.switchToHttp().getRequest<any>().user as User;
    logger.debug("user", user);
    logger.debug("data", data);
    return data ? user && user[data] : user;
  },
);

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const logger = new Logger(AuthUser.name);
    const request = ctx.switchToHttp().getRequest();
    logger.debug("user", request.user);
    return request.user;
  },
);

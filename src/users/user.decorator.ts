import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@users/user";

export const AuthUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<any>().user as User;

    return data ? user && user[data] : user;
  },
);

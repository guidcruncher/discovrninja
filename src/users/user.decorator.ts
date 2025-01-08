import { JwtPayload } from "@auth/interfaces/jwt-payload.interface";
import { createParamDecorator, ExecutionContext, Logger } from "@nestjs/common";
import { User } from "@users/user";
import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const logger = new Logger(AuthUser.name);
    const request = ctx.switchToHttp().getRequest();
    const token = (
      request.headers["Authorization"] ??
      "Bearer " + (request.cookies["token"] ?? "")
    ).split(" ");

    if (token.length != 2) {
      return undefined;
    }
    const signedJwtAccessToken = token[1];
    try {
      const base64Payload = signedJwtAccessToken.split(".")[1];
      const payloadBuffer = Buffer.from(base64Payload, "base64");
      const updatedJwtPayload: JwtPayload = JSON.parse(
        payloadBuffer.toString(),
      ) as JwtPayload;
      const expires = updatedJwtPayload.exp;

      request.user = {
        userId: updatedJwtPayload.sub,
        username: updatedJwtPayload.username,
      } as User;

      logger.debug("user", request.user);
      return request.user;
    } catch {
      return undefined;
    }
  },
);

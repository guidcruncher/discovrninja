import { createParamDecorator, ExecutionContext, Logger } from "@nestjs/common";
import { User } from "@users/user";
import { jwtConstants } from "@auth/constants";
import { ExtractJwt, JwtFromRequestFunction, Strategy } from "passport-jwt";
import { JwtPayload } from "@auth/interfaces/jwt-payload.interface";
import { JwtService } from "@nestjs/jwt";

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const logger = new Logger(AuthUser.name);
    const request = ctx.switchToHttp().getRequest();
var token = (request.headers["Authorization"] ?? ("Bearer "+(request.cookies["token"] ?? ""))).split(" ");

if (token.length != 2) {return undefined;}
var signedJwtAccessToken=token[1];
try {
var base64Payload = signedJwtAccessToken.split('.')[1];
const payloadBuffer = Buffer.from(base64Payload, 'base64');
const updatedJwtPayload: JwtPayload = JSON.parse(payloadBuffer.toString()) as JwtPayload;
const expires = updatedJwtPayload.exp;

request.user= <User> {userId: updatedJwtPayload.sub, username: updatedJwtPayload.username};
 
    logger.debug("user", request.user);
    return request.user;
 }
catch {return undefined; }
  },
);

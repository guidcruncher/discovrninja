import { JwtPayload } from "@auth/interfaces/jwt-payload.interface";
import {
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { User } from "@users/user";
import { IS_PUBLIC_KEY } from "@users/user.decorator";

@Injectable()
export class JWTAuthGuard extends AuthGuard("jwt") {
  private logger: Logger = new Logger(JWTAuthGuard.name);

  constructor(
    private configService: ConfigService,
    private reflector: Reflector,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    const request = context.switchToHttp().getRequest();
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      this.logger.debug("Context public.");
      return true;
    }

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

      this.logger.debug("user", request.user);
      return request.user;
    } catch {
      request.user = undefined;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info, context) {
    if (err || !user) {
      if (err) {
        this.logger.error("Error in JWTAuthGuard", err);
      }
      if (!user) {
        this.logger.error("Error in JWTAuthGuard, no user");
      }
      const res: any = context.switchToHttp().getResponse();
      const clientUrl = this.configService.get("authentication.baseUrl");
      return res.redirect(clientUrl + "/login");
      //      throw err || new UnauthorizedException();
    }
    return user;
  }
}

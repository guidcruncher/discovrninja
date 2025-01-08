import { User } from "@users/user";
import { JwtPayload } from "@auth/interfaces/jwt-payload.interface";
import {
  ExecutionContext,
  Logger,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {

  private logger: Logger = new Logger(JWTAuthGuard.name);

  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
const request = context.switchToHttp().getRequest();
var token = (request.headers["Authorization"] ?? ("Bearer "+(request.cookies["token"] ?? ""))).split(" ");

if (token.length != 2) {return undefined;}
var signedJwtAccessToken=token[1];
try {
var base64Payload = signedJwtAccessToken.split('.')[1];
const payloadBuffer=Buffer.from(base64Payload, 'base64');
const updatedJwtPayload: JwtPayload = JSON.parse(payloadBuffer.toString()) as JwtPayload;
const expires = updatedJwtPayload.exp;
request.user= <User> {userId: updatedJwtPayload.sub, username: updatedJwtPayload.username};

    this.logger.debug("user", request.user);
    return request.user;
} 
catch { request.user=undefined; }

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {

    if (err || !user) {
if (err) {this.logger.error("Error in JWTAuthGuard", err);}
if (!user) {this.logger.error("Error in JWTAuthGuard, no user");}

      throw err || new UnauthorizedException();
    }
    return user;
  }
}

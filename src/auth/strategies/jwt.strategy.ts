import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@users/user";
import { ExtractJwt, JwtFromRequestFunction, Strategy } from "passport-jwt";

import { AuthService } from "../auth.service";
import { jwtConstants } from "../constants";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

const extractJwtFromCookie: JwtFromRequestFunction = (request) => {
  const logger: Logger = new Logger(JwtStrategy.name);
  logger.debug("extractJetFromCookie", request.cookies["token"]);
  return request.cookies["token"];
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  private logger: Logger = new Logger(JwtStrategy.name);

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        extractJwtFromCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: jwtConstants.secret,
      ignoreExpiration: false,
      passReqToCallback: false,
    });
  }

  private static extractJWT(req: any): string | null {
    if (req.cookies && "token" in req.cookies && req.cookies.token.length > 0) {
      return req.cookies.token;
    }
    return null;
  }

  validate(payload: JwtPayload): Promise<User> {
    return this.authService.verifyPayload(payload);
  }
}

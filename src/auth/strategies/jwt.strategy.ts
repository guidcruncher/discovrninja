import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@users/user";
import { ExtractJwt, JwtFromRequestFunction,Strategy } from "passport-jwt";

import { AuthService } from "../auth.service";
import { jwtConstants } from "../constants";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

const extractJwtFromCookie: JwtFromRequestFunction = (request) => {
  return request.signedCookies["token"]!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
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

  validate(payload: JwtPayload): Promise<User> {
    return this.authService.verifyPayload(payload);
  }
}

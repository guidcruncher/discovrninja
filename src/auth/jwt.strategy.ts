import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  private static extractJWT(req: any): string | null {
    if (
      req.cookies &&
      'jwt' in req.cookies &&
      req.cookies.jwt.length > 0
    ) {
      return req.cookies.jwt;
    }
    return null;
  }

  async validate(payload: any) {
    return { userId: payload.id };
  }
}


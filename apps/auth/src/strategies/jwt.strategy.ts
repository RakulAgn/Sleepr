import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from '../interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => request?.cookies?.Authentication || request.Authencation,
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  validate({ userId }: TokenPayload) {
    try {
      return this.userService.getUser({ _id: userId });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}

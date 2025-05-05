import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersDocument } from 'apps/auth/src/users/models/user.schema';

const getCurrentUserByContext = (ctx: ExecutionContext): UsersDocument => {
  return ctx.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx),
);

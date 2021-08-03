import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { User } from "../entity";
import { IContext } from "../types/context";
import { UserRole } from "../types/roles";

export const isAdmin: MiddlewareFn<IContext> = async ({ context }, next) => {
  const userId = context.req.session.userId;

  const user = await User.findOneOrFail(userId);

  if (user.role === UserRole.USER) {
    throw new AuthenticationError("Not Authorized");
  }

  return next();
};

import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types/context";

export const isAuthenticated: MiddlewareFn<IContext> = async (
  { context },
  next
) => {
  if (!context.req.session.userId) {
    throw new AuthenticationError("Not Authorized");
  }
  return next();
};

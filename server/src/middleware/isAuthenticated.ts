import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/types";

export const isAuthenticated: MiddlewareFn<MyContext> = async (
  { context },
  next
) => {
  if (!context.req.session.userId) {
    throw new Error("Not Authorized");
  }
  return next();
};
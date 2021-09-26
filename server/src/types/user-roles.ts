import { registerEnumType } from "type-graphql";

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  VISITOR = "VISITOR",
}

registerEnumType(UserRole, {
  name: "UserRole",
});

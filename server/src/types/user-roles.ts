import { registerEnumType } from "type-graphql";

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  ALL = "ALL",
}

registerEnumType(UserRole, {
  name: "UserRole",
});

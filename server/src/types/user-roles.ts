import { registerEnumType } from "type-graphql";

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

registerEnumType(UserRole, {
  name: "UserRole",
});

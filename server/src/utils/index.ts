import { UserRole } from "../types/roles";

export const getRole = (email: string): UserRole => {
  const admins = ["edithacarnaje@gmail.com"];
  const superAdmins = ["michaeljamescarnaje1@gmail.com"];

  const role = superAdmins.some((user) => user === email)
    ? UserRole.SUPER_ADMIN
    : admins.some((user) => user === email)
    ? UserRole.ADMIN
    : UserRole.USER;

  return role;
};

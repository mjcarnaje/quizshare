import { UserRole } from "@generated/graphql";

declare global {
  interface Window {
    cloudinary: any;
  }
}

export type INavigation = {
  name: string;
  href: string;
  icon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
  activeIcon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
  canAccess: UserRole[];
}[];

export type IUserAnswer = Record<string, string | null>;
export type Possible<T> = T | undefined;

export type IUser = { __typename?: "User" } & MeFragment;

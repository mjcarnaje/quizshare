import React, { ReactNode } from "react";

import Alert from "@components/alert/Alert";
import { INavigation } from "@customtypes/index";
import { UserRole } from "@generated/graphql";
import {
  CollectionIcon,
  HashtagIcon,
  HomeIcon,
  PlusCircleIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import {
  CollectionIcon as CollectionIconSolid,
  HashtagIcon as HashtagIconSolid,
  HomeIcon as HomeIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  UserAddIcon as UserAddIconSolid,
} from "@heroicons/react/solid";
import { useUser } from "@utils/useUser";
import { CloudinaryContext } from "cloudinary-react";
import Head from "next/head";

import SideBar from "./SideBar";

const navigation: INavigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
    canAccess: [UserRole.Admin, UserRole.SuperAdmin, UserRole.User],
  },
  {
    name: "Explore",
    href: "/explore",
    icon: HashtagIcon,
    activeIcon: HashtagIconSolid,
    canAccess: [
      UserRole.Visitor,
      UserRole.Admin,
      UserRole.SuperAdmin,
      UserRole.User,
    ],
  },
  {
    name: "Published",
    href: "/me/published",
    icon: CollectionIcon,
    activeIcon: CollectionIconSolid,
    canAccess: [UserRole.Admin, UserRole.SuperAdmin, UserRole.User],
  },
  {
    name: "Create Quiz",
    href: "/quiz/new",
    icon: PlusCircleIcon,
    activeIcon: PlusCircleIconSolid,
    canAccess: [
      UserRole.Visitor,
      UserRole.Admin,
      UserRole.SuperAdmin,
      UserRole.User,
    ],
  },
  {
    name: "Change Roles",
    href: "/change-roles",
    icon: UserAddIcon,
    activeIcon: UserAddIconSolid,
    canAccess: [UserRole.SuperAdmin],
  },
];

interface Props {
  children?: ReactNode;
  title?: string;
  hideSideBar?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  title = "QuizShare",
  hideSideBar = false,
}) => {
  const { user } = useUser({ noRedirect: true });

  const navs = navigation.filter((nav) =>
    nav.canAccess.some(
      (role) => role === user?.role || role === UserRole.Visitor
    )
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CloudinaryContext
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
      >
        <div className="relative flex min-h-screen mx-auto overflow-hidden bg-gray-50">
          <Alert />
          {!hideSideBar && <SideBar navigation={navs} />}
          {children}
        </div>
      </CloudinaryContext>
    </div>
  );
};

export default Layout;

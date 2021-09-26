import React, { useState } from "react";

import ContentHeader from "@components/ui/ContentHeader";
import SideBar from "@components/ui/SideBar";
import { INavigation } from "@customtypes/index";
import { useMeQuery, UserRole } from "@generated/graphql";
import {
  HomeIcon,
  PlusCircleIcon,
  CollectionIcon,
  HashtagIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon as HomeIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  CollectionIcon as CollectionIconSolid,
  HashtagIcon as HashtagIconSolid,
  UserAddIcon as UserAddIconSolid,
} from "@heroicons/react/solid";

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
  showSearchBar?: boolean;
  header?: JSX.Element;
}

const Container: React.FC<Props> = ({ showSearchBar, header, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data } = useMeQuery();

  const navs = navigation.filter((nav) =>
    nav.canAccess.some(
      (role) => role === data?.me?.role || role === UserRole.Visitor
    )
  );

  return (
    <>
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navs}
      />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <ContentHeader
          setSidebarOpen={setSidebarOpen}
          showSearchBar={showSearchBar}
          header={header}
        />
        {children}
      </div>
    </>
  );
};

export default Container;

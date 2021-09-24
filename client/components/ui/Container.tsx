import React, { useState } from "react";

import ContentHeader from "@components/ui/ContentHeader";
import SideBar from "@components/ui/SideBar";
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

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
    for: UserRole.User,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: HashtagIcon,
    activeIcon: HashtagIconSolid,
    for: UserRole.All,
  },
  {
    name: "Published",
    href: "/me/published",
    icon: CollectionIcon,
    activeIcon: CollectionIconSolid,
    for: UserRole.User,
  },
  {
    name: "Create Quiz",
    href: "/quiz/new",
    icon: PlusCircleIcon,
    activeIcon: PlusCircleIconSolid,
    for: UserRole.All,
  },
  {
    name: "Change Roles",
    href: "/change-roles",
    icon: UserAddIcon,
    activeIcon: UserAddIconSolid,
    for: UserRole.Admin,
  },
];

interface Props {
  showSearchBar?: boolean;
  header?: JSX.Element;
}

const Container: React.FC<Props> = ({ showSearchBar, header, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data } = useMeQuery();

  let navs: typeof navigation = navigation.filter(
    (nav) => nav.for === "ALL" || nav.for === data?.me?.role
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

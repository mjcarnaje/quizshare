import React, { useState } from "react";

import ContentHeader from "@components/ui/ContentHeader";
import SideBar from "@components/ui/SideBar";
import { useMeQuery } from "@generated/graphql";
import {
  HomeIcon,
  PlusCircleIcon,
  CollectionIcon,
  ArchiveIcon,
  HashtagIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon as HomeIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  CollectionIcon as CollectionIconSolid,
  ArchiveIcon as ArchiveIconSolid,
  HashtagIcon as HashtagIconSolid,
  UserAddIcon as UserAddIconSolid,
} from "@heroicons/react/solid";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
    for: "ALL",
  },
  {
    name: "Explore",
    href: "/explore",
    icon: HashtagIcon,
    activeIcon: HashtagIconSolid,
    for: "ALL",
  },
  {
    name: "Drafts",
    href: "/me/drafts",
    icon: ArchiveIcon,
    activeIcon: ArchiveIconSolid,
    for: "ALL",
  },
  {
    name: "Published",
    href: "/me/published",
    icon: CollectionIcon,
    activeIcon: CollectionIconSolid,
    for: "ALL",
  },
  {
    name: "Create Quiz",
    href: "/create/quiz",
    icon: PlusCircleIcon,
    activeIcon: PlusCircleIconSolid,
    for: "ALL",
  },
  {
    name: "Change Roles",
    href: "/change-roles",
    icon: UserAddIcon,
    activeIcon: UserAddIconSolid,
    for: "SUPER_ADMIN",
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

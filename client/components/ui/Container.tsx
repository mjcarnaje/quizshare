import React, { useState } from "react";

import ContentHeader from "@components/ui/ContentHeader";
import HiddenSidebar from "@components/ui/HiddenSidebar";
import StaticSidebar from "@components/ui/StaticSidebar";
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/outline";
import {
  HomeIcon as HomeIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
} from "@heroicons/react/solid";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
  },
  {
    name: "Create Quiz",
    href: "/create",
    icon: PlusCircleIcon,
    activeIcon: PlusCircleIconSolid,
  },
];

interface Props {
  showSearchBar?: boolean;
  header?: JSX.Element;
}

const Container: React.FC<Props> = ({ children, showSearchBar, header }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HiddenSidebar {...{ sidebarOpen, setSidebarOpen, navigation }} />
      <StaticSidebar {...{ navigation }} />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <ContentHeader {...{ setSidebarOpen, showSearchBar, header }} />
        {children}
      </div>
    </>
  );
};

export default Container;

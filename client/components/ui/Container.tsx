import React, { useState } from "react";

import ContentContainer from "@components/ui/ContentContainer";
import ContentHeader from "@components/ui/ContentHeader";
import HiddenSidebar from "@components/ui/HiddenSidebar";
import MenuButton from "@components/ui/MenuButton";
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

const Container: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HiddenSidebar {...{ sidebarOpen, setSidebarOpen, navigation }} />
      <StaticSidebar {...{ navigation }} />
      <ContentContainer>
        <ContentHeader
          buttonToOpenSidebar={<MenuButton {...{ setSidebarOpen }} />}
        />
        {children}
      </ContentContainer>
    </>
  );
};

export default Container;

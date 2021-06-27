import React from "react";

import SearchBarInput from "@components/SearchBarInput";
import MenuButton from "@components/ui/MenuButton";

import ProfileDropdown from "../ProfileDropdown";

interface Props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showSearchBar?: boolean;
  headerJSX?: JSX.Element;
}

const ContentHeader: React.FC<Props> = ({
  setSidebarOpen,
  showSearchBar = true,
  headerJSX = <div className="flex-1" />,
}) => {
  return (
    <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
      <MenuButton setSidebarOpen={setSidebarOpen} />
      <div className="flex justify-between flex-1 px-4">
        {showSearchBar ? <SearchBarInput /> : headerJSX}
        <div className="flex items-center ml-4 md:ml-6">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

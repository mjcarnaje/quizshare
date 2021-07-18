import React from "react";

import MenuButton from "@components/buttons/MenuButton";
import SearchBarInput from "@components/SearchBarInput";

import ProfileDropdown from "../dropdowns/ProfileDropdown";

interface Props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showSearchBar?: boolean;
  header?: JSX.Element;
}

const ContentHeader: React.FC<Props> = ({
  setSidebarOpen,
  showSearchBar = true,
  header = <div className="flex-1" />,
}) => {
  return (
    <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
      <MenuButton setSidebarOpen={setSidebarOpen} />
      <div className="flex items-center justify-between flex-1 px-4">
        {showSearchBar ? (
          <div className="w-80">
            <SearchBarInput />
          </div>
        ) : (
          header
        )}
        <div className="flex items-center ml-4 md:ml-6">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

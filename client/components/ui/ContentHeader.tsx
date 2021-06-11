import React from "react";

import SearchBarInput from "@components/SearchBarInput";

import ProfileDropdown from "../ProfileDropdown";

interface props {
  buttonToOpenSidebar: JSX.Element;
}

const ContentHeader: React.FC<props> = ({ buttonToOpenSidebar }) => {
  return (
    <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
      {buttonToOpenSidebar}
      <div className="flex justify-between flex-1 px-4">
        <SearchBarInput />
        <div className="flex items-center ml-4 md:ml-6">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

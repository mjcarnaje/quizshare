import React from "react";

import MenuButton from "@components/buttons/MenuButton";
import ProfileDropdown from "@components/dropdowns/ProfileDropdown";
import SearchBarInput from "@components/SearchBarInput";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setIsSideBarOpen } from "@store/ui";

interface Props {
  showSearchBar?: boolean;
}

const ContentHeader: React.FC<Props> = ({ showSearchBar = true }) => {
  const { isSideBarOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
      <MenuButton
        setIsSideBarOpen={() => dispatch(setIsSideBarOpen(!isSideBarOpen))}
      />
      <div className="flex items-center justify-between flex-1 px-4">
        {showSearchBar ? (
          <div className="w-80">
            <SearchBarInput />
          </div>
        ) : (
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <HomeIcon
                        className="flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                {[{ name: "Create Quiz", href: "#", current: false }].map(
                  (page) => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <a
                          href={page.href}
                          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                          aria-current={page.current ? "page" : undefined}
                        >
                          {page.name}
                        </a>
                      </div>
                    </li>
                  )
                )}
              </ol>
            </nav>
          </div>
        )}
        <div className="flex items-center ml-4 md:ml-6">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

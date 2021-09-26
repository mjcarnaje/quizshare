import React from "react";

import { MenuAlt2Icon } from "@heroicons/react/solid";

interface Props {
  setIsSideBarOpen: () => void;
}

const MenuButton: React.FC<Props> = ({ setIsSideBarOpen }) => {
  return (
    <button
      className="px-4 text-gray-500 transform border-r border-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={setIsSideBarOpen}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default MenuButton;

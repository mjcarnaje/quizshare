import React, { SetStateAction } from "react";

import { MenuAlt2Icon } from "@heroicons/react/solid";

interface props {
  setSidebarOpen: (value: SetStateAction<boolean>) => void;
}

const MenuButton: React.FC<props> = ({ setSidebarOpen }) => {
  return (
    <button
      className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default MenuButton;

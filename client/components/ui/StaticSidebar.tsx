import React from "react";

import { useRouter } from "next/dist/client/router";
import { INavigation } from "types/global-types";

import { classNames } from "../../utils/index";

interface Props {
  navigation: INavigation;
}

const StaticSidebar: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-lg font-bold font-berkshire">QuizShare</h1>
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <nav className="flex-1 px-2 space-y-1 bg-white">
              {navigation.map((item) => {
                const active = router.pathname === item.href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    )}
                  >
                    {active ? (
                      <item.activeIcon
                        className="flex-shrink-0 w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticSidebar;

import React from "react";

import { classNames } from "@utils/index";
import Link from "next/link";

interface Props {
  currentTab: string;
  tabs: { name: string; href: string; index: boolean }[];
}

const QuizTabs: React.FC<Props> = ({ currentTab, tabs }) => {
  return (
    <div className="mt-6">
      <nav
        className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
        aria-label="Tabs"
      >
        {tabs.map((tab, tabIdx) => {
          const isActive =
            currentTab === tab.name.toLowerCase() || (!currentTab && tab.index);

          return (
            <Link key={tab.name} href={tab.href}>
              <a
                className={classNames(
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    isActive ? "bg-indigo-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default QuizTabs;

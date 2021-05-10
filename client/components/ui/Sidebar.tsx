import React from "react";

import { classNames } from "@utils/index";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Create Quiz",
    href: "/create",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="sticky hidden w-64 p-4 shadow-md sm:block ">
      <div className="flex flex-col space-y-4">
        {navigation.map((item) => (
          <NextLink key={item.name} href={item.href}>
            <a
              className={classNames(
                router.pathname === item.href
                  ? "text-black font-medium"
                  : "text-gray-500  hover:text-gray-800",
                "rounded-md"
              )}
            >
              {item.name}
            </a>
          </NextLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

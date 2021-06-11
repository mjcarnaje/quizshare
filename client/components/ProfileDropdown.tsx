import React, { Fragment } from "react";

import { useApolloClient } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@utils/index";
import { useRouter } from "next/dist/client/router";

import { useSignOutMutation, useMeQuery } from "../generated/graphql";

const userNavigation = [{ name: "Sign out", href: "/login" }];

const ProfileDropdown: React.FC = () => {
  const router = useRouter();
  const apolloClient = useApolloClient();

  const { data } = useMeQuery({ skip: typeof window === undefined });
  const [signOut] = useSignOutMutation();

  if (!data?.me) {
    return null;
  }

  const { username, avatar } = data.me;

  return (
    <Menu as="div" className="relative ml-3">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={avatar ?? ""}
                alt={username ? `${username}-s-avatar` : "your-avatar"}
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      onClick={async () => {
                        if (item.name === "Sign out") {
                          await signOut();
                          router.push("/login");
                          apolloClient.clearStore();
                        }
                      }}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "w-full block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ProfileDropdown;

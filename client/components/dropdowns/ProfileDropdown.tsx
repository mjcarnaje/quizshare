import React, { Fragment } from "react";

import { useApolloClient } from "@apollo/client";
import Avatar from "@components/ui/Avatar";
import { useMeQuery, useSignOutMutation } from "@generated/graphql";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@utils/index";
import { useRouter } from "next/dist/client/router";

const ProfileDropdown: React.FC = () => {
  const router = useRouter();
  const apolloClient = useApolloClient();

  const { data } = useMeQuery({ skip: typeof window === undefined });
  const [signOut] = useSignOutMutation();

  if (!data?.me) {
    return null;
  }

  const { firstName, avatar } = data.me;

  const logout = async () => {
    await signOut();
    await apolloClient.clearStore();
    router.push("/login");
  };

  const userNavigation = [
    {
      name: "Sign out",
      href: "/login",
      onClick: logout,
    },
  ];

  return (
    <Menu as="div" className="relative ml-3">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <Avatar avatarUrl={avatar} size="sm" alt={firstName[0]} />
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
              {userNavigation.map(({ name, onClick }) => (
                <Menu.Item key={name}>
                  {({ active }) => (
                    <button
                      onClick={onClick}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "w-full block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {name}
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

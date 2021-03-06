import React, { Fragment } from "react";

import { INavigation } from "@customtypes/index";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useAppSelector, useAppDispatch } from "@store/index";
import { setIsSideBarOpen } from "@store/ui";
import { classNames } from "@utils/index";
import { useUser } from "@utils/useUser";
import { useRouter } from "next/dist/client/router";

import { Logo } from "../Logo";

interface Props {
  navigation: INavigation;
}

const SideBar: React.FC<Props> = ({ navigation }) => {
  const { user } = useUser({ noRedirect: true });

  const dispatch = useAppDispatch();
  const { isSideBarOpen } = useAppSelector((state) => state.ui);
  const router = useRouter();

  return (
    <>
      <nav
        aria-label="Sidebar"
        className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
      >
        <Logo version="initial" />
        <div className="relative w-20 flex flex-col p-3 space-y-3">
          {navigation.map((item, itemIdx) => {
            const active = router.pathname === item.href;

            return (
              <button
                key={itemIdx}
                onClick={() => {
                  if (!user && item.name === "Create Quiz") {
                    router.push("/login");
                  } else {
                    router.push(item.href);
                  }
                }}
                className={classNames(
                  active
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:bg-gray-700",
                  "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
                )}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </nav>
      <Transition.Root show={isSideBarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={isSideBarOpen}
          onClose={() => dispatch(setIsSideBarOpen(false))}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => dispatch(setIsSideBarOpen(false))}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center flex-shrink-0 px-4">
                <h1>QuizShare</h1>
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2 space-y-1">
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
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SideBar;

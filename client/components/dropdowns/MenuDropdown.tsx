import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

import { classNames } from "../../utils/index";

type IOption = {
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  text: string;
  onClick: () => void;
};

type ArrayProps = {
  type: "array";
  anchor: JSX.Element;
  options: IOption[];
};

type ArrayOfArrayProps = {
  type: "arrayOfArray";
  anchor: JSX.Element;
  options: IOption[][];
};

type Props = ArrayProps | ArrayOfArrayProps;

const MenuDropdown: React.FC<Props> = (props) => {
  const { anchor } = props;

  const renderItem = (props: IOption) => {
    const { icon: Icon, text, onClick } = props;

    return (
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onClick}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "flex px-4 py-2 text-sm focus:outline-none w-full"
            )}
          >
            {Icon && (
              <Icon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
            )}
            <span>{text}</span>
          </button>
        )}
      </Menu.Item>
    );
  };

  return (
    <Menu as="div" className="relative z-30 inline-block text-left">
      {({ open }) => (
        <>
          <>{anchor}</>
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
              className={classNames(
                props.type === "arrayOfArray" ? "divide-y divide-gray-100" : "",
                "absolute right-0 w-56 mt-2 origin-top-right bg-white  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              )}
            >
              {props.type === "array"
                ? props.options.map(renderItem)
                : props.type === "arrayOfArray"
                ? props.options.map((optionArray) => (
                    <div className="py-1">{optionArray.map(renderItem)}</div>
                  ))
                : null}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;

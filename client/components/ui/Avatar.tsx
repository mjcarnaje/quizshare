import React from "react";

import { classNames } from "@utils/index";

interface Props {
  name: string;
  img?: string;
  date?: string;
}

const Avatar: React.FC<Props> = ({ name, img, date }) => {
  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <img
          className="w-10 h-10 rounded-full"
          src={
            img ??
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
      </div>
      <div
        className={classNames(
          date ? "" : "flex items-center",
          "flex-1 min-w-0"
        )}
      >
        <p className="text-sm font-medium text-gray-900">
          <a href="#" className="hover:underline">
            {name}
          </a>
        </p>
        {date && (
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              {date}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Avatar;

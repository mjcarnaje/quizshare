import React from "react";

interface props {
  name: string;
  img: string;
}

const Avatar: React.FC<props> = ({ name, img }) => {
  return (
    <a href="#" className="flex-shrink-0 block group">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block rounded-full h-9 w-9"
            src={img || ""}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          {/* <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            View profile
          </p> */}
        </div>
      </div>
    </a>
  );
};

export default Avatar;

import React from "react";

interface Props {
  name: string;
  img?: string;
}

const Avatar: React.FC<Props> = ({ name, img }) => {
  return (
    <a href="#" className="flex-shrink-0 block group">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block rounded-full h-9 w-9"
            src={
              img ??
              "https://images.pexels.com/photos/3722806/pexels-photo-3722806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Avatar;

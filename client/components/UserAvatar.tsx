import React from "react";

import { UserResponseFragment } from "../generated/graphql";

export const avatarSizeMap = {
  default: "80px",
  lg: "60px",
  md: "50px",
  sm: "40px",
  xs: "20px",
  xxs: "30px",
};

interface props {
  size: keyof typeof avatarSizeMap;
  data: UserResponseFragment;
}

const UserAvatar: React.FC<props> = ({ size, data }) => {
  const { username, avatar } = data;
  return (
    <div
      className="relative inline-block"
      style={{
        width: avatarSizeMap[size],
        height: avatarSizeMap[size],
      }}
    >
      <img
        alt={username ? `${username}-s-avatar` : "your-avatar"}
        className={`rounded-full w-full h-full object-cover`}
        src={
          !avatar
            ? `https://ui-avatars.com/api/${
                username ? `&name=${username}` : "&name"
              }&rounded=true&background=B23439&bold=true&color=FFFFFF`
            : avatar
        }
      />
    </div>
  );
};

export default UserAvatar;

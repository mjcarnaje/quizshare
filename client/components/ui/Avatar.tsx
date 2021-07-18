import React from "react";

import { classNames } from "@utils/index";

import { AVATAR_FALLBACK_IMG } from "../../constant/index";

interface Props {
  avatarUrl?: string | null;
  alt?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
}

const Avatar: React.FC<Props> = ({ avatarUrl, alt, size }) => {
  let avatarSize;

  switch (size) {
    case "xs":
      avatarSize = "h-6 w-6";
      break;
    case "sm":
      avatarSize = "h-8 w-8";
      break;
    case "base":
      avatarSize = "h-10 w-10";
      break;
    case "md":
      avatarSize = "h-12 w-12";
      break;
    case "lg":
      avatarSize = "h-14 w-14";
      break;
    case "xl":
      avatarSize = "h-16 w-16";
      break;
    default:
      break;
  }

  return (
    <img
      className={classNames(
        avatarSize ? avatarSize : "h-10 w-10",
        "rounded-full"
      )}
      src={avatarUrl || AVATAR_FALLBACK_IMG}
      alt={alt}
    />
  );
};

export default Avatar;

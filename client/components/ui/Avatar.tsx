import React from "react";

import { classNames } from "@utils/index";
import Skeleton from "react-loading-skeleton";

import { AVATAR_FALLBACK_IMG } from "../../constant/index";

interface Props {
  avatarUrl?: string | null;
  alt?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  loading?: boolean;
}

const Avatar: React.FC<Props> = ({ avatarUrl, alt, size, loading }) => {
  let avatarSize, skeletonSize;

  switch (size) {
    case "xs":
      avatarSize = "h-6 w-6";
      skeletonSize = 24;
      break;
    case "sm":
      avatarSize = "h-8 w-8";
      skeletonSize = 32;
      break;
    case "base":
      avatarSize = "h-10 w-10";
      skeletonSize = 40;
      break;
    case "md":
      avatarSize = "h-12 w-12";
      skeletonSize = 48;
      break;
    case "lg":
      avatarSize = "h-14 w-14";
      skeletonSize = 56;
      break;
    case "xl":
      avatarSize = "h-16 w-16";
      skeletonSize = 64;
      break;
    default:
      avatarSize = "h-10 w-10";
      skeletonSize = 40;
      break;
  }

  if (loading) {
    return (
      <Skeleton circle={true} height={skeletonSize} width={skeletonSize} />
    );
  }

  return (
    <img
      className={classNames(avatarSize, "rounded-full")}
      src={avatarUrl || AVATAR_FALLBACK_IMG}
      alt={alt}
    />
  );
};

export default Avatar;

import React from "react";

import { useMeQuery, useToggleFollowMutation } from "@generated/graphql";
import { UserAddIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import { useRouter } from "next/router";

interface Props {
  userId: string;
  isFollowed: boolean;
  isMine?: boolean | null;
}

const FollowButton: React.FC<Props> = ({ userId, isFollowed, isMine }) => {
  const router = useRouter();
  const { data } = useMeQuery({ fetchPolicy: "cache-only" });

  const [toggleSubscription] = useToggleFollowMutation();

  if (isMine) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={async () => {
        if (data) {
          await toggleSubscription({
            variables: { userId },
          });
        } else {
          router.push("/login");
        }
      }}
      className={classNames(
        isFollowed ? "text-indigo-500" : "text-gray-500",
        "transform active:scale-95 inline-flex items-center  flex-0 px-2 py-1 text-xs font-medium hover:text-indigo-500 rounded hover:bg-gray-100 focus:outline-none"
      )}
    >
      {!isFollowed && (
        <UserAddIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      )}
      {isFollowed ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;

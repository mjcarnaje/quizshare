import React from "react";

import { useMeQuery, useToggleLikeMutation } from "@generated/graphql";
import { HeartIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import { useRouter } from "next/router";

interface Props {
  quizId: string;
  isLiked: boolean;
  likeCount: number;
}

const LikeButton: React.FC<Props> = ({ quizId, isLiked, likeCount }) => {
  const router = useRouter();
  const { data } = useMeQuery({ fetchPolicy: "cache-only" });

  const [toggleLike] = useToggleLikeMutation();

  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        if (data) {
          await toggleLike({
            variables: { quizId },
          });
        } else {
          router.push("/login");
        }
      }}
      className={classNames(
        isLiked ? "text-red-500" : "text-gray-500",
        "transform active:scale-95 inline-flex items-center px-3 py-2 text-base transition ease-linear duration-75 font-medium leading-4 hover:text-red-500 rounded-2xl hover:bg-gray-100 focus:outline-none"
      )}
    >
      <HeartIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
      {likeCount}
    </button>
  );
};

export default LikeButton;

import React from "react";

import { HeartIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";

import { useToggleLikeMutation } from "../../generated/graphql";

interface Props {
  quizId: string;
  isLiked: boolean;
  likeCount: number;
}

const LikeButton: React.FC<Props> = ({ quizId, isLiked, likeCount }) => {
  const [toggleLike] = useToggleLikeMutation();

  return (
    <button
      type="button"
      onClick={async () => {
        await toggleLike({
          variables: { quizId },
        });
      }}
      className={classNames(
        isLiked ? "text-red-500" : "text-gray-500",
        "transform active:scale-95 inline-flex items-center w-16 px-3 py-2 text-base transition ease-linear duration-75 font-medium leading-4 hover:text-red-500 rounded-2xl hover:bg-gray-100 focus:outline-none"
      )}
    >
      <HeartIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
      {likeCount}
    </button>
  );
};

export default LikeButton;

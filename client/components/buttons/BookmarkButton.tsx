import React from "react";

import { useMeQuery, useToggleBookmarkMutation } from "@generated/graphql";
import { classNames } from "@utils/index";
import { useRouter } from "next/router";

interface Props {
  quizId: string;
  isBookmarked: boolean;
}

const BookmarkButton: React.FC<Props> = ({ quizId, isBookmarked }) => {
  const router = useRouter();
  const { data } = useMeQuery({ fetchPolicy: "cache-only" });

  const [toggleBookmark] = useToggleBookmarkMutation();

  return (
    <button
      type="button"
      onClick={async () => {
        if (data) {
          await toggleBookmark({
            variables: { quizId },
          });
        } else {
          router.push("/login");
        }
      }}
      className={classNames(
        isBookmarked ? "text-blue-500" : "text-gray-500",
        "transform active:scale-95 inline-flex items-center transition ease-linear duration-75 justify-center p-2 text-base font-medium leading-4 border border-transparent hover:text-blue-500 rounded-2xl hover:bg-gray-100 focus:outline-none"
      )}
    >
      {isBookmarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )}
    </button>
  );
};

export default BookmarkButton;

import React from "react";

import { ChatIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

interface Props {
  quizId: string;
  commentCount: number;
}

const CommentButton: React.FC<Props> = ({ quizId, commentCount }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/quiz/${quizId}/view`);
      }}
      className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 transition duration-75 ease-linear transform border border-transparent active:scale-95 hover:text-green-500 rounded-2xl hover:bg-gray-100 focus:outline-none"
    >
      <ChatIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
      {commentCount}
    </button>
  );
};

export default CommentButton;
